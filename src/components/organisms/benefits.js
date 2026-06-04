import BenefitsCard from "../molecules/benefitsCard";

export default function Benefits() {

    const data = [
        {
            id: 1,
            title: "Balanced Conditioning",
            description: "A mix of strength, mobility, and endurance training designed to keep the body resilient and adaptable.",
        },
        {
            id: 2,
            title: "Sustainable Progress",
            description: "Training systems built for consistency, recovery, and results that last beyond short-term motivation.",
        },
        {
            id: 3,
            title: "Sustainable Strength",
            description: "Build functional strength that supports daily movement, training consistency, and long-term progress.",
        },
        {
            id: 4,
            title: "Guided Training",
            description: "Structured programs led by experienced trainers to ensure safe form, focus, and measurable improvement.",
        },
    ]

    const dataMap = data.map((items) => {
        return <BenefitsCard
            key={items.id}
            title={items.title}
            description={items.description}
        />
    })

    return (
        <section className="w-full h-screen bg-neutral-300 max-lg:h-auto max-lg:py-8">
            <div className="w-full h-full">
                <div className="w-full h-full px-8 flex flex-col justify-center gap-16">
                    <div className="">
                        <h2 className="display-lg text-red-500">THE BENEFITS</h2>
                    </div>
                    <div className="flex flex-row gap-14 max-lg:flex-col">
                        {dataMap}
                    </div>
                </div>
            </div>
        </section>
    );
}