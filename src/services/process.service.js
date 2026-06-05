import { createClient } from "@/utils/supabase/server";

export default async function getProcess() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('process').select('id, title, description, position');

    return data;
}