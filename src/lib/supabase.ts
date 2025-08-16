import { createClient } from '@supabase/supabase-js'
import { env, validateEnv } from '../config/env'

// Validate environment variables
validateEnv()

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)

// Database types for contact inquiries
export interface ContactInquiry {
  id?: string
  first_name: string
  last_name: string
  email: string
  company?: string
  message: string
  created_at?: string
  status?: 'new' | 'read' | 'replied'
}

// Table name for contact inquiries
export const CONTACT_INQUIRIES_TABLE = 'contact_inquiries' 