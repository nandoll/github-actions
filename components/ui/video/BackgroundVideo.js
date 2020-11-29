import React from "react";

export default function BackgroundVideo(video) {
  const {
    // wrapperClass,
    // videoClass,
    loop = true,
    muted = true,
    autoPlay = true,
    onEnded,
    poster,
    children,
    onPlaying,
    onPlay,
    // el: El = "div",
  } = video;
  return (
    <video
      // className={`${classNames.video}${videoClass ? " " + videoClass : ""}`}
      className="w-full fixed top-0 -z-10"
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
      onEnded={onEnded}
      onPlaying={onPlaying}
      onPlay={onPlay}
    >
      {children}
    </video>
  );
}
