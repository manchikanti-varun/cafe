const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

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

console.log("🧹 Cleaning dependencies and reinstalling...")

// Remove node_modules
removeDirectory(path.join(process.cwd(), "node_modules"))

// Remove package-lock.json to ensure fresh install
const lockFile = path.join(process.cwd(), "package-lock.json")
if (fs.existsSync(lockFile)) {
    try {
        fs.unlinkSync(lockFile)
        console.log(`✅ Cleaned: package-lock.json`)
    } catch (error) {
        console.warn(`⚠️  Could not remove package-lock.json:`, error.message)
    }
}

console.log("📦 Installing dependencies...")
try {
    execSync("npm install", { stdio: "inherit" })
    console.log("✨ Dependencies reinstalled successfully!")
} catch (error) {
    console.error("❌ Failed to install dependencies:", error.message)
    process.exit(1)
}
