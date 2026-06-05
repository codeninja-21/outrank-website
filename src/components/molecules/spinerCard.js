"use client"; 

import { useState, useEffect } from "react";
import ImageSpiner from "../atoms/imgSpiner";

export default function SpinerCard({ data }) {

    const [isHovered, setIsHovered] = useState(null)

    const dataImage = [
        {
            id: 1,
            source: data[0].image_first,
        },
        {
            id: 2,
            source: data[0].image_second,
        },
        {
            id: 3,
            source: data[0].image_third,
        },
        {
            id: 4,
            source: data[0].image_fourth,
        },
        {
            id: 5,
            source: data[0].image_fifth,
        },
        {
            id: 6,
            source: data[0].image_sixth,
        },
        {
            id: 7,
            source: data[0].image_seventh,
        },
    ]

    const totalImage = dataImage.length;

    const [screenSize, setScreenSize] = useState({
        isMobile: false,
        isTablet: false,
    });

    useEffect(() => {
        const handleResponsive = () => {
            const width = window.innerWidth;
            setScreenSize({
                isMobile: width < 640,
                isTablet: width >= 640 && width < 1024,
            });
        }
        handleResponsive();

        window.addEventListener('resize', handleResponsive);

        return () => window.removeEventListener('resize', handleResponsive);
    }, []);



    const { isMobile, isTablet } = screenSize
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