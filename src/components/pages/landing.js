import Hero from "../organisms/hero";
import About from "../organisms/about";
import Offering from "../organisms/offering";
import Benefits from "../organisms/benefits";

export default function Landing() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-neutral-950">
            {/* <Hero/> */}
            {/* <About/> */}
            {/* <Offering/> */}
            <Benefits/>
        </main>
    );
}