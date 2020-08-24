import React, { Component } from "react";
import {Button} from 'reactstrap';


class ReportForm extends Component {
  
  render(){
   return(
     <div>
        <div className="formPosition text-white col-md-6 col-sm-12"> 
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">
          <h3 className="text-white">Collect Your Report</h3></label>
          <input type="email" className="form-control inputStyle" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
          <small id="emailHelp" className="form-text text-white">Enter Your Registered Email </small>
        </div>
        <Button type="submit" className="btn btnInput threeD mt-2" outline color="secondary">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Submit</Button>
        </form>  
        </div>
         </div>  
   );   
  }
}    

 export default ReportForm;