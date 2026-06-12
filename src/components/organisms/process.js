import getProcess from "@/services/process.service";
import ProcessCard from "../molecules/processCard";

export default async function Process() {
    
    const dataSupabase = await getProcess();

    const dataMap = dataSupabase.map((items, index) => {
        return <ProcessCard
            key={index}
            num={String(index + 1)}
            title={items.title}
            description={items.description}
            position={items.position}
        />
    })

    return (
        <section className="w-full h-screen max-lg:h-auto" id="process">
            <div className="relative w-full h-full flex items-center">
                <div className="absolute w-full h-1 mb-45 bg-red-500 max-lg:h-full max-lg:w-1 max-xl:mb-0 max-xl:ml-12"></div>
                <div className="w-full flex justify-between max-lg:flex-col">
                    {dataMap}
                </div>
            </div>
        </section>
    );
}