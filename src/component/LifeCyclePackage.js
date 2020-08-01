import React, { Component } from "react";
import Media from 'react-media';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {items} from './LifeDisorder';

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
      <div className="container properPadding">
        <h3 className="mt-5">LifeCylce Disorder</h3><hr/>
        <div className="lifeCylce">
        <Slider {...settings}>
         {
            items.map(item=>{
             return( 
              <div className="cardStyling m-3">
              <Link to={`/lifecycle/${item.id}`}>
              <img src={item.img} alt={item.name}/>
             </Link>
            </div>
             )})   
         }
        </Slider>
        </div>  
      </div>
    );
  }
}

class ShowAtOnce extends Component{
  render(){
    return(
      <>
       <div className="container" style={{paddingTop:"80px"}}>
       <h3 className="mt-5">LifeCylce Disorder</h3><hr/>
         <div className="row">
            {
              items.map(item=>{
                return(
                  <div className="col-4 cardStyling mt-2">
                   <Link to={`/lifecycle/${item.id}`}>
                   <Card>  
                   <CardImg src={item.img} alt={item.name}/>
                   </Card>
                   </Link>
                  </div>
                  
                )
               })
            }
          </div> 
       </div>
      </>
    )}
}

export default class LifeCylce extends Component {
  
  render(){
   return(
   <>  
    <Media query="(min-width:768px)">
    <Slick/>
   </Media>
   <Media query="(max-width:767px)">
   <ShowAtOnce/>
   </Media>  
   </>
   );}
}

