import { createClient } from '@/utils/supabase/server';

export default async function getHero() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('hero').select('id, title, description');

    if (error) throw new Error(error.message)

    return data;
}