import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12  col-sm-4 text-white">
                    <h5>Links</h5>
                    <div className="line"/>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Menu</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-5 text-white">
                    <h5>Our Address</h5>
                    <div className="line"/>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg "></i> +852 1234 5678<br />
		              <i className="fa fa-envelope fa-lg"></i>  
                      <a className="text-white" href ="mailto:confusion@food.net"> confusion@food.net</a>
                    </address>
                </div>
                <div className=" col-12 col-sm-3 align-self-center">
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
                </div>
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