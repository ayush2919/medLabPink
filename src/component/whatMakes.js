import React from 'react';


const WhatMakes = ()=>{
return(
    <div className="container mt-5">
     <h3 className="text-center">What Makes us Different</h3>   
     <div className="row mt-5">
        <div className="col-md-4 col-12">
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i className="fa fa-stethoscope fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Qualified Specialists</h5>
          <h6><small>We hire the best specialists to deliver top-notch diagnostic services for you.</small>
          </h6>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i class="fa fa-medkit fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Modern Equipment</h5>
          <h6><small>We use the first-class medical equipment for timely diagnostics of various diseases.</small>
          </h6>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="whatMakes" style={{margin:"0 auto"}}>
          <i class="fa fa-heartbeat fa-3x" aria-hidden="true"></i>
          </div>  
          <div className="text-center mt-2">
          <h5>Emergency Diagnostics</h5>
          <h6><small>Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.</small>
          </h6>
          </div>
        </div>
     </div>    
    </div>        
)}

export default WhatMakes;