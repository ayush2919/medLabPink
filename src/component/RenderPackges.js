import React, { Component } from "react";
import BackImg from './BackImage';
import { Card, CardText, CardBody,CardHeader,CardFooter ,Button,Modal, ModalHeader, ModalBody} from 'reactstrap';
  
export default class RenderPackages extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false,
            obj:null,
            maxLen:18
        };
        // console.log(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
      }

    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleInfo=(itemId)=>()=>{  
        this.toggleModal()
        var selectCard;
        selectCard=this.props.cards.filter((item)=>item.id===itemId)[0]
        this.setState({
                obj:selectCard
            })
    } 
    render(){
      if(this.props.err!=null){
       return(
         <>
         <BackImg/>
         <div className="container">
         <h3 className="m-5" style={{color:"red"}}>{this.props.err}!!</h3>
         </div>
         </>
       )
      }
      else{
        const RenderModal=()=>{
          if(this.state.obj!=null){    
          return(  
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <div className="text-center" style={{background:"#ffb6c1"}}>
          <ModalHeader toggle={this.toggleModal}><b>LifeCycle Details</b></ModalHeader>
            <ModalBody>
            <h3 className="mt-3" style={{color:"red"}}>Title</h3>
            <h5>{this.state.obj.title}</h5>  
            <h3 className="mt-3" style={{color:"red"}}>Category</h3>
            <h5>{this.state.obj.Category}</h5>
            <h3 className="mt-3" style={{color:"red"}}>Prerequisite</h3>
            <h5>{this.state.obj.Prerequisite}</h5>
            <h3 className="mt-3" style={{color:"red"}}>Report Availability</h3>
            <h5>{this.state.obj.ReportAvailability}</h5>
            <h3 className="mt-3" style={{color:"red"}}>UsefulFor</h3>
            <h5>{this.state.obj.UsefulFor}</h5>
            <h3 className="mt-3" style={{color:"red"}}>SampleRequired</h3>
            <h5>{this.state.obj.SampleRequired}</h5>
            </ModalBody>   
          </div>    
        </Modal> 
          )}
         else return(<></>) 
       }   
            
     return(
         <>
         {console.log(this.props.cards)}
         <BackImg/>
         <div className="container">   
         <div className="mt-5 mb-5">  
          <h4>{this.props.name}</h4><hr/> 
          <div className="row">{
              this.props.cards.map(item=>{
                  return(
                      <>
                      <div className="col-9 col-md-3 outerPackages mt-5">     
                      <Card className="packages">
                      <CardHeader>{`${(item.title.length>this.state.maxLen)?item.title.substring(0, this.state.maxLen).concat('...'):item.title}`}</CardHeader>
                     <CardBody>
                     <div className="packagesBody">   
                       <CardText>
                       <span className="small text-align-center" style={{color:"red"}}>
                           {item.Prerequisite}</span>
                      </CardText>
                      </div>
                       </CardBody>
                       <CardFooter>     
                       {/* <span style={{color:"#2a93c9"}}>{item.Price}</span> */}
                      <Button id={item.id} size="sm" onClick={this.handleInfo(item.id)} outline color="info" 
                         style={{float:"right"}}>
                          Know More</Button>
                      </CardFooter>  
                     </Card> 
                     </div>
                      </> 
                  )})}
          
          </div>   
          </div>
          <RenderModal/>
         </div>      
         </>
        )} 
      }
    }