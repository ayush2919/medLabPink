import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import { ImgCarousel } from './Carousel';
import WhatMakes from './whatMakes';
import HealthCare from './HealthCare';
import ReportForm from './ReportForm';
import Appoint from './MakeAppointMent'

class Home extends Component{
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/>
         <Appoint/> 
         <WhatMakes/>
         <ReportForm/>
         <HealthCare/>
         <LifeCycle/>
         </>
       )
   }
}

export default Home