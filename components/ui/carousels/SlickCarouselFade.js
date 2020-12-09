import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarruselFade extends Component {
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
    const { children, classes } = this.props;

    const settings = {
      dots: true,
      arrows: false,
      fade: true,
      cssEase: "linear",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={`${classes}`}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {children}
        </Slider>
      </div>
    );
  }
}
