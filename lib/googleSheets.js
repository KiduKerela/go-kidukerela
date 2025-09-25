import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL

if (!SPREADSHEET_ID || !GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL) {
  console.warn('Missing Google Sheets environment variables')
}

const serviceAccountAuth = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

export async function addToGoogleSheets(formData) {
  try {
    if (!SPREADSHEET_ID || !GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL) {
      console.log('Google Sheets integration not configured, skipping...')
      return { success: false, error: 'Google Sheets not configured' }
    }

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    let sheet = doc.sheetsByTitle['Travel Inquiries']

    if (!sheet) {
      sheet = await doc.addSheet({
        title: 'Travel Inquiries',
        headerValues: [
          'Date',
          'Name',
          'Email',
          'Phone',
          'Destination',
          'Travel Type',
          'Travelers',
          'Budget',
          'Duration',
          'Travel Date',
          'Message'
        ]
      })

      await sheet.updateProperties({
        gridProperties: {
          frozenRowCount: 1
        }
      })

      await sheet.loadCells('A1:K1')
      for (let i = 0; i < 11; i++) {
        const cell = sheet.getCell(0, i)
        cell.textFormat = { bold: true }
        cell.backgroundColor = { red: 0.9, green: 0.9, blue: 0.9 }
      }
      await sheet.saveUpdatedCells()
    }

    const rowData = {
      'Date': new Date().toLocaleString(),
      'Name': formData.name || '',
      'Email': formData.email || '',
      'Phone': formData.phone || '',
      'Destination': formData.destination || '',
      'Travel Type': formData.travelType || '',
      'Travelers': formData.travelers || '',
      'Budget': formData.budget || '',
      'Duration': formData.duration || '',
      'Travel Date': formData.travelDate || '',
      'Message': formData.message || ''
    }

    await sheet.addRow(rowData)

    return { success: true }
  } catch (error) {
    console.error('Google Sheets error:', error)
    return { success: false, error: error.message }
  }
}