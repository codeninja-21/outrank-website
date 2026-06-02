import SpinerCard from "../molecules/spinerCard";

export default function About() {
    return (
        <section className="relative w-full h-screen">
            <div className="w-full h-full px-8 flex flex-row">
                <div className="w-auto mt-16">
                    <h2 className="heading-2 text-red-500">Welcome</h2>
                    <div className="mt-5 flex flex-col gap-3 max-w-115">
                        <p className="body-md text-neutral-400">Coreflow was created for people who want real, sustainable results, not just another place with machines. We focus on guidance, structure, and a comfortable.</p>
                        <p className="body-md text-neutral-400">Here, you are not just another member you are part of a fitness journey where your effort truly matters.</p>
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center relative">
                    <SpinerCard />
                </div>
            </div>
        </section>
    );
}