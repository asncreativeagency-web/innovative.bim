import { supabase } from './supabase'

export interface NewsletterSubscription {
  id?: string
  email: string
  subscribed_at?: string
  status?: 'active' | 'unsubscribed'
}

export class NewsletterService {
  /**
   * Subscribe to newsletter
   */
  static async subscribe(email: string): Promise<{
    success: boolean
    error?: string
    data?: NewsletterSubscription
  }> {
    try {
      // Check if email already exists (handle gracefully)
      const { data: existing, error: checkError } = await supabase
        .from('newsletter_subscriptions')
        .select('id, status')
        .eq('email', email)
        .maybeSingle() // Use maybeSingle to avoid errors if no record found

      if (checkError) {
        console.warn('Could not check existing subscription:', checkError.message)
        // Continue with insert anyway
      } else if (existing) {
        if (existing.status === 'active') {
          return {
            success: false,
            error: 'This email is already subscribed to our newsletter.'
          }
        } else if (existing.status === 'unsubscribed') {
          // Reactivate subscription
          const { error: updateError } = await supabase
            .from('newsletter_subscriptions')
            .update({ status: 'active' })
            .eq('id', existing.id)

          if (updateError) {
            return {
              success: false,
              error: 'Failed to reactivate subscription.'
            }
          }

          return {
            success: true,
            data: { email, status: 'active' }
          }
        }
      }

      // Create new subscription
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email,
            status: 'active'
          }
        ])
        .select()
        .single()

      if (error) {
        // Only log critical errors, not RLS policy issues
        if (!error.message.includes('row-level security')) {
          console.error('Newsletter subscription error:', error)
        }
        return {
          success: false,
          error: error.message || 'Failed to subscribe to newsletter'
        }
      }

      return {
        success: true,
        data: data as NewsletterSubscription
      }
    } catch (error) {
      console.error('Newsletter service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }

  /**
   * Unsubscribe from newsletter
   */
  static async unsubscribe(email: string): Promise<{
    success: boolean
    error?: string
  }> {
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ status: 'unsubscribed' })
        .eq('email', email)

      if (error) {
        console.error('Newsletter unsubscription error:', error)
        return {
          success: false,
          error: error.message || 'Failed to unsubscribe from newsletter'
        }
      }

      return { success: true }
    } catch (error) {
      console.error('Newsletter service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }

  /**
   * Get all subscriptions (for admin use)
   */
  static async getSubscriptions(): Promise<{
    success: boolean
    error?: string
    data?: NewsletterSubscription[]
  }> {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('subscribed_at', { ascending: false })

      if (error) {
        console.error('Newsletter service error:', error)
        return {
          success: false,
          error: error.message || 'Failed to fetch subscriptions'
        }
      }

      return {
        success: true,
        data: data as NewsletterSubscription[]
      }
    } catch (error) {
      console.error('Newsletter service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }
} 