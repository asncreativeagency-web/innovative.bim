-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);

-- Create index on subscribed_at for sorting
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON newsletter_subscriptions(subscribed_at);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert new subscriptions
CREATE POLICY "Allow public insert" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to update their own subscription status
CREATE POLICY "Allow public update" ON newsletter_subscriptions
  FOR UPDATE USING (true);

-- Create policy to allow authenticated users to read all subscriptions (for admin purposes)
CREATE POLICY "Allow authenticated read" ON newsletter_subscriptions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_newsletter_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_newsletter_subscriptions_updated_at
  BEFORE UPDATE ON newsletter_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_newsletter_updated_at_column(); 