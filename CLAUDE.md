# Malaysia Healthcare Travel Council Project Guide

## Development Commands
```
cd mhtc-web
npm run dev             # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run validate:translations # Validate translation files
```

## Code Style Guidelines
- **Framework**: Next.js with TypeScript and Tailwind CSS
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/Header`)
- **Components**: Client components use `"use client"` directive at top
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Internationalization**: Use `useTranslation` hook with proper typing
- **Types**: Prefer interfaces for objects, strict type checking enabled
- **Error Handling**: Use try/catch with fallbacks for translations
- **Formatting**: Use consistent spacing and indentation
- **UI Components**: Use Radix UI components when appropriate

## Translation Pattern
Add new translations to all locale files (en, ms, id, zh, ar) and run validation.