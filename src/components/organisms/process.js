import ProcessCard from "../molecules/processCard";

export default function Process() {
    
    const data = [
        {
            id: 1,
            title: "ASSES",
            description: "Review goals and current fitness level.",
            position: "first",
        },
        {
            id: 2,
            title: "PLAN",
            description: "Create a structured training program.",
            position: "second",
        },
        {
            id: 3,
            title: "TRAINING",
            description: "Execute workouts online or offline.",
            position: "third",
        },
        {
            id: 4,
            title: "IMPROVE",
            description: "Track progress and refine results.",
            position: "fourth",
        },
    ]

    const dataMap = data.map((items) => {
        return <ProcessCard
            key={items.id}
            num={String(items.id)}
            title={items.title}
            description={items.description}
            position={items.position}
        />
    })

    return (
        <section className="w-full h-screen max-lg:h-auto">
            <div className="relative w-full h-full flex items-center">
                <div className="absolute w-full h-1 mb-45 bg-red-500 max-lg:h-full max-lg:w-1 max-xl:mb-0 max-xl:ml-12"></div>
                <div className="w-full flex justify-between max-lg:flex-col">
                    {dataMap}
                </div>
            </div>
        </section>
    );
}