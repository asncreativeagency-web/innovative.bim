// Environment configuration with hardcoded values
export const env = {
  SUPABASE_URL: 'https://grxyknfwwnewjthqafsp.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyeHlrbmZ3d25ld2p0aHFhZnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNDQ3MDAsImV4cCI6MjA3MDgyMDcwMH0.rseFinQAzrmKhwn-LuK6MUl-jihQM4EjVFSjW0EdsaM',
} as const

// No validation needed with hardcoded values
export const validateEnv = () => {
  // Environment variables are hardcoded, no validation needed
  // Silent validation - no console logs
}

// Check if we're in development mode
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD 