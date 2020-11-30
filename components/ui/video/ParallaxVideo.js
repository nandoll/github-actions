import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import BackgroundVideo from "./BackgroundVideo";

export default function ParallaxVideo({
  poster = `/static/bg/bg1.png`,
  source,
  title,
  body,
}) {
  const handleSource = (source) => {
    const sourceExtension = source.substr(source.lastIndexOf(".") + 1);

    const esimagen = handleExtensionImage(sourceExtension);
    return esimagen;
  };
  const handleExtensionImage = (image) => {
    // const imageFromAPI = (typeof image !== undefined) && image
    const imageFromAPI = image;
    const extensions = {
      name: "jpg",
      name: "jpeg",
      name: "png",
    };

    return Object.values(extensions).map((ext) =>
      ext === imageFromAPI ? true : false
    );
  };

  const showVideoBanner = (poster, source) => {
    <BackgroundVideo
      poster={poster}
      // onEnded={handleOnEnded}
      loop={true}
    >
      <source src={source} type="video/mp4" />
    </BackgroundVideo>;
  };

  const showBackground = (image) => {};
  return (
    <ParallaxProvider>
      <div className=" lg:w-full lg:h-full flex flex-row md:min-h-64 items-center mb-40">
        {handleSource(source) ? (
          <ParallaxBanner
            className="h-screen md:min-h-64"
            layers={[
              {
                children: showVideoBanner(poster, source),
                amount: 0.5,
              },
            ]}
          ></ParallaxBanner>
        ) : (
          <ParallaxBanner
            className="h-screen md:min-h-64"
            layers={[
              {
                image: source,
                amount: 0.5,
              },
            ]}
          ></ParallaxBanner>
        )}

        <div className="parallaxChildren absolute lg:max-w-sm lg:ml-48">
          <h2 className="bg-black italic text-white text-slg  pl-4 pt-2 pr-8 pb-2 inline">
            {title}
          </h2>
          <p className=" font-serif text-3xl text-white leading-10 my-6 ">
            {body}
          </p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
