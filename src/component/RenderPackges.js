import React, { Component } from "react";
import BackImg from './BackImage';
import { Card, CardText, CardBody,CardHeader,CardTitle,CardFooter ,Button,Modal, ModalHeader, ModalBody} from 'reactstrap';
  
export default class RenderPackages extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false,
            obj:null,
            maxLen:18
        };
        //  console.log(props);
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
      const RenderModal=()=>{
        if(this.state.obj!=null){    
        return(  
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <div className="text-center">
        <ModalHeader toggle={this.toggleModal}>Details</ModalHeader>
          <ModalBody>
          <h6 style={{color:"red"}}>Product Constituents</h6>
          <p className="small">{this.state.obj.ProductConstituents}</p>
          <h6 style={{color:"red"}}>Category</h6>
          <p className="small">{this.state.obj.Category}</p>
          <h6 style={{color:"red"}}>Prerequisite</h6>
          <p className="small">{this.state.obj.Prerequisite}</p>
          <h6 style={{color:"red"}}>Report Availability</h6>
          <p className="small">{this.state.obj.ReportAvailability}</p>
          <h6 style={{color:"red"}}>Info</h6>
          <p className="small">{this.state.obj.Info}</p>
          </ModalBody>   
        </div>    
      </Modal> 
        )}
       else return(<></>) 
     }   
          
   return(
       <>
       {/* {console.log(`${this.props.name.length}`)} */}
       <BackImg/>
       <div className="container">   
       <div className="mt-5 mb-5">  
        <h4>{this.props.name}</h4><hr/> 
        <div className="row">{
            this.props.cards.map(item=>{
                return(
                    <>
                    <div className="col-9 col-md-3 outerPackages">     
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
                     <span style={{color:"#2a93c9"}}>{item.Price}</span>
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