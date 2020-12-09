import React from "react";

export const VideoBg = (props) => {
  const { src, id, type } = props;

  return (
    <video
      className="absolute inset-0 w-full h-full bg-black bg-center bg-contain index-0"
      autoPlay
      muted
      loop
      id={id}
    >
      <source src={src} type={type} />
      Your browser does not support HTML5 video.
    </video>
  );
};
