import React from 'react';
import {Button} from 'reactstrap';
const Appoint=()=>{
  return(
    <div className="Appoint">
      <h1><strong>Years of Experience </strong></h1>
      <div className="d-none d-md-block">
         <h3><small>Since our foundation, we've been delivering diagnostic solutions</small></h3>
          </div> 
       <a href="tel:+919369641109"> 
       <Button type="submit" className="btn btnInput mt-2" outline color="info">
       <i className="fa fa-lg fa-phone" style={{color:"blue"}}/> &nbsp;Make An Appointment Call</Button></a>
      </div>
    
   
  )}

export default Appoint;  