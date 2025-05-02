"use server"

import { addContactToSheet, addFranchiseToSheet } from "@/lib/google-sheets"

export async function submitContactForm(formData: FormData) {
    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const subject = formData.get("subject") as string
        const message = formData.get("message") as string

        // Validate form data
        if (!name || !email || !phone || !message) {
            return { error: "All required fields must be filled" }
        }

        // Add to Google Sheet
        const timestamp = new Date().toISOString()
        const result = await addContactToSheet({
            name,
            email,
            phone,
            subject: subject || "N/A",
            message,
            timestamp,
        })

        if (!result.success) {
            console.error("Failed to add contact to sheet:", result.error)
            return { error: "Failed to submit form. Please try again." }
        }

        return { success: "Your message has been sent successfully!" }
    } catch (error) {
        console.error("Form submission error:", error)
        return { error: "An unexpected error occurred. Please try again." }
    }
}

export async function submitFranchiseForm(formData: FormData) {
    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const location = formData.get("city") as string
        const message = formData.get("message") as string

        // Validate form data
        if (!name || !email || !phone || !location) {
            return { error: "All required fields must be filled" }
        }

        // Add to Google Sheet
        const timestamp = new Date().toISOString()
        const result = await addFranchiseToSheet({
            name,
            email,
            phone,
            location,
            message: message || "N/A",
            timestamp,
        })

        if (!result.success) {
            console.error("Failed to add franchise inquiry to sheet:", result.error)
            return { error: "Failed to submit inquiry. Please try again." }
        }

        return { success: "Your franchise inquiry has been sent successfully!" }
    } catch (error) {
        console.error("Form submission error:", error)
        return { error: "An unexpected error occurred. Please try again." }
    }
}
