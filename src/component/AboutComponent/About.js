import React,{Component} from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import { Card,CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import BackImg from '../BackImage';

class About extends Component{

    render(){
        const ButtonStyling=(props)=>{
          // console.log(color.color);
          return(
            <div>
              <button className="aboutButton mt-3"  style={{backgroundColor:`${props.color}`}}>{props.name}</button>
             </div> 
          )
        }
        return(
            <>
            <BackImg/>
            <div className="container">
                  <div className="row properPadding Margin">
                    <div className="col-md-4 col-12 aboutRoundImg">
                      <img style={{borderRadius:"50%"}}src="../../../assets/images/founder.jpg"  alt="Dr. Manish"/>
                    </div>
                    <div className="col-md-7 offset-md-1 col-12 Margin">
                      <h1 className="xlargeFont"><b>Our Founding</b></h1>
                      
                      <div style={{fontFamily:'Alegreya',fontSize: "22px"}}><p>Welcome to Medlab, your number one destination for all Diagnostic Services. We're dedicated to providing you the very best of health screening and check-ups with an emphasis on Quality Control, Reliability, and Affordability.<br/></p>
                      <p>
                      <ReadMoreAndLess ref={this.ReadMore} charLimit={20}
                      readMoreText={<ButtonStyling name={"Read More"} color={"red"}/>}
                      readLessText={<ButtonStyling name={"Read Less"} color={"red"}/>} >
                         {"Founded \n in 2019 by Dr. Manish Kumar,Medlab has come a long way from its beginnings in New Delhi. When Dr. Manish first started out, his passion for developing a facility to provide Quality with Assurance drove him to start his own lab.We hope you will be satisfied with our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us"}  
                       </ReadMoreAndLess>
                      </p></div>
                    </div>
                  </div>
              
                </div>

                {/* <!-- The App Section --> */}
                 <div className="Margin properPadding">
                 <div style={{backgroundColor:"#ffc0cb"}} >  
                 <div className="container"> 
                  <div className="row ">
                    <div className="col-md-6 col-12 mt-4">
                      <h1 className="xlargeFont"><b>The Lab</b></h1>
                      <h1 className="largeFont" style={{color:"MediumSeaGreen"}}><b>Why consider us?</b></h1>
                      <p><span style={{fontSize:"36px"}}>Two Words- WE CARE.</span> 
                      <ReadMoreAndLess ref={this.ReadMore} charLimit={50}
                      readMoreText={<ButtonStyling name={"Read More"} color={"#4CAF50"}/>}
                      readLessText={<ButtonStyling name={"Read Less"} color={"#4CAF50"}/>} >
                       {` We are not only committed in providing best of the Diagnostic services but also passionate in developing innovative and ground-breaking tests, products and tools to enhance patient care. We have procured modern and sophisticated equipment’s and have highly experienced team of doctors and technicians, providing value to the patient.`}       
                       </ReadMoreAndLess></p>
                    </div>
                    <div className="col-md-4 col-12 Margin aboutImg mt-4">
                        <img src="../../../assets/images/whyConsiderUs.jpg" alt="MedLAb Image" style={{margin:"0px 0px 30px 0px"}}
                         />
                    </div>
                   </div> 
                  </div>
                  </div>
                </div>

                {/* <!-- Clarity Section --> */}
                 <div className="Margin mt-4">
                   <div className="container">
                  <div className="row properPadding">
                    <div className="col-md-4 col-12 aboutImg Margin">
                      <img src="../../../assets/images/quality.jpg" alt="App"  />
                    </div>
                    <div className="col-md-6 offset-md-2 col-12 Margin">
                      <h1 className="largeFont"><b>Moto:Quality with assurance!</b></h1>
                      <h1 className="largeFont" style={{color:"red"}}><b>How?</b></h1>
                      <p><span style={{fontSize:"24px"}}>A Revolution in Reliability.</span> We believe that “Quality is Free”, so why not implement an effective quality system. Our Core Values in Quality Management Include following six domains to measure quality in healthcare and thus be effective in living up to our motto: -
                      <ReadMoreAndLess ref={this.ReadMore} charLimit={50}
                      readMoreText={<ButtonStyling name={"Read More"} color={"red"}/>}
                      readLessText={<ButtonStyling name={"Read Less"} color={"red"}/>} >
                      {  "We are not only committed in providing best of the Diagnostic services but also passionate in developing innovative and ground-breaking tests, products and tools to enhance patient care. We have procured modern and sophisticated equipment’s and have highly experienced team of doctors and technicians, providing value to the patient." }  
                       </ReadMoreAndLess>
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                {/* <!-- The App Setcion --> */}
                 <div className="Margin properPadding">
                  <div style={{backgroundColor:"#ffc0cb"}}> 
                 <div className="container"> 
                  <div className="row ">
                    <div className="col-md-6 col-12 mt-4">
                      <h1 className="xlargeFont"><b>To infinity and Beyond….</b></h1>
                      <h1 className="largeFont" style={{color:"MediumSeaGreen"}}><b>Our Vision </b></h1>
                      <p><span style={{fontSize:"24px"}}>The Current Healthcare System is neither healthy nor a System.
                      </span> 
                      <ReadMoreAndLess ref={this.ReadMore} charLimit={50}
                      readMoreText={<ButtonStyling name={"Read More"} color={"#4CAF50"}/>}
                      readLessText={<ButtonStyling name={"Read Less"} color={"#4CAF50"}/>} >
                      { "This is where we think lies an opportunity for us to emerge as one of the only healthcare providers with focus on an effective quality system. We strive to provide every patient and every customer with services and products of uncompromising quality – error free, on time, every time. We see ourselves as pioneers of modern medical laboratory services in coming future. " }  
                       </ReadMoreAndLess></p>
                    </div>
                    <div className="Margin col-md-4 col-12 mt-4 aboutImg">
                        <img src="../../../assets/images/vision.jpg"  style={{margin:"0px 0px 30px 0px"}}
                          height="450px" alt="App"/>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>

                <div id="team"> 
                <div className="container"> 
                 <div className="header properPadding Margin mt-4">
                <h1 style={{fontSize:"55px",textAlign:"center"}} ><b>Meet Our Team</b><hr/></h1>
                 <div className="row mt-4 " id="team"> 
                 <div className="col-md-6 col-12">
                 <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="../../../assets/images/founder.jpg" alt="founder" width="330px" height="400px"/>
                    </div>
                    <div className="flip-card-back container">
                    <h1><strong>Dr. Manish</strong></h1>
                    <h5>MBBS(DMCH) ,
                       M. D. Biochemistry (BHU) <br/><br/>Ex Resident Homi Bhobha Cancer Hospital Varanasi<br/><br/>
                       Mahamana Pandit Madan Mohan Malviya Cancer Hospital Varanasi,Tata memorial center
                      </h5>
                    </div>
               
                </div>
                </div>
                  </div>
                  <div className="col-md-6 col-12"> 
                  
                  <div class="flip-card Margin">
                  <div class="flip-card-inner">
                    <div class="flip-card-front ">
                      <img src="../../../assets/images/qualityManger.jpg" alt="QUALITY MANAGER" width="330px" height="400px"/>
                    </div>
                    <div className="flip-card-back container">
                      <h2 className="mt-5">Mrs.Bharti Mohan</h2><br/>
                      <h5>FOUNDER & QUALITY MANAGER</h5>
                    </div>
                  
                  </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div> 
            </div>  
</>  
    )}
}

export default About;