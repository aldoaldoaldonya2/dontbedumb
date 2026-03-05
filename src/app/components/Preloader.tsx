"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/dist/Flip";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip);
}

function preventDefaultScroll(e: Event) {
    e.preventDefault();
}

function preventScrollKeys(e: KeyboardEvent) {
    if ([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}

function disableScrollEvents() {
    window.addEventListener('wheel', preventDefaultScroll, { passive: false });
    window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys, false);
}

function enableScrollEvents() {
    window.removeEventListener('wheel', preventDefaultScroll, { passive: false } as EventListenerOptions);
    window.removeEventListener('touchmove', preventDefaultScroll, { passive: false } as EventListenerOptions);
    window.removeEventListener('keydown', preventScrollKeys, false);
}

export default function Preloader() {
    const container = useRef<HTMLDivElement>(null);
    const albumRef = useRef<HTMLImageElement>(null);
    const vinylRef = useRef<HTMLImageElement>(null);
    const vinylWrapperRef = useRef<HTMLDivElement>(null);
    const preloadOverlayRef = useRef<HTMLDivElement>(null);

    const [isLoaded, setIsLoaded] = useState(false);

    useGSAP(() => {
        gsap.to(albumRef.current, {
            scale: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        if (typeof window !== "undefined") {
            const handleLoad = () => setIsLoaded(true);

            if (document.readyState === "complete") {
                setIsLoaded(true);
            } else {
                window.addEventListener("load", handleLoad);
                return () => window.removeEventListener("load", handleLoad);
            }
        }
    }, { scope: container });

    useGSAP(() => {
        if (typeof window !== "undefined") {
            document.documentElement.style.overflowY = "scroll";
            disableScrollEvents();
        }

        if (!isLoaded || !albumRef.current || !vinylRef.current || !vinylWrapperRef.current) return;

        const enableScroll = () => {
            document.documentElement.style.overflowY = "";
            enableScrollEvents();
        };

        gsap.killTweensOf(albumRef.current);

        const tl = gsap.timeline();
        gsap.to(vinylRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "none",
        });

        tl.to(albumRef.current, {
            delay: 0.5,
            yPercent: 400,
            opacity: 0.5,
            duration: 4,
            ease: "power4.inOut",
        })
            .fromTo(vinylWrapperRef.current,
                { scale: 1.0 },
                {
                    scale: 1.1,
                    duration: 1,
                    ease: "power4.out"
                },
                "<0.2"
            )
            .add(() => {
                const target = document.querySelector("#vinyl");
                if (target && vinylWrapperRef.current && preloadOverlayRef.current) {
                    const state = Flip.getState(vinylWrapperRef.current);

                    vinylWrapperRef.current.classList.remove("-z-10");
                    target.appendChild(vinylWrapperRef.current);

                    gsap.to(preloadOverlayRef.current, {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => {
                            if (preloadOverlayRef.current) {
                                preloadOverlayRef.current.style.display = 'none';
                                enableScroll(); 
                            }
                        }
                    });

                    window.dispatchEvent(new CustomEvent("preloaderFinished"));

                    Flip.from(state, {
                        duration: 1.8,
                        ease: "expo.inOut",
                        scale: true,
                        absolute: true,
                    });
                }
            });

        return () => {
            enableScrollEvents();
        };
    }, { dependencies: [isLoaded], scope: container });

    return (
        <div
            ref={preloadOverlayRef}
            className="fixed inset-0 z-50 bg-gray-500 flex items-center justify-center overflow-hidden"
        >
            <div ref={container} className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div
                    ref={vinylWrapperRef}
                    className="absolute inset-0 flex items-center justify-center -z-10"
                >
                    <Image
                        ref={vinylRef}
                        src="/assets/images/vinyl.png"
                        alt="Vinyl Record"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>

                <Image
                    ref={albumRef}
                    src="/assets/images/album.png"
                    alt="Album Cover"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-contain shadow-2xl z-10"
                    priority
                />
            </div>
        </div>
    );
}