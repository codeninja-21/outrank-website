import Image from "next/image";
import Button from "./button";

const faces = "absolute w-full h-full bg-neutral-900 border border-neutral-600"

export function FaceTop({num}) {
    return (
        <div className={`${faces} -translate-y-43.75 rotate-x-90`}>
            <div className="size-full py-4 px-6">
                <h2 className="display-lg text-red-500/40">0{num}</h2>
            </div>
        </div>
    );
}

export function FaceBottom() {
    return (
        <div className={`${faces} translate-y-43.75 rotate-x-90`}>

        </div>
    );
}

export function FaceFront({title, description}) {
    return (
        <div className={`${faces} translate-z-43.75 rotate-x-0`}>
            <div className="h-full p-5 flex flex-col items-center justify-evenly">
                <h3 className="heading-3 text-red-500">{title}</h3>
                <p className="body-lg text-neutral-300 text-center">{description}</p>
                <Button>VIEW CLASS</Button>
            </div>
        </div>
    );
}

export function FaceBack() {
    return (
        <div className={`${faces} -translate-z-43.75 rotate-x-0`}>

        </div>
    );
}

export function FaceRight({source}) {
    return (
        <div className={`${faces} translate-x-43.75 rotate-y-90`}>
            <div className="">
                <Image
                    src={source}
                    alt="cube photo"
                    loading="eager"
                    width={500}
                    height={500}
                    className="size-full"
                />
            </div>
        </div>
    );
}

export function FaceLeft() {
    return (
        <div className={`${faces} -translate-x-43.75 rotate-y-270`}>

        </div>
    );
}