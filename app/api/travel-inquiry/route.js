export const runtime = 'edge'

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { addToGoogleSheetsEdge } from '@/lib/googleSheetsEdge'

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

    let supabaseData = null
    let supabaseSaved = false

    // Try to insert into Supabase if configured
    if (supabaseAdmin) {
      try {
        const { data, error: supabaseError } = await supabaseAdmin
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
        } else {
          supabaseData = data?.[0]
          supabaseSaved = true
        }
      } catch (error) {
        console.error('Supabase connection error:', error.message)
      }
    } else {
      console.warn('Supabase not configured')
    }

    // Sync to Google Sheets (non-blocking)
    const sheetsResult = await addToGoogleSheetsEdge(body)
    console.log(sheetsResult);

    if (!sheetsResult.success) {
      console.warn('Google Sheets sync failed:', sheetsResult.error)
      // Don't fail the request if Google Sheets fails
    }

    // Return success if at least one storage method worked
    if (supabaseSaved || sheetsResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Travel inquiry submitted successfully',
        data: supabaseData,
        savedTo: {
          supabase: supabaseSaved,
          googleSheets: sheetsResult.success
        }
      })
    }

    // Both failed
    return NextResponse.json(
      { success: false, error: 'Failed to save inquiry. Please try again.' },
      { status: 500 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}