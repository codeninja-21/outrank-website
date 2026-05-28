import PricingCard from "../molecules/pricingCard";

export default function Pricing() {
    const data = [
        {
            id: 1,
            title: "odading",
            price: "99",
            periodType: "year",
            lists: [
                "list pertama",
                "list kedua",
            ]
        },
        {
            id: 2,
            title: "mangole",
            price: "49",
            periodType: "month",
            lists: [
                "list ketiga",
                "list keempat",
            ]
        },
        {
            id: 3,
            title: "uenakk",
            price: "39",
            periodType: "week",
            lists: [
                "list kelima",
                "list keenam",
                "list ketujuh",
            ]
        },
    ]

    const listMap = data.map((items) => {
        return <PricingCard
            key={items.id}
            title={items.title}
            price={items.price}
            periodType={items.periodType}
            lists={items.lists}
        />
    })

    return (
        <section className="w-full h-screen py-10 overflow-hidden">
            <div className="w-full h-full px-8 flex flex-col gap-3">
                <p className="body-lg text-neutral-100">PRICING PLAN</p>
                <div className="w-full h-full flex gap-5 shrink">
                    {listMap}
                </div>
            </div>
        </section>
    );
}