import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import ComboPackages from './ComboPackages';
import { ImgCarousel } from './Carousel';


class Home extends Component{
  
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/> 
         {/* <ComboPackages/> */}
         <LifeCycle/>
         </>
       )
   }
}

export default Home