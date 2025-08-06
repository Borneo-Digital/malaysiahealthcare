const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const isWindows = process.platform === 'win32';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function forceDeleteFile(filePath) {
  for (let i = 0; i < 5; i++) {
    try {
      if (fs.existsSync(filePath)) {
        // Try to change file permissions first (Windows)
        if (isWindows) {
          try {
            execSync(`attrib -r -h -s "${filePath}"`, { stdio: 'ignore' });
          } catch (e) {
            // Ignore permission errors
          }
        }
        
        fs.unlinkSync(filePath);
        console.log(`✓ Deleted: ${filePath}`);
      }
      return true;
    } catch (error) {
      if (error.code === 'EPERM' || error.code === 'EBUSY') {
        console.log(`⚠ File locked, attempt ${i + 1}/5: ${filePath}`);
        if (i < 4) {
          await sleep(1000 * (i + 1)); // Exponential backoff
          continue;
        }
        
        // Last resort: use Windows commands
        if (isWindows) {
          try {
            execSync(`del /f /q "${filePath}"`, { stdio: 'ignore' });
            console.log(`✓ Force deleted: ${filePath}`);
            return true;
          } catch (e) {
            console.log(`✗ Failed to delete: ${filePath}`);
            return false;
          }
        }
      }
      throw error;
    }
  }
  return false;
}

async function forceDeleteDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory doesn't exist: ${dirPath}`);
    return true;
  }

  console.log(`Cleaning directory: ${dirPath}`);

  // First, try to delete specific problematic files
  const traceFile = path.join(dirPath, 'trace');
  if (fs.existsSync(traceFile)) {
    await forceDeleteFile(traceFile);
  }

  // Try normal deletion first
  for (let i = 0; i < 3; i++) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ Successfully deleted: ${dirPath}`);
      return true;
    } catch (error) {
      if (error.code === 'EPERM' || error.code === 'EBUSY') {
        console.log(`⚠ Directory locked, attempt ${i + 1}/3`);
        
        // Kill any Node processes that might be locking files
        if (isWindows && i === 0) {
          try {
            console.log('Stopping Node processes...');
            execSync('taskkill /f /im node.exe', { stdio: 'ignore' });
            await sleep(2000);
          } catch (e) {
            // No Node processes running
          }
        }
        
        if (i < 2) {
          await sleep(2000);
          continue;
        }
        
        // Last resort: Windows rmdir command
        if (isWindows) {
          try {
            execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'ignore' });
            console.log(`✓ Force deleted directory: ${dirPath}`);
            return true;
          } catch (e) {
            console.log(`✗ Failed to delete directory: ${dirPath}`);
            // Try to at least delete the contents
            try {
              execSync(`del /f /s /q "${dirPath}\\*.*"`, { stdio: 'ignore' });
              console.log(`✓ Cleared directory contents: ${dirPath}`);
            } catch (e2) {
              console.log(`✗ Failed to clear directory contents: ${dirPath}`);
            }
            return false;
          }
        }
      }
      throw error;
    }
  }
  return false;
}

async function main() {
  console.log('🧹 Starting build cleanup...');
  
  const nextDir = path.join(process.cwd(), '.next');
  const cacheDir = path.join(process.cwd(), 'node_modules', '.cache');
  
  // Clean .next directory
  await forceDeleteDirectory(nextDir);
  
  // Clean cache directory
  await forceDeleteDirectory(cacheDir);
  
  console.log('✅ Cleanup completed!');
}

main().catch(console.error);
