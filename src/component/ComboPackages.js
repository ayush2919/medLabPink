import React, { Component } from "react";
import Slider from "react-slick";
import ReportForm from './ReportForm';
import { Link } from 'react-router-dom';
import { Card,CardImg, CardText, CardBody,CardHeader,CardTitle,CardFooter} from 'reactstrap';

export default class ComboPackages extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div id="packages" className="container properPadding" >
        <div className="row">  
        <div className="col-md-5 col-sm-12">
        <h3>Report</h3><hr/>
          <div className="mt-5">
          <ReportForm/>
          </div>
        </div>  
        
        <div className="col-md-6 offset-md-1 col-sm-12 "> 
        <h3>ComboPackages</h3><hr/>
        <div className="mt-5">
        <Slider {...settings}>
          <div>
          <Card>
          <Link to={'/combo/1'}> 
          <CardImg src="../assets/lifecycle/vitaminD.png"/>
          </Link>
          </Card>
          </div>
          <div>
          <Card>
            <CardImg src="../assets/lifecycle/vitaminD.png"/>
          </Card>
          </div>
          <div>
          <Card>
          <CardImg src="../assets/lifecycle/vitaminD.png"/>
          </Card>
          </div>
        </Slider>
      </div>
      </div> 
      </div>
      </div>
    );
  }
}