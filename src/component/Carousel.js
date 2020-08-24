import React, { Component } from 'react';
import Slider from "react-slick"
import Appoint from './MakeAppointMent'

class ImgCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 3000,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return (
        <div className="carousel">
        <Slider {...settings}>
        <div className="">
          <img src="../assets/images/1.jpg"/>
        </div>
        <div className="">
          <img src="../assets/images/2.jpg"/>
        </div>
        <div className="">
          <img src="../assets/images/3.jpg"/>
        </div>
        </Slider>
        
       </div>
      );
  }
};

export default ImgCarousel;