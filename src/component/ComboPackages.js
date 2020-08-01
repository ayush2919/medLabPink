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
      <div id="packages" className="container properPadding" >
        <h3>Packages/Report</h3><hr/>
        <div className="row">  
        <div className="col-md-6 col-sm-10 mt-4">
          <ReportForm/>
        </div>  
        <div className="col-md-6 col-sm-10">  
        <h5 className="mt-4">ComboPackages</h5><hr/>
        <div className="m-3">
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
      </div> 
      </div>
      </div>
    );
  }
}