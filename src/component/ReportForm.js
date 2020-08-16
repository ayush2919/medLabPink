import React, { Component } from "react";
import { Card,CardBody,CardHeader,Button} from 'reactstrap';

class ReportForm extends Component {
    constructor(props) {
      super(props);

    }
  render(){
   return(
     <div className="properPadding">
     <img src="../../assets/images/MRI.jpg" className="formImg"/>  
     <div className="formPosition">
    <form>
    <div className="form-group">
      <label for="exampleInputEmail1">
      <h3 className="fontStyle">E-Report</h3></label>
      <input type="email" className="form-control inputStyle" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
      <small id="emailHelp" className="form-text text-danger">Enter Registered Email </small>
    </div>
    <Button type="submit" className="btn btnInput" outline color="info">
    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Submit</Button>
    </form> 
      </div>
     </div>    
   );   
  }
}    

 export default ReportForm;