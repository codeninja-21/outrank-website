import getOffering from "@/services/offering.service";
import Cube from "../molecules/cube";

export default async function Offering() {

    const dataSupabase = await getOffering();

    const data = [
        {
            id: dataSupabase[0].id,
            title: dataSupabase[0].title,
            description: dataSupabase[0].description,
            src: dataSupabase[0].source,
            position: "first",
        },
        {
            id: dataSupabase[1].id,
            title: dataSupabase[1].title,
            description: dataSupabase[1].description,
            src: dataSupabase[1].source,
            position: "second",
        },
        {
            id: dataSupabase[2].id,
            title: dataSupabase[2].title,
            description: dataSupabase[2].description,
            src: dataSupabase[2].source,
            position: "third",
        },
        {
            id: dataSupabase[3].id,
            title: dataSupabase[3].title,
            description: dataSupabase[3].description,
            src: dataSupabase[3].source,
            position: "fourth",
        },
    ]

    const cubeMap = data.map((cube) => {
        return <Cube
                key={cube.id}
                title={cube.title}
                description={cube.description}
                source={cube.src}
                position={cube.position}
                num={String(cube.id)}
            />
    })

    return (
        <section className="w-full h-screen overflow-hidden max-sm:h-auto max-sm:py-10" id="offering">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-row perspective-[1000px] max-sm:flex-col">
                    {cubeMap}
                </div>
            </div>
        </section>
    );
}