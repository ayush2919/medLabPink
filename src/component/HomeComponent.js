import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import ComboPackages from './HeathCare';
import { ImgCarousel } from './Carousel';
import WhatMakes from './whatMakes';
import HealthCare from './HeathCare';
class Home extends Component{
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/> 
         <WhatMakes/>
         <HealthCare/>
         <LifeCycle/>
         </>
       )
   }
}

export default Home