export default function PricingList({list}) {
    return (
        <div className="flex flex-col gap-1.5">
            <p className="body-md text-neutral-400">{list}</p>
            <div className="w-full h-px bg-neutral-600"></div>
        </div>
    );
}