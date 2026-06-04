import PricingCard from "../molecules/pricingCard";

export default function Pricing() {
    const data = [
        {
            id: 1,
            title: "Online Training",
            price: "39",
            periodType: "Month",
            lists: [
                "Community access",
                "Progress tracking dashboard",
                "Structured home programs",
                "On-demand training library",
                "Live virtual workout sessions",
            ]
        },
        {
            id: 2,
            title: "HYBIRD TRAINING",
            price: "79",
            periodType: "Month",
            lists: [
                "All Online Training features",
                "Offline group classes",
                "Gym facility access",
                "Guided training sessions",
                "Monthly performance review",
            ]
        },
        {
            id: 3,
            title: "FULL COACHING",
            price: "139",
            periodType: "Month",
            lists: [
                "Full Online + Offline access",
                "Personal coaching (1-on-1)",
                "Customized fitness plan",
                "Nutrition & recovery guidance",
                "Weekly progress monitoring",
                "Priority booking",
            ]
        },
    ]

    const listMap = data.map((items) => {
        return <PricingCard
            key={items.id}
            title={items.title}
            price={items.price}
            periodType={items.periodType}
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