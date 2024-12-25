/*
  # Create testimonials table and storage

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `person_name` (text)
      - `role` (text)
      - `company_name` (text)
      - `content` (text)
      - `image` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `testimonials` table
    - Add policies for authenticated users to manage testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  person_name text NOT NULL,
  role text NOT NULL,
  company_name text NOT NULL,
  content text NOT NULL,
  image text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);