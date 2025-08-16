# Supabase Setup for Contact Form

This guide will help you set up Supabase to handle contact form submissions from your BIM Arcana showcase website.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. A new Supabase project

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `bim-arcana-showcase` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Select the region closest to your users
5. Click "Create new project"
6. Wait for the project to be created (this may take a few minutes)

## Step 2: Get Project Credentials

1. In your Supabase project dashboard, go to Settings → API
2. Copy the following values:
   - Project URL (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - Anon public key (starts with `eyJ...`)

## Step 3: Set Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important:** Replace the placeholder values with your actual Supabase project URL and anon key.

## Step 4: Create Database Table

1. In your Supabase dashboard, go to SQL Editor
2. Copy the contents of `supabase-schema.sql` file
3. Paste it into the SQL editor
4. Click "Run" to execute the SQL

This will create:
- `contact_inquiries` table with proper structure
- Indexes for performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your Supabase dashboard → Table Editor → `contact_inquiries` to see the submission

## Step 6: Verify RLS Policies

The table is configured with Row Level Security:
- **Public Insert**: Anyone can submit contact forms
- **Authenticated Read**: Only authenticated users can view submissions
- **Authenticated Update**: Only authenticated users can update submission status

## Database Schema

The `contact_inquiries` table has the following structure:

```sql
- id: UUID (Primary Key, auto-generated)
- first_name: TEXT (Required)
- last_name: TEXT (Required)
- email: TEXT (Required)
- company: TEXT (Optional)
- message: TEXT (Required)
- status: TEXT (Default: 'new', Options: 'new', 'read', 'replied')
- created_at: TIMESTAMP (Auto-generated)
- updated_at: TIMESTAMP (Auto-updated)
```

## Admin Access

To view and manage contact submissions:
1. Set up authentication in your Supabase project
2. Create admin users
3. Use the `ContactService.getInquiries()` method to fetch submissions
4. Use the `ContactService.updateInquiryStatus()` method to update status

## Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables" error**
   - Ensure your `.env` file exists and has the correct variables
   - Restart your development server after adding environment variables

2. **"Failed to submit inquiry" error**
   - Check your Supabase project is running
   - Verify the table was created correctly
   - Check the browser console for detailed error messages

3. **CORS errors**
   - In Supabase dashboard, go to Settings → API
   - Add your localhost URL to the allowed origins

### Environment Variables Not Loading?

If you're using Vite, ensure your environment variables start with `VITE_` prefix.

## Security Notes

- The anon key is safe to use in the browser (it's designed for public access)
- Row Level Security ensures data protection
- Only authenticated users can read/update submissions
- Public users can only create new submissions

## Next Steps

Consider implementing:
1. Email notifications for new submissions
2. Admin dashboard for managing inquiries
3. Form validation and rate limiting
4. Analytics on form submissions 