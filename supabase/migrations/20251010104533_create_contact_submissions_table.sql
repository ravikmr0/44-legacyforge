/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text, nullable) - Contact's phone number (optional)
      - `message` (text) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `status` (text) - Status of the submission (pending, contacted, resolved)
      - `notes` (text, nullable) - Admin notes about the submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public INSERT to allow form submissions without authentication
    - Add policy for authenticated users to view all submissions (admin access)
    - Add policy for authenticated users to update submissions (admin management)

  3. Indexes
    - Index on `email` for faster lookups
    - Index on `created_at` for sorting by date
    - Index on `status` for filtering by status
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  notes text DEFAULT ''
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);