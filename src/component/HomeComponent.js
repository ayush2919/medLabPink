import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import ComboPackages from './ComboPackages';
import { ImgCarousel } from './Carousel';
import WhatMakes from './whatMakes';

class Home extends Component{
  
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/> 
         <WhatMakes/>
         <ComboPackages/>
         <div id="lifecycle">
         <LifeCycle/>
         </div>
         </>
       )
   }
}

export default Home