// scripts/validateTranslations.ts
import fs from 'fs';
import path from 'path';

// Define supported locales
const locales = ['en', 'ms', 'id', 'zh', 'ar'];

// Define namespaces
const namespaces = ['common', 'home', 'contact', 'header', 'corporate-profile', 'navbar', 'footer'];

// Define a type for translation data with index signature
type TranslationData = {
  [key: string]: string | string[] | TranslationData;
};
// Validate all translation files
function validateTranslations() {
  console.log('Validating translations...');
  let hasErrors = false;
  
  // Get English translations as the reference
  // Use Record<string, any> to allow string indexing
  const englishTranslations: Record<string, TranslationData> = {};
  
  // Load all English translations
  namespaces.forEach(namespace => {
    try {
      const filePath = path.join(process.cwd(), 'locales', 'en', `${namespace}.json`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      englishTranslations[namespace] = JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading English ${namespace}.json:`, error);
      hasErrors = true;
    }
  });
  
  // Validate other locales against English
  locales.filter(locale => locale !== 'en').forEach(locale => {
    namespaces.forEach(namespace => {
      try {
        const filePath = path.join(process.cwd(), 'locales', locale, `${namespace}.json`);
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
          console.error(`❌ Missing translation file: ${locale}/${namespace}.json`);
          hasErrors = true;
          return;
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const translationData = JSON.parse(fileContent);
        
        // Check for missing keys
        const missingKeys = findMissingKeys(englishTranslations[namespace], translationData);
        if (missingKeys.length > 0) {
          console.error(`❌ Missing keys in ${locale}/${namespace}.json:`);
          console.error(missingKeys);
          hasErrors = true;
        } else {
          console.log(`✅ Validation passed for ${locale}/${namespace}.json`);
        }
      } catch (error) {
        console.error(`❌ Error reading/parsing ${locale}/${namespace}.json:`, error);
        hasErrors = true;
      }
    });
  });
  
  if (hasErrors) {
    console.error('❌ Translation validation failed');
    process.exit(1);
  } else {
    console.log('✅ All translations validated successfully');
  }
}

// Helper function to find missing keys
function findMissingKeys(reference: TranslationData, translation: TranslationData, prefix = ''): string[] {
  let missing: string[] = [];
  
  Object.keys(reference).forEach(key => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (translation[key] === undefined) {
      missing.push(fullKey);
    } else if (typeof reference[key] === 'object' && !Array.isArray(reference[key])) {
      missing = missing.concat(
        findMissingKeys(
          reference[key] as TranslationData, 
          (translation[key] as TranslationData) || {}, 
          fullKey
        )
      );
    }
  });
  
  return missing;
}

// Run validation
validateTranslations();