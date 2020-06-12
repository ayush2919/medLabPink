import React,{Component} from 'react';
import Media from 'react-media'
import {LifeCycle} from './LifeCyclePackage'
import { ImgCarousel } from './Carousel';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import ToggleNavbar from './ToggleNav';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            scroll:0
        }
       this.handleScroll=this.handleScroll.bind(this)
    }
    
    handleScroll(){
        //console.log(window.scrollY);
        this.setState({
            scroll:window.scrollY
        })
    }
    
    componentDidMount(){
      window.addEventListener("scroll",this.handleScroll,true);
    }
   render(){
       return(
         <>
         {console.log(window.screen.height)}
        <div className="medlab">
        <Media query="(min-width:1290px)"> 
            <div>
              <img src="../assets/images/logo.png" id="medlabLogo" alt="MedLab"/>
              <img src="../assets/images/phone.png"  id="medlabPhone" alt="Contact-No."/>
              <div id="medlabPhoneNo"> 
              <a href="tel:+91123444" className="text-white">+91-8448773319</a><br/>
              <a href="tel:+9124444" className="text-white">+91-8448773319</a>
              </div>
              <div className={`${this.state.scroll>(window.screen.height)/5? 'flash fixed-top navScreenSize ': 'navBar navShort'}`}>
                <Header/>
              </div>
            </div>
            </Media>
            <Media query="(max-width:1289px)">
              <ToggleNavbar/>
            </Media>
         </div> 
         <ImgCarousel/> 
         <LifeCycle/>
         <Footer/>
         </>
       )
   }
}

export default Home