import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DemoCard } from "../card/DemoCard";

export default class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
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
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="px-2" key={1}>
            <DemoCard />
          </div>
          <div className="px-2" key={2}>
            <DemoCard />
          </div>
          <div className="px-2" key={3}>
            <DemoCard />
          </div>
          <div className="px-2" key={4}>
            <DemoCard />
          </div>
          <div className="px-2" key={5}>
            <DemoCard />
          </div>
          <div className="px-2" key={6}>
            <DemoCard />
          </div>
        </Slider>
        <div className="flex flex-row items-center px-3 pt-5">
          <button
            className="w-10 h-10 rounded-full flex flex-row justify-center items-center border border-gray-500 cursor-pointer mr-2"
            onClick={this.previous}
          >
            <i className="text-xs icon-angle-left"></i>
          </button>
          <button
            className="w-10 h-10 rounded-full flex flex-row justify-center items-center border border-gray-500 cursor-pointer mr-2"
            onClick={this.next}
          >
            <i className="text-xs icon-angle-right"></i>
          </button>
          <a
            className="inline-block rounded-xl border border-dashed border-blue-500 text-blue-500 px-5 py-2 leading-none"
            href="#"
          >
            Ver más {this.props.seccion}
          </a>
        </div>
      </div>
    );
  }
}
