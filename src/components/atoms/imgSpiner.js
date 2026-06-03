import Image from "next/image";

export default function ImageSpiner({source}) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <Image
                src={source}
                alt="Spiner Image"
                width={232}
                height={128}
                priority
                className="object-cover"
            />
        </div>
    );
}