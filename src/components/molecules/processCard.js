export default function ProcessCard({num, title, description, position}) {

    const style = {
        first: {
            wrapper: "mt-0",
            content: "mt-50",
        },
        second: {
            wrapper: "mt-10",
            content: "mt-40",
        },
        third: {
            wrapper: "mt-20",
            content: "mt-30",
        },
        fourth: {
            wrapper: "mt-30",
            content: "mt-20",
        },
    }

    return (
        <div className={`w-1/4 h-100 bg-neutral-300 ${style[position].wrapper}`}>
            <div className={`px-8 flex flex-col gap-5 ${style[position].content}`}>
                <h6 className="heading-6 text-red-500">{num}</h6>
                <div className="flex flex-col gap-3">
                    <h3 className="heading-3 text-red-500">{title}</h3>
                    <p className="body-xsm text-neutral-600">{description}</p>
                </div>
            </div>
        </div>
    );
}