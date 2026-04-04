"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/all";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function Hero() {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ScrollSmoother.create({
    //     smooth: 1.5,
    //     effects: true
    // });

    useGSAP(() => {
        gsap.to("#vinyl", {
            scrollTrigger: {
                trigger: "#vinyl",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            y: "-2rem",
            ease: "none",
        });

    });


    return (
        <section id="hero" className="h-screen w-full bg-foreground overflow-hidden">
            <div className="container mx-auto flex max-md:flex-col max-md:justify-center max-md:text-center items-center text-black justify-between h-full relative z-10 px-4 md:px-0">
                <div>
                    <h1 className="text-7xl max-md:text-5xl font-bold font-notable">MANIFESTO</h1>
                    <h1 className="text-7xl max-md:text-4xl font-bold font-lacquer">A Lullaby for the Sophisticated Ignorant</h1>
                    <p className="mt-4 text-4xl max-md:text-xl">Intelligence isn't about knowing all the answers</p>
                    <p className="mt-4 text-6xl max-md:text-3xl font-limelight">Common sense isn't common</p>
                </div>
                <div
                    id="vinyl"
                    className="relative w-3/4 md:w-[400px] aspect-square select-none flex items-center justify-center z-20 max-md:mt-10"
                >
                </div>
            </div>
        </section>
    );
}