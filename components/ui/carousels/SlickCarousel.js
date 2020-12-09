import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";

import { DemoCard } from "../card/DemoCard";
import { PostCard } from "../card/PostCard";

function SlickCarousel({ data, seccion = "", ruta = "" }) {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {data?.map((post) => (
          <PostCard key={post?.id} post={post} bloque="" />
        ))}
      </Slider>
      <div className="flex flex-row items-center px-3 pt-5">
        <button
          className="w-10 h-10 rounded-full flex flex-row justify-center items-center border border-gray-500 cursor-pointer mr-2"
          onClick={previous}
        >
          <i className="text-xs icon-angle-left"></i>
        </button>
        <button
          className="w-10 h-10 rounded-full flex flex-row justify-center items-center border border-gray-500 cursor-pointer mr-2"
          onClick={next}
        >
          <i className="text-xs icon-angle-right"></i>
        </button>
        <Link href={ruta}>
          <a className="inline-block rounded-xl border border-dashed border-blue-500 text-blue-500 px-5 py-2 leading-none">
            Ver más {seccion}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SlickCarousel;
