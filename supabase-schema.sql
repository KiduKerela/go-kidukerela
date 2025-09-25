-- Create travel_inquiries table in Supabase
CREATE TABLE IF NOT EXISTS travel_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  destination VARCHAR(255),
  travel_type VARCHAR(100),
  travelers VARCHAR(50),
  budget VARCHAR(100),
  duration VARCHAR(100),
  travel_date VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_travel_inquiries_email ON travel_inquiries(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_travel_inquiries_created_at ON travel_inquiries(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE travel_inquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy for inserting new records (allow all authenticated users to insert)
CREATE POLICY "Allow insert for all users" ON travel_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create a policy for reading records (adjust based on your needs)
CREATE POLICY "Allow read for all users" ON travel_inquiries
  FOR SELECT
  USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_travel_inquiries_updated_at
  BEFORE UPDATE ON travel_inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();