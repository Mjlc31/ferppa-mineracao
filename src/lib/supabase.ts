import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ujtdajpzvbyfxyrxqike.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_2BYKY8LHxUxh0kl63_On9w_Ql6MpNOc';

export const supabase = createClient(supabaseUrl, supabaseKey);
