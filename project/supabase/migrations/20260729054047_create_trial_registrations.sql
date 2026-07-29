
/*
# Create trial_registrations table

## Purpose
Stores free trial class registration form submissions from the Akar Ilmu Centre website.

## New Tables
- `trial_registrations`
  - `id` (uuid, primary key, auto-generated)
  - `parent_name` (text, not null) — Name of the parent/guardian
  - `child_age` (text, not null) — Age of the child
  - `phone_number` (text, not null) — Contact phone number
  - `subject` (text, not null) — Subject of interest
  - `message` (text, nullable) — Optional message about the child
  - `created_at` (timestamptz, default now()) — Submission timestamp

## Security
- RLS enabled on `trial_registrations`
- Policies use `TO anon, authenticated` since this is a no-auth public form
- Anyone can INSERT (submit a registration)
- Only anon+authenticated can SELECT (for future admin use)
*/

CREATE TABLE IF NOT EXISTS trial_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  child_age text NOT NULL,
  phone_number text NOT NULL,
  subject text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trial_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_registrations" ON trial_registrations;
CREATE POLICY "anon_select_registrations" ON trial_registrations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_registrations" ON trial_registrations;
CREATE POLICY "anon_insert_registrations" ON trial_registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_registrations" ON trial_registrations;
CREATE POLICY "anon_update_registrations" ON trial_registrations FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_registrations" ON trial_registrations;
CREATE POLICY "anon_delete_registrations" ON trial_registrations FOR DELETE
TO anon, authenticated USING (true);
