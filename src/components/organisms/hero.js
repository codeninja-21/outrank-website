// "use client";

import getHero from '@/services/hero.service';
import Spline from '@splinetool/react-spline/next';

// function onLoad(splineApp){
//     window.splineApp = splineApp;
//     // console.info(window.splineHero)
// }

export default async function Hero() {
    try {
        const listHero = await getHero();
        
        return (
            <section className="relative w-full h-screen">
                {
                    listHero.map((hero) => (
                        <div key={hero.id} className="w-full h-full">
                            <div className="absolute w-full h-full z-1">
                                <Spline
                                    scene="/spline/scene.splinecode"
                                />
                            </div>
                            <div className="relative w-full h-full z-2 pointer-events-none">
                                <div className="absolute w-71 left-8 top-8">
                                    <p className="body-lg text-red-500 font-dm-mono">{hero.description}</p>
                                </div>
                                <div className="absolute w-220 right-8 bottom-8 max-lg:w-full max-lg:right-0">
                                    <h1 className="display-lg text-red-500 text-right max-lg:text-center">{hero.title}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        );
    } catch (error) {
        <section className="relative w-full h-screen">
            <div className="w-full h-full">
                <div className="absolute w-full h-full z-1">
                    <Spline
                        scene="/spline/scene.splinecode"
                    />
                </div>
                <div className="relative w-full h-full z-2 pointer-events-none">
                    <div className="absolute w-71 left-8 top-8">
                        <p className="body-lg text-red-500 font-dm-mono">Not Found</p>
                    </div>
                    <div className="absolute w-220 right-8 bottom-8 max-lg:w-full max-lg:right-0">
                        <h1 className="display-lg text-red-500 text-right max-lg:text-center">Not Found</h1>
                    </div>
                </div>
            </div>
        </section>
    }
}