import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flgxwnsnewokprmrpzux.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZ3h3bnNuZXdva3BybXJwenV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjQzNDUsImV4cCI6MjAzMzg0MDM0NX0.7Yo9oRszmxqvhdDmJCxR5ySSEdAL7JwhN_r5_Pls3DM'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
