import Image from "next/image";

export default function ImageSpiner({source}) {
    return (
        <Image
            src={source}
            alt="Spiner Image"
            width={232}
            height={128}
            className="skew-12"
        />
    );
}