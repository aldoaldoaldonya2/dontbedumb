// components/GsapScrollSmoother.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother'; // Make sure to install from the appropriate source

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GsapScrollSmoother = ({ children }) => {
  const smoother = useRef(null);

  useEffect(() => {
    // Create the ScrollSmoother instance within a useEffect or useLayoutEffect
    smoother.current = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // enables data-speed and data-lag attributes
      smoothTouch: 0.1, // shorter smoothing on touch devices
    });

    return () => {
      // Cleanup when component unmounts
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return (
    // ScrollSmoother requires a wrapper element (id="smooth-wrapper") and a content element (id="smooth-content")
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default GsapScrollSmoother;
