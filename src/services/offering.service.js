import { createClient } from "@/utils/supabase/server";

export default async function getOffering() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('offering').select('id, title, description, source');
    
    return data;
}