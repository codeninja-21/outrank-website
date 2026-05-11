import Hero from "../organisms/hero";
import About from "../organisms/about";

export default function Landing() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-neutral-950">
              {/* <Hero></Hero>  */}
              <About></About>
        </main>
    );
}