import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://smxjdnrowmzhljfuzalf.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPERBASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
