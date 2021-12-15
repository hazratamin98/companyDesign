import React, { Component } from "react"
import Slider from "react-slick"
// import { baseUrl } from "./config"
import slideone from '../img/slide/slide-1.jpg'
import slidetwo from '../img/slide/slide-2.jpg'
import slidethree from '../img/slide/slide-3.jpg'

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
     
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade:true,
       autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",


     
    

      
    
    }
    return (
      <div  >
       
        <Slider {...settings}>
          <div >
            <img className="slider_img" src={slideone } />
          </div>
          <div >
            <img  className="slider_img" src={slidetwo} />
          </div>
          <div >
            <img className="slider_img" src={slidethree } />
          </div>
          
        </Slider>
      </div>
    )
  }
}