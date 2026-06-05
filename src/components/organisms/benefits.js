import getBenefits from "@/services/benefit.service";
import BenefitsCard from "../molecules/benefitsCard";

export default async function Benefits() {

    const dataSupabase = await getBenefits();

    const dataMap = dataSupabase.cards.map((items, index) => {
        return <BenefitsCard
            key={index}
            title={items.title}
            description={items.description}
        />
    })

    return (
        <section className="w-full h-screen bg-neutral-300 max-lg:h-auto max-lg:py-8">
            <div className="w-full h-full">
                <div className="w-full h-full px-8 flex flex-col justify-center gap-16">
                    <div className="">
                        <h2 className="display-lg text-red-500">{dataSupabase.title}</h2>
                    </div>
                    <div className="flex flex-row gap-14 max-lg:flex-col">
                        {dataMap}
                    </div>
                </div>
            </div>
        </section>
    );
}