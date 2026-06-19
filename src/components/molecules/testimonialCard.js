export default function TestimonialCard({ name, message, photo, position = "first" }) {

    const positions = {
        first: "card-first",
        second: "card-second",
        third: "card-third",
        fourth: "card-fourth max-lg:hidden",
        fifth: "card-fifth",
    }

    return (
        <div className={`lg:absolute flex flex-col items-start gap-3 group transition-all ease-linear card ${positions[position]}`}>
            <div className="px-2 py-1 bg-neutral-950/40 rounded-xs">
                <p className="body-xsm text-neutral-100/20 lg:group-hover:text-neutral-100 transition-all ease-in-out max-lg:text-neutral-100">{name}</p>
            </div>
            <div className={`relative h-100 w-80 p-5 flex flex-col justify-end gap-2.5 bg-cover bg-center bg-no-repeat rounded-sm overflow-hidden`} style={{ backgroundImage: `url(${photo})` }}>
                <div className="absolute top-0 bottom-0 right-0 left-0 z-0 lg:group-hover:bg-linear-to-t group-hover:from-neutral-950 group-hover:to-neutral-950/0 transition-all ease-in-out max-lg:bg-linear-to-t max-lg:from-neutral-950 max-lg:to-neutral-950/0"></div>

                <svg width="53" height="39" viewBox="0 0 53 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-1">
                    <path opacity="0.1" d="M16.0799 0.128325L22.5599 0.105453L22.5993 11.2654L16.7193 11.2861C14.1993 11.295 13.0019 12.0193 13.0125 15.0192L13.0197 17.0592L23.2196 17.0232L23.2937 38.0231L0.133868 38.1048L0.0529708 15.185C0.0173929 5.10504 5.87999 0.164326 16.0799 0.128325ZM45.3597 0.0249792L51.7197 0.00253127L51.7591 11.1625L45.8791 11.1832C43.3592 11.1921 42.2817 11.9159 42.2923 14.9159L42.2995 16.9559L52.4994 16.9199L52.5735 37.9198L29.2937 38.0019L29.2128 15.0821C29.1772 5.00212 35.1598 0.0609807 45.3597 0.0249792Z" fill="#F5F5F5"/>
                </svg>

                <p className="body-sm z-1 text-neutral-100/20 lg:group-hover:text-neutral-100 transition-all ease-in-out max-lg:text-neutral-100">{message}</p>
            </div>
        </div>
    );
};