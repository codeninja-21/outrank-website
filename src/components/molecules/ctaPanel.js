export default function CtaPanel({position}) {

    const positions = {
        top: "top-0 items-start flex-row",
        bottom: "bottom-0 items-end flex-row-reverse",
    } 
    
    return (
        <div className={`absolute left-0 right-0 w-full flex ${positions[position]}`}>
            {
                Array.from({length: 4}).map((_, index) => 
                    <div key={index} className={`w-1/4 bg-neutral-300 h-${index + 1}0`}></div> 
                )
            }
        </div>
    );
}