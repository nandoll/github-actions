import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export const ScrollBtn = (props) => {
  const { btnStyle, navParent } = props;

  const handleClick = (e) => {
    e.stopPropagation();

    if (navParent) {
      gsap.to(navParent.current, {
        x: "100%",
      });
    }

    gsap.to(window, {
      duration: 0.7,
      scrollTo: {
        y: `${props.target}`,
        offsetY: 70,
      },
    });
  };

  return (
    <a className={btnStyle} onClick={handleClick}>
      {props.text}
    </a>
  );
};
