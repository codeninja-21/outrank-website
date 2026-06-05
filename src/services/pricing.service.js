import { createClient } from "@/utils/supabase/server";

export default async function getPricing() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('pricing').select('id, title, price, period, lists');

    return data;
}