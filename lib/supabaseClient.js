import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iktiqgvnsiyevjjjxkit.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrdGlxZ3Zuc2l5ZXZqamp4a2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDkyMTgsImV4cCI6MjA3NjIyNTIxOH0.TqauTlN-4eziYjAt-hie9zKR8Uw8btETyyic74iYgtM'

export const supabase = createClient(supabaseUrl, supabaseKey)
