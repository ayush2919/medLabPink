import React, { Component } from "react";
import Slider from "react-slick";
import HealthCarePackage from './Cdata'
import Media from "react-media";
import { Card,CardImg,Button,Modal,ModalHeader,ModalBody} from 'reactstrap';

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
          <h4 style={{color:"#2295bc"}}>{pack.name}</h4>
          <div className="row">
           <div className="col-6"> 
          <h5 style={{color:"red"}}>Title</h5>
          <p className="small">{pack.title}</p>  
          </div>
          <div className="col-6">
          <h5 style={{color:"red"}}>Prerequisite</h5>
          <p className="small">{pack.Prerequisite}</p>
          </div> 
          </div>  
          <div className="row">
          <div className="col-6">
            <h5 style={{color:"red"}}>Report Availability</h5>
              <p className="small">{pack.ReportAvailability}</p>
              </div> 
          <div className="col-6">
              <h5 style={{color:"red"}}>UsefulFor</h5>
              <p className="small">{pack.UsefulFor}</p>
            </div>
          </div>  
          <h5 style={{color:"red"}}>Product Constituent</h5>
          <table className="table table-dark table-hover table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Test</th>
            </tr>
          </thead>
         {
            pack.ProductConstituent.map(row=>{
             return(
              <tbody>
              <tr>
              <td>{row.name}</td>
              <td>{row.test}</td>
            </tr>
          </tbody>   
             ) 
            })
         }
        </table>
          </ModalBody>   
        </div>
      </Modal> 
        )
      }
      else return(<></>)
   }  
    return (
     <>
       <Media query="(min-width:768px)">
             <div className="container">
            <h2 className="properPadding" style={{paddingTop:"550px"}}>HealthCare Packages</h2><hr/>
            <div className="row mt-5">
            <div className="col-12 col-md-4">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
               <div style={{position:"absolute",top:"0px",left:"22px"}}>
               <h4 className="healthCare tag threeD">BASIC</h4>
              </div>
              <Button className="threeD " size="lg" color="info" onClick={()=>this.toggleModal(1)}> 
              Know More</Button>
            </Card>
            </div>  
            <div className="col-12 col-md-4">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
              <div style={{position:"absolute",top:"14px",left:"8px"}}>
              <h4 className="healthCare tag threeD">PRIMARY</h4>
              </div>
              <Button className="threeD " size="lg" color="info" onClick={()=>this.toggleModal(2)}> 
              Know More</Button>
            </Card>
            </div>
            <div className="col-12 col-md-4">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
              <div style={{position:"absolute",top:"5px",left:"20px"}}>
              <h4 className="healthCare tag threeD">DELUX</h4>
              </div>
              <Button className="threeD " size="lg" color="info" onClick={()=>this.toggleModal(3)}> 
              Know More</Button>
            </Card>
            </div> 
              </div> 
              <RenderModal/>  
            </div> 
       </Media>
       <Media query="(max-width:767px)">
            <div className="container">
            <h2 style={{paddingTop:"400px"}}>HealthCare Packages </h2><hr/>
            <Slider {...settings}>
            <div className="mt-3">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
              <div style={{position:"absolute",top:"0px",left:"24px"}}>
              <h4 className="healthCare tag threeD">BASIC</h4>
              </div>
              <Button className="threeD" size="lg" color="info" onClick={()=>this.toggleModal(1)}> 
              Know More</Button>
            </Card>
            </div>
            <div className="mt-3">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
              <div style={{position:"absolute",top:"16px",left:"9px"}}>
              <h4 className="healthCare tag threeD">PRIMARY</h4>
              </div>
              <Button className="threeD" size="lg" color="info" onClick={()=>this.toggleModal(2)}> 
              Know More</Button>
            </Card>
            </div>
            <div className="mt-3">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare.jpg"/>
              <div style={{position:"absolute",top:"2px",left:"23px"}}>
              <h4 className="healthCare tag threeD">DELUX</h4>
              </div>
              <Button className="threeD" size="lg" color="info" onClick={()=>this.toggleModal(3)}> 
              Know More</Button>
            </Card>
            </div>
            </Slider>
            <RenderModal/>
            </div>
       </Media>
     </>    
    );
  }
}