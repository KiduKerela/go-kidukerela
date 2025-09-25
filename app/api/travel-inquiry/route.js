import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { addToGoogleSheets } from '@/lib/googleSheets'

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone } = body
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabaseAdmin) {
      console.warn('Supabase not configured')
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 500 }
      )
    }

    // Insert into Supabase
    const { data: supabaseData, error: supabaseError } = await supabaseAdmin
      .from('travel_inquiries')
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone,
          destination: body.destination || null,
          travel_type: body.travelType || null,
          travelers: body.travelers || null,
          budget: body.budget || null,
          duration: body.duration || null,
          travel_date: body.travelDate || null,
          message: body.message || null
        }
      ])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      return NextResponse.json(
        { success: false, error: 'Failed to save to database' },
        { status: 500 }
      )
    }

    // Sync to Google Sheets (non-blocking)
    const sheetsResult = await addToGoogleSheets(body)
    console.log(sheetsResult);
    
    if (!sheetsResult.success) {
      console.warn('Google Sheets sync failed:', sheetsResult.error)
      // Don't fail the request if Google Sheets fails
    }

    return NextResponse.json({
      success: true,
      message: 'Travel inquiry submitted successfully',
      data: supabaseData?.[0]
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}