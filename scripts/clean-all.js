const fs = require("fs")
const path = require("path")

function removeDirectory(dirPath) {
    if (fs.existsSync(dirPath)) {
        try {
            fs.rmSync(dirPath, { recursive: true, force: true })
            console.log(`✅ Cleaned: ${dirPath}`)
        } catch (error) {
            console.warn(`⚠️  Could not remove ${dirPath}:`, error.message)
        }
    } else {
        console.log(`ℹ️  Directory not found: ${dirPath}`)
    }
}

function removeFile(filePath) {
    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath)
            console.log(`✅ Cleaned: ${filePath}`)
        } catch (error) {
            console.warn(`⚠️  Could not remove ${filePath}:`, error.message)
        }
    }
}

console.log("🧹 Deep cleaning all cache and build files...")

// Clean Next.js build
removeDirectory(path.join(process.cwd(), ".next"))

// Clean Vercel
removeDirectory(path.join(process.cwd(), ".vercel"))

// Clean Node.js cache
removeDirectory(path.join(process.cwd(), "node_modules", ".cache"))

// Clean npm cache (if exists locally)
removeDirectory(path.join(process.cwd(), ".npm"))

// Clean TypeScript cache
removeFile(path.join(process.cwd(), ".tsbuildinfo"))

// Clean ESLint cache
removeFile(path.join(process.cwd(), ".eslintcache"))

// Clean Prettier cache
removeFile(path.join(process.cwd(), ".prettiercache"))

// Clean any OS-specific files
removeFile(path.join(process.cwd(), ".DS_Store"))
removeFile(path.join(process.cwd(), "Thumbs.db"))

console.log("✨ Deep clean complete!")
