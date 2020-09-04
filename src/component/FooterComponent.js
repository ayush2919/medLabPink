import React from 'react';
import {Button} from 'reactstrap';

function Footer(props) {
    return(
        <div id="contact" className="footer mt-5">
          <div className="container">
          <div className="row">
            <div className="col-12  col-md-3 text-center">
              <div className="text-white medLogoFooter">
                <img src='../assets/images/medLogoFooter.png' alt="MEDLOGO"/>
                </div>
                    <div className="socialMediaIcons mt-3">
                        <a href="https://www.facebook.com/medlab.diagnostic.7">
                            <i className="fa fa-lg fa-facebook"/>
                        </a>
                        <a href="medlabdiagnostic.co.in@gmail.com">
                        <i className="fa fa-lg fa-google-plus"/>
                        </a>
                        <a href="https://twitter.com/MedlabDC">
                        <i className="fa fa-lg fa-twitter"/>
                        </a>
                        <a href="https://www.linkedin.com/in/medlab-diagnostic-4b88431b3/">
                        <i className="fa fa-lg fa-linkedin"/>
                        </a>
                   </div>
              </div>   
              <div className="col-12 col-md-4 text-white Margin ml-4">
                    <h5><b>Our Address</b></h5>
                    <hr color="white"/>
                    <address>
		              RZ/D-49, Nangli Vihar Extn. Part-1<br />
		              Nangli Sakrawati,Najafagarh<br />
		              New-Delhi (110043)<br />
		              <i className="fa fa-phone fa-lg "></i> 936941109<br />
		              <i className="fa fa-envelope fa-lg"></i>  
                      <a href ="mailto:medlabdiagnostic.co.in@gmail.com"> medlabdiagnostic.co.in@gmail.com</a>
                    </address>
                </div>
                <div className="text-white col-md-4 Margin ml-4" style={{lineHeight:"1.1",color:""}}>
                   <h5><b>News Letter</b></h5><hr color="white"/> 
                   <small >Enter your email address to receive up-to-date news,
                        new patient information and other useful stuff, delivered right to your inbox.</small>
                   
                    <form className="mt-3">
                    <div className="row">
                        <div className="col-7">
                        <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                        </div>
                        </div>
                        <div className="col-5">
                        <Button type="submit" className="btn-btn-info">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Subscribe</Button>
                        </div>
                        </div>
                    </form>   
                </div>    
              </div>
             <div className="row justify-content-center text-white">             
                <div className="col-auto">
                    <p>© Copyright 2020 MedLab</p>
                </div>
               </div> 
           </div>   
         </div>   
    )}

export default Footer;