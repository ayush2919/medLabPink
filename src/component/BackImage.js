import React from 'react';

function BackImg(){
    return(
        <div className="backImg">
         <img src="../assets/images/microscope.jpg" style={{filter:"blur(1px)",transform: "scaleX(-1)"}}/>   
        </div>
    )
}

export default BackImg;