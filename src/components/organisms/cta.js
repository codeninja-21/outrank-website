import CtaButton from "../molecules/ctaButton";
import CtaPanel from "../molecules/ctaPanel";

export default function Cta() {
    return (
        <section className="w-full h-screen overflow-hidden">
            <div className="relative w-full h-full flex items-center">
                <CtaPanel
                    position="top"
                />
                <div className="w-full flex flex-row items-center justify-around max-lg:gap-8 max-lg:justify-center">
                    <h2 className="heading-2 text-red-500">START</h2>
                    <CtaButton/>
                    <h2 className="heading-2 text-red-500">FOCUS</h2>
                </div>
                <CtaPanel
                    position="bottom"
                />
            </div>
        </section>
    );
}