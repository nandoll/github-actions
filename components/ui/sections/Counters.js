import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

export const DownCounter = (props) => {
  const cntCounter = useRef();
  const { starCount, endCount } = props;

  useEffect(() => {
    var startCount = starCount,
      num = { var: startCount };

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section-comunidad",
          start: "top 50%",
          //end: "+=3000",
          scrub: false,
          //markers: true,
        },
      })
      .to(num, {
        var: endCount,
        duration: 3,
        ease: "none",
        onUpdate: changeNumber,
      });

    function changeNumber() {
      cntCounter.current.innerHTML = num.var.toFixed();
    }
  }, []);

  return (
    <div className="leading-none font-serif font-black text-blue-500 mb-4 lg:mb-8 xl:mb-12 comunidad--number">
      <span ref={cntCounter}>74000</span>
    </div>
  );
};
