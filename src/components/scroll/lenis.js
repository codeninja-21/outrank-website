"use client";

import Lenis from 'lenis'
import { useEffect } from 'react';

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            lerp: 0.05,
            smoothWheel: true
        })

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, []);

    return null;
}