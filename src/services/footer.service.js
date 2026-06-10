import { createClient } from "@/utils/supabase/server";

export default async function getFooter() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('footer').select('*');

    return data;
}