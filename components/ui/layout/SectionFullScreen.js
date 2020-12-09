import React from "react";

export const SectionFullScreen = (props) => {
  const { children, containerclass, ids } = props;

  return (
    <section className="h-screen w-full relative z-10" id={`${ids}`}>
      <div className="w-full h-full flex flex-row items-center">
        <div
          className={`container flex flex-col items-center ${containerclass}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
