import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config"
import slideone from "../img/slide/slide-1.jpg";
import slidetwo from "../img/slide/slide-2.jpg";
import slidethree from "../img/slide/slide-3.jpg";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          <div>
            <img className="slider_img" alt="slider 1" src={slideone} />
          </div>
          <div>
            <img className="slider_img" alt="slider 2" src={slidetwo} />
          </div>
          <div>
            <img className="slider_img" alt="slider 3" src={slidethree} />
          </div>
        </Slider>
      </div>
    );
  }
}
