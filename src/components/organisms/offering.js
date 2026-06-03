import Cube from "../molecules/cube";

export default function Offering() {

    const data = [
        {
            id: 1,
            title: "Strength",
            description: "Build muscle, improve power, and train with structured movements.",
            src: "/image/Cube1.png",
            position: "first",
        },
        {
            id: 2,
            title: "CARDIO",
            description: "Improve flexibility, joint health, and movement control.",
            src: "/image/Cube2.png",
            position: "second",
        },
        {
            id: 3,
            title: "MOBILITY",
            description: "Improve flexibility, joint health, and movement control.",
            src: "/image/Cube3.png",
            position: "third",
        },
        {
            id: 4,
            title: "RECOVERY",
            description: "Support muscle repair and restore balance after training.",
            src: "/image/Cube4.png",
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
        <section className="w-full h-screen overflow-hidden">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-row perspective-[1000px]">
                    {cubeMap}
                </div>
            </div>
        </section>
    );
}