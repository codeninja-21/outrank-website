import Cube from "../molecules/cube";

export default function Offering() {
    return (
        <section className="w-full h-screen">
            <div className="w-full h-full flex justify-center items-center">
                <div className="perspective-[1000px]">
                    <Cube/>
                </div>
            </div>
        </section>
    );
}