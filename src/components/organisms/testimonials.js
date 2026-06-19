"use client";

import TestimonialCard from "../molecules/testimonialCard";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

function animationGsap(container) {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.set(".card-first", {
                y: -100,
                x: -450,
                rotate: 6.2
            });
    
            gsap.set(".card-second", {
                y: 100,
                x: -270,
                rotate: -5.18
            });
    
            gsap.set(".card-third", {
                y: -100,
                x: 0,
                rotate: 18
            });
    
            gsap.set(".card-fourth", {
                y: 150,
                x: 340,
                rotate: 8
            });
    
            gsap.set(".card-fifth", {
                y: -100,
                x: 500,
                rotate: -10
            });
        });

        Draggable.create(".card", {
            bounds: container.current,
            inertia: true
        });

        return () => {
            mm.revert();
        };

    }, { scope: container, dependencies: [] });
}

export default function Testimonials() {
    const container = useRef(null);

    animationGsap(container)

    const data = [
        {
            id: 1,
            name: "SAMUEL",
            message: "The environment pushed growth without pressure. Each class felt intentional, focused, and aligned with long-term goals.",
            photo: "/image/profile-1.webp",
            position: "first"
        },
        {
            id: 2,
            name: "DANIEL",
            message: "Clear guidance and well-planned sessions made every workout purposeful. The focus on form and consistency made a real difference.",
            photo: "/image/profile-2.webp",
            position: "second"
        },
        {
            id: 3,
            name: "MAYA LEAN",
            message: "The training structure helped improve strength and discipline without feeling overwhelming. Progress felt steady and sustainable.",
            photo: "/image/profile-3.webp",
            position: "third"
        },
        {
            id: 4,
            name: "JONATHAN",
            message: "A solid system that builds confidence, strength, and routine. Results came naturally through consistency.",
            photo: "/image/profile-4.webp",
            position: "fourth"
        },
        {
            id: 5,
            name: "SAMANTHA",
            message: "Balanced programming between strength and recovery kept training effective while avoiding burnout.",
            photo: "/image/profile-5.webp",
            position: "fifth"
        },
    ]

    const testimonialMap = data.map((testimonial) => {
        return <TestimonialCard 
            key={testimonial.id}
            name={testimonial.name}
            message={testimonial.message}
            photo={testimonial.photo}
            position={testimonial.position}
        />
    })

    return (
        <section className="relative w-full h-screen overflow-hidden section max-lg:h-auto" ref={container}>
            <div className="w-full h-full">
                <div className="absolute left-8 top-5 z-0">
                    <h2 className="display-lg text-red-500/10">TESTIMONIALS</h2>
                </div>
                <div className="relative z-1 w-full h-full flex flex-row items-center justify-center max-lg:flex-wrap max-lg:gap-3 max-lg:py-16">
                    {testimonialMap}
                </div>
            </div>
        </section>
    );
}