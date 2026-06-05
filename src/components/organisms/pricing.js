import getPricing from "@/services/pricing.service";
import PricingCard from "../molecules/pricingCard";

export default async function Pricing() {

    const dataSupabase = await getPricing();

    const listMap = dataSupabase.map((items, index) => {
        return <PricingCard
            key={index}
            title={items.title}
            price={items.price}
            periodType={items.period}
            lists={items.lists}
        />
    })

    return (
        <section className="w-full h-screen pt-10 overflow-hidden max-lg:h-auto max-lg:pb-10">
            <div className="w-full h-full px-8 flex flex-col gap-3">
                <p className="body-lg text-neutral-100">PRICING PLAN</p>
                <div className="w-full h-full flex gap-5 shrink max-lg:flex-col max-lg:gap-8">
                    {listMap}
                </div>
            </div>
        </section>
    );
}