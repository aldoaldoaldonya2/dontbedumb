"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    useGSAP(() => {
        gsap.from(".about-text", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power4.out",
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
            }
        });
    });

    return (
        <section id="about" className="min-h-screen w-full bg-white flex flex-col justify-center py-20 px-10">
            <div className="container mx-auto">
                <h2 className="about-text text-8xl font-notable mb-10 text-black">GHETTO EXPRESSIONISM</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="about-text">
                        <p className="text-2xl text-black leading-relaxed">
                            "Don't Be Dumb" is more than an album—it's a fragmented self-portrait shaped by image, control, and careful self-curation. Inspired by German Expressionism and curated by A$AP Rocky and his alter egos.
                        </p>
                    </div>
                    <div className="about-text">
                        <p className="text-2xl text-black leading-relaxed">
                            A cinematic aesthetic shaped by legendary filmmaker Tim Burton. A sonic exploration spanning punk, alternative, R&B, and jazz. This is the evolution of the Lord Pretty Flacko.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
