import React,{Component} from 'react';
// import './ABSC.css';
import { Card,CardImg, CardText, CardBody,CardHeader,CardTitle,CardFooter} from 'reactstrap';
import BackImg from '../BackImage';

class About extends Component{

    render(){
        return(
            <>
            <BackImg/>
            <div className="container">
            <div className="" style={{backgroundColor:"#f1f1f1"}}>
                  <div className="row properPadding">
                    <div className="col-md-4 col-12 aboutRoundImg">
                      <img style={{borderRadius:"50%"}} src="../../../assets/images/IMG6.jpg" alt="App"/>
                    </div>
                    <div className="col-md-6 offset-md-2 col-12 ">
                      <h1 className="xlarge-font"><b>Qur Founding</b></h1>
                      
                      <p><span style={{fontFamily:'Alegreya',fontSize: "22px"}}> Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and star
                                    ted as a blog and an online community where some of the world's first SEO experts shared their research and ideas. 
                                    We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry
                              expertise transformed into a small consulting firm and led us to create some of our first SEO tools.</span></p>
                      <button className="button-11" style={{backgroundColor:"red"}}>Read More</button>
                    </div>
                  </div>
                </div>

                {/* <!-- The App Section --> */}
                 <div className="">
                  <div className="row properPadding">
                    <div className="col-md-6 col-12">
                      <h1 className="xlarge-font"><b>The Lab</b></h1>
                      <h1 className="large-font" style={{color:"MediumSeaGreen"}}><b>Why consider us?</b></h1>
                      <p><span style={{fontSize:"36px"}}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <button className="button-11">Read More</button>
                    </div>
                    <div className="col-md-4 offset-md-2 col-12 aboutImg">
                        <img src="../../../assets/images/IMG1.jpg" />
                    </div>
                  </div>
                </div>

                {/* <!-- Clarity Section --> */}
                 <div className="" style={{backgroundColor:"#f1f1f1"}}>
                  <div className="row properPadding">
                    <div className="col-md-4 col-12 aboutImg">
                      <img src="../../../assets/images/IMG1.jpg" alt="App" height="471px" />
                    </div>
                    <div className="col-md-6 offset-md-2 col-12">
                      <h1 className="xlarge-font"><b>Moto:Quality with assurance!</b></h1>
                      <h1 className="large-font" style={{color:"red"}}><b>How?</b></h1>
                      <p><span style={{fontSize:"24px"}}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <button className="button-11" style={{backgroundColor:"red"}}>Read More</button>
                    </div>
                  </div>
                </div>

                {/* <!-- The App Section --> */}
                 <div className="">
                  <div className="row properPadding">
                    <div className="col-md-6 col-12">
                      <h1 className="xlarge-font"><b>The App</b></h1>
                      <h1 className="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1>
                      <p><span style={{fontSize:"36px"}}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <button className="button-11">Download Application</button>
                    </div>
                    <div className="col-md-4 offset-md-2 col-12  aboutImg">
                        <img src="../../../assets/images/IMG1.jpg"  height="471px" alt="App"/>
                    </div>
                  </div>
                </div>
                <div className=""> 
                 <div className="header properPadding">
                <h1 className="xlarge-font" style={{fontSize:"5vw",textAlign:"center"}} ><b>Meet Our Team</b></h1><hr/>
                </div>
                
                 <div className="row">
                 <div className="col-md-3 col-12">
                    <Card>
                      <CardBody>
                      <CardImg src="../../../assets/images/IMG3.jpg" alt="Jane"/>
                      <CardTitle><strong>Jane Doe</strong></CardTitle>
                      <CardText><small>CEO &amp; Founder
                      Some text that describes me lorem ipsum ipsum lorem.<br/>
                          example@example.com</small>
                      </CardText>
                      </CardBody>
                     </Card> 
                  </div>
                  <div className="col-md-3 col-12">
                    <Card>
                      <CardBody>
                      <CardImg src="../../../assets/images/IMG3.jpg" alt="Jane"/>
                      <CardTitle><strong>Jane Doe</strong></CardTitle>
                      <CardText><small>CEO &amp; Founder
                      Some text that describes me lorem ipsum ipsum lorem.<br/>
                          example@example.com</small>
                      </CardText>
                      </CardBody>
                     </Card> 
                  </div>
                  <div className="col-md-3 col-12">
                    <Card>
                      <CardBody>
                      <CardImg src="../../../assets/images/IMG3.jpg" alt="Jane"/>
                      <CardTitle><strong>Jane Doe</strong></CardTitle>
                      <CardText><small>CEO &amp; Founder
                      Some text that describes me lorem ipsum ipsum lorem.<br/>
                          example@example.com</small>
                      </CardText>
                      </CardBody>
                     </Card> 
                  </div>
                  <div className="col-md-3 col-12">
                    <Card>
                      <CardBody>
                      <CardImg src="../../../assets/images/IMG3.jpg" alt="Jane"/>
                      <CardTitle><strong>Jane Doe</strong></CardTitle>
                      <CardText><small>CEO &amp; Founder
                      Some text that describes me lorem ipsum ipsum lorem.<br/>
                          example@example.com</small>
                      </CardText>
                      </CardBody>
                     </Card> 
                  </div>
                 </div>
                 </div> 
            </div>  
</>  
    )}
}

export default About;