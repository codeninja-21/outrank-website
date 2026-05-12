import BenefitsCard from "../molecules/benefitsCard";

export default function Benefits() {
    return (
        <section className="w-full h-screen bg-neutral-300">
            <div className="w-full h-full">
                <div className="w-full h-full px-8 flex flex-col justify-center gap-16">
                    <div className="">
                        <h2 className="display-lg text-red-500">THE BENEFITS</h2>
                    </div>
                    <div className="flex flex-row gap-14">
                        <BenefitsCard
                            title="Balanced Conditioning"
                            description="A mix of strength, mobility, and endurance training designed to keep the body resilient and adaptable."
                        />
                        <BenefitsCard
                            title="Balanced Conditioning"
                            description="A mix of strength, mobility, and endurance training designed to keep the body resilient and adaptable."
                        />
                        <BenefitsCard
                            title="Balanced Conditioning"
                            description="A mix of strength, mobility, and endurance training designed to keep the body resilient and adaptable."
                        />
                        <BenefitsCard
                            title="Balanced Conditioning"
                            description="A mix of strength, mobility, and endurance training designed to keep the body resilient and adaptable."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}