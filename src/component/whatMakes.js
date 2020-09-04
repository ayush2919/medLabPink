import React from 'react';
import { Card } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const WhatMakes = ()=>{
return(
    //  <div className="container" style={{paddingTop:"500px"}}>
     <div className="container mt-5">
       <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
      <h1 className="text-center properPadding">What Makes us Different</h1><hr/>  
      </ScrollAnimation>
     <div className="row mt-3" style={{padding:''}}>
        <div className="col-md-4 col-12">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
          <Card className="threeD" style={{padding:"50px 0px",borderRadius:"20px"}}>
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i className="fa fa-stethoscope fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Qualified Specialists</h5>
          <h6 className="d-none d-md-block col-12"><small>We have hire the best specialists/ practitioner to deliver top-notch diagnostic services for you.</small>
          </h6>
          </div>
          </Card>
          </ScrollAnimation>
        </div>
        <div className="col-md-4 col-12 Margin">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
        <Card className="threeD" style={{padding:"50px 0px",borderRadius:"20px",flex:"1"}}>
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i class="fa fa-medkit fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Modern Equipment</h5>
          <h6 className="d-none d-md-block col-12"><small>We use the first-class medical equipment for timely diagnostics of various diseases.</small>
          </h6>
          </div>
          </Card>
          </ScrollAnimation>
        </div>
        <div className="col-md-4 col-12 Margin">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}> 
        <Card className="threeD" style={{padding:"50px 0px",borderRadius:"20px"}}>
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i class="fa fa-heartbeat fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Emergency Diagnos</h5>
          <h6 className="d-none d-md-block col-12"><small>Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.</small>
          </h6>
          </div>
          </Card>
          </ScrollAnimation>
        </div>
     </div>    
    </div>        
)}

export default WhatMakes;