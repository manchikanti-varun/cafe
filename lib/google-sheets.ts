"use server"

import { google } from "googleapis"

// Initialize Google Sheets API with the credentials from environment variables
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const sheets = google.sheets({ version: "v4", auth })

// Contact form spreadsheet ID from environment variables
const CONTACT_SPREADSHEET_ID = process.env.CONTACT_SPREADSHEET_ID
// Franchise form spreadsheet ID from environment variables
const FRANCHISE_SPREADSHEET_ID = process.env.FRANCHISE_SPREADSHEET_ID

export async function addContactToSheet(data: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    timestamp: string
}) {
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: CONTACT_SPREADSHEET_ID,
            range: "Sheet1!A:F", 
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[data.timestamp, data.name, data.email, data.phone, data.subject, data.message]],
            },
        })

        return { success: true, data: response.data }
    } catch (error) {
        console.error("Error adding contact to Google Sheet:", error)
        return { success: false, error }
    }
}

export async function addFranchiseToSheet(data: {
    name: string
    email: string
    phone: string
    location: string
    message: string
    timestamp: string
}) {
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: FRANCHISE_SPREADSHEET_ID,
            range: "Sheet1!A:F", 
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[data.timestamp, data.name, data.email, data.phone, data.location, data.message]],
            },
        })

        return { success: true, data: response.data }
    } catch (error) {
        console.error("Error adding franchise inquiry to Google Sheet:", error)
        return { success: false, error }
    }
}
