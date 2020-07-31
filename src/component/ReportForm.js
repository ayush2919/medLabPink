import React, { Component } from "react";
import { Card, CardText, CardBody,CardHeader,
     CardTitle,CardFooter ,Button,Modal, ModalHeader, ModalBody} from 'reactstrap';

class ReportForm extends Component {
    constructor(props) {
      super(props);

    }
  render(){
   return(
    <Card className="packages">
    <CardHeader style={{backgroundColor:"#2295bc"}}><h5 className="text-white">
    <i class="fa fa-address-card" aria-hidden="true"></i>  E-Report</h5></CardHeader>
   <CardBody>
   <form>
    <div className="form-group">
      <label for="exampleInputEmail1">
      <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> Moblie Number</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number"/>
      <small id="emailHelp" className="form-text text-muted">Enter Register Mobile Number</small>
    </div>
    <Button type="submit" className="btn" outline color="info">
    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Submit</Button>
  </form> 
     </CardBody>
   </Card>     
   );   
  }
}    

 export default ReportForm;