import Spline from "@splinetool/react-spline";

export default function Testimonials() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="w-full h-full">
                <div className="absolute left-8 top-5 z-0">
                    <h2 className="display-lg text-red-500/10">TESTIMONIALS</h2>
                </div>
                <div className="relative z-1 w-full h-full">
                    <Spline
                        scene="https://prod.spline.design/IvlzguBkbqDN-UC9/scene.splinecode" 
                    />
                </div>
            </div>
        </section>
    );
}