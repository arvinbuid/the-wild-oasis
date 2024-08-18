import {createClient} from "@supabase/supabase-js";
export const supabaseUrl = "https://dzvzphczalsmiclfphyv.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
