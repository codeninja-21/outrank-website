// "use client";

import Spline from '@splinetool/react-spline/next';

// function onLoad(splineApp){
//     window.splineApp = splineApp;
//     // console.info(window.splineHero)
// }

export default function Hero() {

    return (
        <section className="relative w-full h-screen">
            <div className="w-full h-full">
                <div className="absolute w-full h-full z-1">
                    <Spline
                        scene="/spline/scene.splinecode"
                    />
                </div>
                <div className="relative w-full h-full z-2 pointer-events-none">
                    <div className="absolute w-71 left-8 top-8">
                        <p className="body-lg text-red-500 font-dm-mono">Reconnect with your body through mindful movement and intentional breath.</p>
                    </div>
                    <div className="absolute w-220 right-8 bottom-8 max-lg:w-full max-lg:right-0">
                        <h1 className="display-lg text-red-500 text-right max-lg:text-center">FORGE YOUR STRENGTH</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}