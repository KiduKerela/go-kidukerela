// Edge Runtime compatible Google Sheets integration
// Uses direct REST API calls instead of google-spreadsheet package

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL

if (!SPREADSHEET_ID || !GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL) {
  console.warn('Missing Google Sheets environment variables')
}

// Helper function to create JWT token for Google Sheets API
async function getAccessToken() {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  }

  const now = Math.floor(Date.now() / 1000)
  const claim = {
    iss: GOOGLE_CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }

  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  const encodedClaim = btoa(JSON.stringify(claim)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  const signatureInput = `${encodedHeader}.${encodedClaim}`

  // Import the private key
  const privateKey = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(GOOGLE_PRIVATE_KEY),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  )

  // Sign the JWT
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(signatureInput)
  )

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

  const jwt = `${signatureInput}.${encodedSignature}`

  // Exchange JWT for access token
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  })

  const data = await response.json()
  return data.access_token
}

// Helper function to convert PEM to ArrayBuffer
function pemToArrayBuffer(pem) {
  const pemContents = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '')
  const binaryString = atob(pemContents)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}

export async function addToGoogleSheetsEdge(formData) {
  try {
    if (!SPREADSHEET_ID || !GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL) {
      console.log('Google Sheets integration not configured, skipping...')
      return { success: false, error: 'Google Sheets not configured' }
    }

    const accessToken = await getAccessToken()

    // Prepare the row data
    const values = [
      [
        new Date().toLocaleString(),
        formData.name || '',
        formData.email || '',
        formData.phone || '',
        formData.destination || '',
        formData.travelType || '',
        formData.travelers || '',
        formData.budget || '',
        formData.duration || '',
        formData.travelDate || '',
        formData.message || ''
      ]
    ]

    // Append the row to the sheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Travel Inquiries:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: values
        })
      }
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || 'Failed to append to Google Sheets')
    }

    return { success: true }
  } catch (error) {
    console.error('Google Sheets error:', error)
    return { success: false, error: error.message }
  }
}
