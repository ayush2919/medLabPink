import React, { Component } from "react";
import Media from 'react-media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Slick extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 3000,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    return (
      <div className="container">
        <h4 className="mt-5">LifeCylce Disorder</h4>
        <div className="lifeCylce">
        <Slider {...settings}>
          <div className="cardStyling">
           <a href="#"><img src="../assets/lifecycle/liver.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/vitaminD.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/kidney.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/lungs.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/infertility.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/cbc.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/heart.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/thyroid.png"/></a>
          </div>
          <div className="cardStyling">
          <a href="#"><img src="../assets/lifecycle/allergy.png"/></a>
          </div>
        </Slider>
        </div>  
      </div>
    );
  }
}


export default class LifeCylce extends Component {
  
  render(){
   return(
   <>  
    <Media query="(min-width:768px)">
    <Slick/>
   </Media>
   <Media query="(max-width:767px)">
   <h3>ayush</h3>
   </Media>  
   </>
   );}
}