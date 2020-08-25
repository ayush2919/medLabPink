import React from 'react';
import HealthCare from './HealthCare';
import ReportForm from './ReportForm';
import ScrollAnimation from 'react-animate-on-scroll';

export const HealthReport=()=>{
    return(
       <>
            <div id="report" className="reportDiv formImg mt-3 properPadding">
             <ScrollAnimation animateIn="flash" animateOnce={true} delay={100}> 
              <img src="../../assets/images/report.jpg"/>
              </ScrollAnimation>
              <ReportForm/> 
             </div>  
            <div id="healthcare" className="healthCareDiv mt-1">
            <HealthCare/> 
            </div>      
       </>   
    )}