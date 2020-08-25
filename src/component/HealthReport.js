import React from 'react';
import HealthCare from './HealthCare';
import ReportForm from './ReportForm';


export const HealthReport=()=>{
    return(
       <>
            <div id="report" className="reportDiv formImg mt-3 properPadding">
              <img src="../../assets/images/report.jpg"/>
              <ReportForm/> 
             </div>  
            <div id="healthcare" className="healthCareDiv mt-1">
            <HealthCare/> 
            </div>      
       </>   
    )}