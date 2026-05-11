import ImageSpiner from "../atoms/imgSpiner";

export default function SpinerCard() {
    return (
        <div className="w-auto h-full mx-auto overflow-hidden flex flex-col justify-center items-center">
            <ImageSpiner
                source={"/image/About Card 1.png"}
            />
            <ImageSpiner
                source={"/image/About Card 2.png"}
            />
            <ImageSpiner
                source={"/image/About Card 3.png"}
            />
            <ImageSpiner
                source={"/image/About Card 4.png"}
            />
            <ImageSpiner
                source={"/image/About Card 5.png"}
            />
            <ImageSpiner
                source={"/image/About Card 6.png"}
            />
            <ImageSpiner
                source={"/image/About Card 7.png"}
            />
        </div>
    );
}