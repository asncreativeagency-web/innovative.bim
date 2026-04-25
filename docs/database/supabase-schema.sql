-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert new inquiries
CREATE POLICY "Allow public insert" ON contact_inquiries
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to read all inquiries (for admin purposes)
CREATE POLICY "Allow authenticated read" ON contact_inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update inquiry status
CREATE POLICY "Allow authenticated update" ON contact_inquiries
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 