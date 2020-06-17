import React, { Component } from "react";
import Media from 'react-media';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const items=[
      {
        id:1,
        img:'../assets/lifecycle/liver.png',
        name:'Liver'
      },
      {
        id:2,
        img:'../assets/lifecycle/vitaminD.png',
        name:'VitaminD'
      },
      {
        id:3,
        img:'../assets/lifecycle/kidney.png',
        name:'Kidney'
      },
      {
        id:4,
        img:'../assets/lifecycle/lungs.png',
        name:'Lungs'
      },
      {
        id:5,
        img:'../assets/lifecycle/infertility.png',
        name:'Infertility'
      },
      {
        id:6,
        img:'../assets/lifecycle/cbc.png',
        name:'CBC'
      },
      {
        id:7,
        img:'../assets/lifecycle/heart.png',
        name:'Heart'
      },
      {
        id:8,
        img:'../assets/lifecycle/thyroid.png',
        name:'Thyroid'
      },
      {
        id:9,
        img:'../assets/lifecycle/allergy.png',
        name:'Allergy'
      }
];

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
         {
            items.map(item=>{
             return( 
              <div className="cardStyling m-3">
              <Link to={`/lifestyle/${item.id}`}>
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
       <div className="container">
       <h5 className="mt-5">LifeCylce Disorder</h5>
         <div className="row">
            {
              items.map(item=>{
                return(
                  <div className="col-4 cardStyling mt-2">
                   <Link to={`/home/lifestyle/${item.id}`}>
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

