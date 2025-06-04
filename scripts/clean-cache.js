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

console.log("🧹 Cleaning cache directories...")

// Clean Node.js cache
removeDirectory(path.join(process.cwd(), "node_modules", ".cache"))

// Clean npm cache (if exists locally)
const npmCachePath = path.join(process.cwd(), ".npm")
if (fs.existsSync(npmCachePath)) {
    removeDirectory(npmCachePath)
}

// Clean TypeScript cache
removeDirectory(path.join(process.cwd(), ".tsbuildinfo"))

// Clean ESLint cache
const eslintCache = path.join(process.cwd(), ".eslintcache")
if (fs.existsSync(eslintCache)) {
    try {
        fs.unlinkSync(eslintCache)
        console.log(`✅ Cleaned: ${eslintCache}`)
    } catch (error) {
        console.warn(`⚠️  Could not remove ${eslintCache}:`, error.message)
    }
}

console.log("✨ Cache clean complete!")
