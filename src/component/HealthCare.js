import React, { Component } from "react";
import Slider from "react-slick";
// import HealthCarePackage from './Cdata'
import Media from "react-media";
import ScrollAnimation from 'react-animate-on-scroll';
import { Card,CardImg,Button,Modal,ModalHeader,ModalBody} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchCombos} from './redux/actionCreator'

const mapStateToProps = state => {
  return {
    HealthCarePackage:state.combos
  }
}


class HealthCare extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false,
        itemId:0
    };
   
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    console.log("fetchesDishes");
    // console.log("ayush");
     fetchCombos();
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
        console.log(this.props.HealthCarePackage.combos)
        var pack=this.props.HealthCarePackage.combos[index];
        return(   
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <div className="text-center" style={{background:"#ffb6c1"}}>
        <ModalHeader toggle={this.toggleModal}><b>HealthCare Details</b></ModalHeader>
          <ModalBody>
          <h1 style={{color:"#2295bc"}}><b>{pack.name}</b></h1>
          <div className="row">
           <div className="col-6 mt-4"> 
          <h3 style={{color:"red"}}>Title</h3>
          <h5>{pack.title}</h5>  
          </div>
          <div className="col-6 mt-4">
          <h3 style={{color:"red"}}>Prerequisite</h3>
          <h5>{pack.Prerequisite}</h5>
          </div> 
          </div>  
          <div className="row">
          <div className="col-6 mt-4">
            <h3 style={{color:"red"}}>Report Availability</h3>
              <h5>{pack.ReportAvailability}</h5>
              </div> 
          <div className="col-6 mt-4">
              <h3 style={{color:"red"}}>UsefulFor</h3>
              <h5>{pack.UsefulFor}</h5>
            </div>
          </div>  
          <h3 style={{color:"red"}} className="mt-4">Product Constituent</h3>
          <table className="table table-dark table-hover table-sm col-12">
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
             <div className="container properPadding">
          <ScrollAnimation animateIn="zoomIn" animateOnce={true}>    
            <h1 className="text-center">HealthCare Packages</h1><hr/>
          </ScrollAnimation>  
          {/* <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={1000}>  */}
            <div className="row mt-5">
            <div className="col-12 col-md-4">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} >    
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare1.jpg" height="350px"/>
               <div style={{position:"absolute",top:"0px",left:"-2px"}}>
               <h4 className="healthCare tag threeD">BASIC</h4>
              </div>
              <Button className="threeD " size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(1)}> 
              Know More</Button>
            </Card>
            </ScrollAnimation>
            </div>  
            <div className="col-12 col-md-4">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={100}>   
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare2.jpg" height="350px"/>
              <div style={{position:"absolute",top:"0px",left:"-2px"}}>
              <h4 className="healthCare tag threeD">PRIMARY</h4>
              </div>
              <Button className="threeD " size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(2)}> 
              Know More</Button>
            </Card>
            </ScrollAnimation>
            </div>
            <div className="col-12 col-md-4">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={50}>   
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare3.jpg" height="350px"/>
              <div style={{position:"absolute",top:"0px",left:"-3px"}}>
              <h4 className="healthCare tag threeD">COMPREHENSIVE</h4>
              </div>
              <Button className="threeD " size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(3)}> 
              Know More</Button>
            </Card>
            </ScrollAnimation>
            </div> 
              </div> 
              {/* </ScrollAnimation> */}
              <RenderModal/>  
            </div> 
       </Media>
       <Media query="(max-width:767px)">
            <div className="container">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>    
            <h1 className="text-center">HealthCare </h1><hr/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flash" animateOnce={true}>  
            <Slider {...settings}>
            <div className="ml-4 mr-4 col-10">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare1.jpg" height="250px"/>
              <div style={{position:"absolute",top:"0px",left:"-2px"}}>
              <h4 className="healthCare tag threeD">BASIC</h4>
              </div>
              <Button className="threeD" size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(1)}> 
              Know More</Button>
            </Card>
            </div>
            <div className="ml-4 mr-4 col-10">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare2.jpg" height="250px"/>
              <div style={{position:"absolute",top:"0px",left:"-2px"}}>
              <h4 className="healthCare tag threeD">PRIMARY</h4>
              </div>
              <Button className="threeD" size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(2)}> 
              Know More</Button>
            </Card>
            </div>
            <div className="ml-4 mr-4 col-10">
            <Card className="threeD">
              <CardImg className="healthCareImg" src="../../assets/images/healthcare3.jpg" height="250px"/>
              <div style={{position:"absolute",top:"0px",left:"-3px"}}>
              <h4 className="healthCare tag threeD">COMPREHENSIVE</h4>
              </div>
              <Button className="threeD" size="lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>this.toggleModal(3)}> 
              Know More</Button>
            </Card>
            </div>
            </Slider>
            </ScrollAnimation>
            <RenderModal/>
            </div>
       </Media>
     </>    
    );
  }
}

export default withRouter(connect(mapStateToProps,fetchCombos)(HealthCare))