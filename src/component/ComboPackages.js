import React, { Component } from "react";
import Slider from "react-slick";
import ReportForm from './ReportForm';

export default class ComboPackages extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="container" style={{paddingTop:'80px'}}>
        <div className="row">  
        <div className="col-md-6 col-sm-12">  
        <h3 className="mt-5">ComboPackages</h3><hr/>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
      <div className="col-md-6 col-sm-12">
      <ReportForm/>
      </div>  
      </div>
      </div>
    );
  }
}