import React, { Component } from "react";
import Slider from "react-slick";
import ReportForm from './ReportForm';
import HealthCarePackage from './Cdata'
import Media from "react-media";
import { Card,CardImg, CardText, CardBody,CardHeader,Button,CardFooter,
  Modal,ModalHeader,ModalBody} from 'reactstrap';

export default class HealthCare extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false,
        itemId:0
    };
   
    this.toggleModal = this.toggleModal.bind(this);
  }

toggleModal(itemId){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      itemId:itemId
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const RenderModal=()=>{
      
      if(this.state.isModalOpen){
        var index=this.state.itemId - 1;
        var pack=HealthCarePackage[index];
        return(  
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <div className="text-center">
        <ModalHeader toggle={this.toggleModal}>Details</ModalHeader>
          <ModalBody>
          <h5 style={{color:"red"}}>Type</h5>
          <p className="small">{pack.name}</p>
          <h5 style={{color:"red"}}>Title</h5>
          <p className="small">{pack.title}</p>  
              <h5 style={{color:"red"}}>Prerequisite</h5>
              <p className="small">{pack.Prerequisite}</p>
              <h5 style={{color:"red"}}>Report Availability</h5>
              <p className="small">{pack.ReportAvailability}</p>
              <h5 style={{color:"red"}}>UsefulFor</h5>
              <p className="small">{pack.UsefulFor}</p>
          </ModalBody>   
        </div>    
      </Modal> 
        )
      }
      else return(<></>)
   }  
    return (
     <>
       <Media query="(min-width:361px)">
              <div className="container">
            <h3 className="properPadding">HealthCare Packages</h3><hr/>
            <div className="row mt-5">
            <div className="col-12 col-md-4">
            <Card>
              <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info" onClick={()=>this.toggleModal(1)}
                style={{float:"right"}}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div>  
            <div className="col-12 col-md-4">
            <Card>
              <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info"  onClick={()=>this.toggleModal(2)}
              style={{float:"right"}}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div>
            <div className="col-12 col-md-4">
            <Card>
            <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info" onClick={()=>this.toggleModal(3)}
               style={{float:"right"}}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div> 
              </div> 
              <RenderModal/>  
            </div> 
       </Media>
       <Media query="(max-width:360px)">
            <div className="container">
            <h3 className="properPadding">HealthCare Packages </h3><hr/>
            <Slider {...settings}>
            <div className="">
            <Card>
            <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info" onClick={()=>this.toggleModal(1)}
              style={{float:"right"}}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div>
            <div className="">
            <Card>
            <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info" style={{float:"right"}} 
              onClick={()=>this.toggleModal(2)}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div>
            <div className="">
            <Card>
            <CardHeader> Primary Package </CardHeader>
              <CardBody></CardBody>
              <CardFooter>  <Button size="sm" outline color="info" style={{float:"right"}}
              onClick={()=>this.toggleModal(3)}> 
              Know More</Button>
              </CardFooter>
            </Card>
            </div>
            <RenderModal/>
            </Slider>
            </div>  
       </Media>
     </>    
    );
  }
}