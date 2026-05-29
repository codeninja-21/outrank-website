import Hero from "../organisms/hero";
import About from "../organisms/about";
import Offering from "../organisms/offering";
import Benefits from "../organisms/benefits";
import Testimonials from "../organisms/testimonials";
import Pricing from "../organisms/pricing";
import Process from "../organisms/process";
import Cta from "../organisms/cta";

export default function Landing() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-neutral-950">
            {/* <Hero/> */}
            <About/>
            <Offering/>
            <Benefits/>
            {/* <Testimonials/> */}
            <Pricing/>
            <Process/>
            <Cta/>
        </main>
    );
}