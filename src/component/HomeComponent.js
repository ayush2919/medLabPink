import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import { ImgCarousel } from './Carousel';


class Home extends Component{
  
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/> 
         <LifeCycle/>
         </>
       )
   }
}

export default Home