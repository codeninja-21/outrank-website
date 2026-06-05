import { createClient } from "@/utils/supabase/server";

export default async function getCta() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('cta').select('id, tagline_left, tagline_right, button_text, button_url');

    return data;
}