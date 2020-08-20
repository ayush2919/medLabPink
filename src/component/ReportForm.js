import React, { Component } from "react";
import { Card,CardBody,CardHeader,Button} from 'reactstrap';

class ReportForm extends Component {
    constructor(props) {
      super(props);

    }
  render(){
   return(
     <div className="properPadding">
       <div style={{position:"absolute"}}>
        <img src="../../assets/images/report.jpg" className="formImg"/>
        <div className="formPosition text-white"> 
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">
          <h3 className="text-white">Collect Your Report</h3></label>
          <input type="email" className="form-control inputStyle" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
          <small id="emailHelp" className="form-text text-white">Enter Your Registered Email </small>
        </div>
        </form>  
        <Button type="submit" className="btn btnInput mt-2" outline color="info">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Submit</Button>
        </div>
         </div>
      </div>     
   );   
  }
}    

 export default ReportForm;