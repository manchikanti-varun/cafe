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

console.log("🧹 Cleaning .next directory...")
removeDirectory(path.join(process.cwd(), ".next"))
console.log("✨ Clean complete!")
