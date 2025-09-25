# Travel Inquiry Form Setup Guide

## Overview
Your travel inquiry form has been successfully created with the following features:
- ✅ Form validation using react-hook-form + zod
- ✅ Supabase PostgreSQL database integration
- ✅ Google Sheets auto-sync
- ✅ Responsive design with shadcn/ui components
- ✅ Success/error toast notifications
- ✅ Loading states and error handling

## Files Created/Modified

### New Files:
- `lib/supabase.js` - Supabase database configuration
- `lib/googleSheets.js` - Google Sheets integration
- `app/api/travel-inquiry/route.js` - API endpoint for form submissions
- `supabase-schema.sql` - Database schema for Supabase table
- `.env.example` - Environment variables template

### Modified Files:
- `components/InquiryForm/travelInquiry.tsx` - Updated to use API endpoint

## Setup Instructions

### 1. Supabase Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Create the database table** by running the SQL from `supabase-schema.sql` in your Supabase SQL editor

3. **Get your environment variables:**
   - Go to Project Settings → API
   - Copy the Project URL and anon key
   - Copy the service_role key (for admin operations)

### 2. Google Sheets Setup (Optional)

1. **Create a Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one

2. **Enable Google Sheets API:**
   - Go to APIs & Services → Library
   - Search for "Google Sheets API" and enable it

3. **Create Service Account:**
   - Go to APIs & Services → Credentials
   - Click "Create Credentials" → "Service Account"
   - Fill in the details and create

4. **Generate Private Key:**
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" → "Create New Key" → "JSON"
   - Download the JSON file

5. **Create Google Spreadsheet:**
   - Create a new Google Spreadsheet
   - Share it with the service account email (found in the JSON file)
   - Give "Editor" permissions
   - Copy the spreadsheet ID from the URL

### 3. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Sheets Configuration (Optional)
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----"
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
```

**Note:** The Google Sheets integration is optional. If not configured, form submissions will still work and save to Supabase.

### 4. Test the Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test form submission:**
   - Navigate to your form page
   - Fill out the required fields (name, email, phone)
   - Submit the form
   - Check Supabase dashboard for the new record
   - Check Google Sheets for the new row (if configured)

## Form Fields

### Required Fields:
- **Name** (2-100 characters)
- **Email** (valid email format)
- **Phone** (valid phone number format)

### Optional Fields:
- **Destination** (preferred travel destination)
- **Travel Type** (domestic, international, honeymoon, family, business, adventure)
- **Number of Travelers** (1, 2, 3, 4, 5+)
- **Budget Range** (various INR ranges)
- **Trip Duration** (1-3 days, 4-7 days, 1-2 weeks, 2+ weeks)
- **Travel Date** (preferred travel date)
- **Message** (additional requirements/preferences)

## Database Schema

The `travel_inquiries` table includes:
- `id` (UUID, primary key)
- `name`, `email`, `phone` (required fields)
- `destination`, `travel_type`, `travelers`, `budget`, `duration`, `travel_date`, `message` (optional fields)
- `created_at`, `updated_at` (timestamps)

## Google Sheets Integration

When configured, each form submission automatically:
- Creates a new row in the specified Google Spreadsheet
- Includes a timestamp and all form data
- Formats headers with bold text and gray background
- Handles errors gracefully (won't fail form submission if Sheets sync fails)

## Error Handling

The system includes comprehensive error handling:
- Form validation with user-friendly error messages
- Database connection error handling
- Google Sheets sync error handling (non-blocking)
- Loading states during form submission
- Success/error toast notifications

## Next Steps

1. Configure your environment variables
2. Test the form submission flow
3. Customize the form styling if needed
4. Set up monitoring and analytics
5. Consider adding email notifications for new submissions