-- Store public contact form submissions securely in the backend
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Explicitly deny direct client access; inserts will happen only through the backend function using service credentials
DROP POLICY IF EXISTS "No direct reads of contact submissions" ON public.contact_submissions;
CREATE POLICY "No direct reads of contact submissions"
ON public.contact_submissions
FOR SELECT
USING (false);

DROP POLICY IF EXISTS "No direct inserts of contact submissions" ON public.contact_submissions;
CREATE POLICY "No direct inserts of contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (false);

DROP POLICY IF EXISTS "No direct updates of contact submissions" ON public.contact_submissions;
CREATE POLICY "No direct updates of contact submissions"
ON public.contact_submissions
FOR UPDATE
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "No direct deletes of contact submissions" ON public.contact_submissions;
CREATE POLICY "No direct deletes of contact submissions"
ON public.contact_submissions
FOR DELETE
USING (false);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
ON public.contact_submissions (created_at DESC);