import getCta from "@/services/cta.service";
import CtaButton from "../molecules/ctaButton";
import CtaPanel from "../molecules/ctaPanel";

export default async function Cta() {

    const dataSupabase = await getCta();

    return (
        <section className="w-full h-screen overflow-hidden">
            <div className="relative w-full h-full flex items-center">
                <CtaPanel
                    position="top"
                />
                <div className="w-full flex flex-row items-center justify-around max-lg:gap-8 max-lg:justify-center">
                    <h2 className="heading-2 text-red-500">{dataSupabase[0].tagline_left}</h2>
                    <CtaButton onClick={"/contact"} button_text={dataSupabase[0].button_text} />
                    <h2 className="heading-2 text-red-500">{dataSupabase[0].tagline_right}</h2>
                </div>
                <CtaPanel
                    position="bottom"
                />
            </div>
        </section>
    );
}