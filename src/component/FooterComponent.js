import React from 'react';
import {Button} from 'reactstrap';

function Footer(props) {
    return(
    <div id="contact" className="footer mt-5">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12  col-sm-4 text-white">
                <img className="homeLogo" src='../assets/images/medLogo.png' alt="MEDLOGO"/>
                </div>
                <div className="col-12 col-md-4 text-white">
                    <h5>Our Address</h5>
                    <hr color="white"/>
                    {/* <div className="line"/> */}
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg "></i> +852 1234 5678<br />
		              <i className="fa fa-envelope fa-lg"></i>  
                      <a className="text-white" href ="mailto:confusion@food.net"> confusion@food.net</a>
                    </address>
                </div>
                <div className="text-white col-md-4" style={{lineHeight:"1.1",color:""}}>
                   <h5>News Letter</h5><hr color="white"/> 
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
                {/* <div className=" col-12 col-sm-3 align-self-center">
                    <div className="text-center socialMediaIcons">
                     <a href="https://www.youtube.com/watch?v=sHLVoL1tDR0&t=223s">
                         <i className="fa fa-lg fa-facebook"/>
                    </a>
                    <a href="#">
                    <i className="fa fa-lg fa-instagram"/>
                    </a>
                    <a href="#">
                    <i className="fa fa-lg fa-twitter"/>
                    </a>
                    <a href="#">
                    <i className="fa fa-lg fa-linkedin"/>
                    </a>
                    </div>
                </div> */}
            </div>
            <div className="row justify-content-center text-white">             
                <div className="col-auto">
                    <p>© Copyright 2020 MedLab</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;