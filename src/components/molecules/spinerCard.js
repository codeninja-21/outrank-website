"use client"; 

import { useState } from "react";
import ImageSpiner from "../atoms/imgSpiner";

export default function SpinerCard() {

    const [isHovered, setIsHovered] = useState(null)

    const dataImage = [
        {
            id: 1,
            source: "/image/About Card 1.png",
        },
        {
            id: 2,
            source: "/image/About Card 2.png",
        },
        {
            id: 3,
            source: "/image/About Card 3.png",
        },
        {
            id: 4,
            source: "/image/About Card 4.png",
        },
        {
            id: 5,
            source: "/image/About Card 5.png",
        },
        {
            id: 6,
            source: "/image/About Card 6.png",
        },
        {
            id: 7,
            source: "/image/About Card 7.png",
        },
    ]

    const totalImage = dataImage.length;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth > 640 && window.innerWidth < 1024;
    const radius = isMobile ? 140 : isTablet ? 200 : 280;

    return (
        <div className="w-full h-full mx-auto flex flex-col justify-center items-center">
            <div className="relative w-0 h-0">
                {dataImage.map((image, index) => {
                    const angle = (index / totalImage) * 360;
                
                    return (
                        <div
                            key={image.id}
                            onMouseEnter={() => setIsHovered(image.id)}
                            onMouseLeave={() => setIsHovered(null)}
                            className="absolute w-58 h-32 -translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-300 max-lg:w-44 max-lg:h-24 max-sm:w-32 max-sm:h-20"
                            style={{
                                transform: `
                                    rotate(${angle}deg) 
                                    translateY(-${radius}px)
                                `
                            }}
                        >
                            <div 
                                className="w-full h-full transition-transform duration-300"
                                style={{
                                    transform: `
                                        rotate(-40deg)
                                        ${isHovered === image.id ? 'skewX(-5deg)' : 'skewX(-32deg)'}
                                    `
                                }}
                            >
                                <ImageSpiner source={image.source}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}