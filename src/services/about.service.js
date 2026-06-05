import { createClient } from "@/utils/supabase/server";

export default async function getAbout() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('about').select('id, title, description_first, description_second, image_first, image_second, image_third, image_fourth, image_fifth, image_sixth, image_seventh');
    // const { data, error } = await supabase.from('about').select('*');

    return data;
}