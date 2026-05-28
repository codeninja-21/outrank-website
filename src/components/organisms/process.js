import ProcessCard from "../molecules/processCard";

export default function Process() {
    
    let banana = ("b" + "a" + + "a" + "a")
    // <p className="body-lg text-neutral-50">{banana}</p>
    
    return (
        <section className="w-full h-screen">
            <div className="relative w-full h-full flex items-center">
                <div className="absolute w-full h-1 mb-45 bg-red-500"></div>
                <div className="w-full flex justify-between">
                    <ProcessCard
                        num={banana}
                        title={banana}
                        description={banana}
                        position="first"
                    />
                    <ProcessCard
                        num={banana}
                        title={banana}
                        description={banana}
                        position="second"
                    />
                    <ProcessCard
                        num={banana}
                        title={banana}
                        description={banana}
                        position="third"
                    />
                    <ProcessCard
                        num={banana}
                        title={banana}
                        description={banana}
                        position="fourth"
                    />
                </div>
            </div>
        </section>
    );
}