"use client";

import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";
import { useRef, startTransition } from "react";



export default function TransitionProvider({ children }) {
    const firstLayer = useRef(null);
    const secondLayer = useRef(null);

    const animateIn = (next) => {
        const tl = gsap
            .timeline({
                onComplete: next,
            })
            .to(firstLayer.current, {
                transformOrigin: "bottom",
                scaleY: 1,
                duration: 0.7,
                ease: "power3.in",
            })
            .to(secondLayer.current, {
                transformOrigin: "bottom",
                scaleY: 1,
                duration: 0.7,
                ease: "power3.in",
            }, "<50%")

        return () => {
            tl.kill();
        }
    }

    const animateOut = (next) => {
        const tl = gsap
            .timeline({
                onComplete: next,
            })
            .fromTo(secondLayer.current, 
            {
                transformOrigin: "top",
                scaleY: 1,
                delay: 0.5,
            },
            {
                scaleY: 0,
                duration: 0.5,
                ease: "power3.out",
            })
            .fromTo(firstLayer.current, 
            {
                transformOrigin: "top",
                scaleY: 1,
                delay: 0.5,
            },
            {
                scaleY: 0,
                duration: 1,
                ease: "power3.out",
            }, "<50%")
            .call(() => {
                requestAnimationFrame(() => {
                    startTransition(next);
                });
            }, undefined, "<50%");
            
        return () => {
            tl.kill();
        }
    }

    return (
        <TransitionRouter
            auto
            leave={(next) => animateIn(next)}
            enter={(next) => animateOut(next)}
        >
            <div className="fixed inset-0 bg-red-600 black z-40 pointer-events-none" ref={firstLayer} style={{ transform: "scaleY(0)" }}></div>
            <div className="fixed inset-0 bg-neutral-950 black z-50 pointer-events-none" ref={secondLayer} style={{ transform: "scaleY(0)" }}></div>
            {children}
        </TransitionRouter>
    );
}