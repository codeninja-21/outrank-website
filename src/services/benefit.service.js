import { createClient } from "@/utils/supabase/server";

export default async function getBenefits() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('benefit').select('id, title, cards').single();

    return data;
}