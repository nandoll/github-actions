import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import BackgroundVideo from "./BackgroundVideo";
import PropTypes from "prop-types";

const ParallaxVideo = ({ poster, source, title, body }) => {
  const handleSource = (source) => {
    if (!source) {
      throw new Error("es necesario el campo source");
    }
    const sourceExtension = source.substr(source.lastIndexOf(".") + 1);
    //Compara quea sea una imagen
    const [esimagen] = handleExtensionImage(sourceExtension);
    console.log(esimagen);
    return esimagen;
  };
  const handleExtensionImage = (image) => {
    const extensions = {
      name: "jpg",
      name: "jpeg",
      name: "png",
    };
    return Object.values(extensions).map((ext) =>
      ext === image ? true : false
    );
  };
  const showVideoBanner = (poster, source) => {
    return (
      <BackgroundVideo poster={poster} loop={true}>
        {/* Asumiendo que solo viene un mp4 */}
        <source src={source} type="video/mp4" />
      </BackgroundVideo>
    );
  };

  return (
    <ParallaxProvider>
      <div className=" lg:w-full lg:h-full flex flex-row md:min-h-64 items-center mb-40">
        <ParallaxBanner
          className="h-screen md:min-h-64"
          layers={[
            handleSource(source)
              ? { image: source, amount: 0.5 }
              : { children: showVideoBanner(poster, source), amount: 0.5 },
          ]}
        ></ParallaxBanner>

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
};

ParallaxVideo.propTypes = {
  source: PropTypes.string.isRequired,
};

export default ParallaxVideo;
