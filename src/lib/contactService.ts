import { supabase, CONTACT_INQUIRIES_TABLE } from './supabase'
import type { ContactInquiry } from './supabase'

export class ContactService {
  /**
   * Submit a new contact inquiry
   */
  static async submitInquiry(inquiry: Omit<ContactInquiry, 'id' | 'created_at' | 'status'>): Promise<{
    success: boolean
    error?: string
    data?: ContactInquiry
  }> {
    try {
      console.log('Attempting to submit inquiry:', inquiry)
      
      const { data, error } = await supabase
        .from(CONTACT_INQUIRIES_TABLE)
        .insert([
          {
            first_name: inquiry.first_name,
            last_name: inquiry.last_name,
            email: inquiry.email,
            company: inquiry.company || null,
            message: inquiry.message,
            status: 'new'
          }
        ])
        .select()
        .single()

      console.log('Supabase response - data:', data, 'error:', error)

      if (error) {
        console.error('Supabase error:', error)
        return {
          success: false,
          error: error.message || 'Failed to submit inquiry'
        }
      }

      console.log('Inquiry submitted successfully:', data)
      return {
        success: true,
        data: data as ContactInquiry
      }
    } catch (error) {
      console.error('Contact service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }

  /**
   * Get all contact inquiries (for admin use)
   */
  static async getInquiries(): Promise<{
    success: boolean
    error?: string
    data?: ContactInquiry[]
  }> {
    try {
      const { data, error } = await supabase
        .from(CONTACT_INQUIRIES_TABLE)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
        return {
          success: false,
          error: error.message || 'Failed to fetch inquiries'
        }
      }

      return {
        success: true,
        data: data as ContactInquiry[]
      }
    } catch (error) {
      console.error('Contact service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }

  /**
   * Update inquiry status
   */
  static async updateInquiryStatus(id: string, status: ContactInquiry['status']): Promise<{
    success: boolean
    error?: string
  }> {
    try {
      const { error } = await supabase
        .from(CONTACT_INQUIRIES_TABLE)
        .update({ status })
        .eq('id', id)

      if (error) {
        console.error('Supabase error:', error)
        return {
          success: false,
          error: error.message || 'Failed to update inquiry status'
        }
      }

      return { success: true }
    } catch (error) {
      console.error('Contact service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }
} 