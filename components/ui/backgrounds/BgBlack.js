import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

export default function BgBlack() {
  const firstSection = useRef();

  useEffect(() => {
    gsap.to(firstSection.current, {
      scrollTrigger: {
        trigger: "#section-main",
        toggleActions: "play reverse none none",
        start: "75% 65%",
        end: "150% bottom",
        scrub: true,
        //markers: true,
      },
      backgroundColor: "white",
      duration: 1,
    });
  }, []);

  return (
    <div
      className="w-full h-screen fixed z-5 inset-0"
      id="test"
      ref={firstSection}
    ></div>
  );
}
