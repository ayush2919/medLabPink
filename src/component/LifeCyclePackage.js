import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';

const items = [
    {
      src: "../assets/images/1.jpg",
      caption: 'Slide 1'
    },
    {
      src: "../assets/images/2.jpg",
      caption: 'Slide 2'
    },
    {
      src: "../assets/images/3.jpg",
      caption: 'Slide 3'
    },
    {
        src: "../assets/images/1.jpg",
        caption: 'Slide 1'
      },
      {
        src: "../assets/images/2.jpg",
        caption: 'Slide 2'
      },
      {
        src: "../assets/images/3.jpg",
        caption: 'Slide 3'
      },
      {
        src: "../assets/images/3.jpg",
        caption: 'Slide 3'
      },
      {
        src: "../assets/images/3.jpg",
        caption: 'Slide 3'
      },
      {
        src: "../assets/images/3.jpg",
        caption: 'Slide 3'
      }
  ];


function RenderCard(){
    return(
        items.map(item=>{
            return(
            <div className="col-md-3 col-4 mt-4">
                <Card className="cardStyling">
                    <CardImg height="100px" src={item.src} />
                        <CardImgOverlay>
                            <CardTitle>{item.caption}</CardTitle>
                        </CardImgOverlay>
                </Card>
            </div>    
            )
        })
    )
    
}

export const LifeCycle=()=>{
    return(
        <>
        <div className="container">
        <h3>LifeCycle Package</h3>  
        <div className="row">  
          <RenderCard/>
          </div>
        </div>
       </> 
    );

}
