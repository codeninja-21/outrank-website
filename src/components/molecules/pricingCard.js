import PricingList from "../atoms/pricingList";

export default function PricingCard({title, price, periodType, lists}) {

    const listMap = lists.map((list, index) => 
        <PricingList
            key={index}
            list={list}
        />
    )

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-10">
                <div className="w-full h-40 px-1.5 bg-red-500">
                    <h3 className="heading-3">{title}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    {listMap}
                </div>
            </div>

            <div className="flex items-end justify-end">
                <h2 className="display-lg text-red-500">${price}</h2>
                <p className="body-md text-neutral-400 mb-5">/{periodType}</p>
            </div>
        </div>
    );
}