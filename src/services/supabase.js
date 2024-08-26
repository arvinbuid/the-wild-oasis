import {createClient} from "@supabase/supabase-js";
export const supabaseUrl = "https://dzvzphczalsmiclfphyv.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6dnpwaGN6YWxzbWljbGZwaHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MzkyMTksImV4cCI6MjAzOTMxNTIxOX0.SgAmxtbjfmR66ctT6mjX4vBsMowuwh0s6Q3CXWN-b1o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
