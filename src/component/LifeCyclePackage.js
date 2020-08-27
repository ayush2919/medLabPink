import React, { Component } from "react";
import Media from 'react-media';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {items} from './LifeDisorder';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchImages} from "./redux/actionCreator";

const mapStateToProps= state =>{
  return{
    images:state.images
}}

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
      <div className="container" style={{paddingTop:"80px"}}>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}> 
        <h1 className="text-center mt-1">LifeCylce Disorder</h1><hr/>
        </ScrollAnimation>
        <div className="lifeCylce">
        <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={300}>  
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
        </ScrollAnimation>
        </div>  
      </div>
    );
  }
}

class ShowAtOnce extends Component{
  render(){
    var x=300
    return(
      <>
       <div className="container mt-5">
       <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
       <h2 className="text-center mt-1">LifeCylce</h2><hr/>
       </ScrollAnimation>
         <div className="row">
            {
              items.map(item=>{
                return(
                  <div className="col-4 cardStyling mt-2" > 
                   <Link to={`/lifecycle/${item.id}`}>
                   <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={x=x+30}>  
                   <Card>   
                   <CardImg src={item.img} alt={item.name}/>
                   </Card>
                   </ScrollAnimation>
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

class LifeCylce extends Component {
  
  componentDidMount(){
    fetchImages();
   }

  render(){
    // console.log(this.props.images.images)
   return(
   <div className="lifeCycleDiv">
    <div id="lifecycle">  
    <Media query="(min-width:768px)">
    <Slick/>
   </Media>
   <Media query="(max-width:767px)">
   <ShowAtOnce/>
   </Media>  
   </div>
   </div>    
   );}
}

export default withRouter(connect(mapStateToProps,fetchImages)(LifeCylce));