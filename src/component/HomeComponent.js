import React, { useState } from 'react';
import Header from './HeaderComponent';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: "../assets/images/1.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "../assets/images/2.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "../assets/images/3.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export const ImgCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}
        className="carousel" key={item.src} >  
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
    <img src="../assets/images/logo.png" id="medlabLogo" alt="MedLab"/>
    <img src="../assets/images/phone.png"  id="medlabPhone" alt="Contact-No."/>
    <div id="medlabPhoneNo"> 
     <a href="tel:+91123444" className="text-white">+91-8448773319</a><br/>
     <a href="tel:+9124444" className="text-white">+91-8448773319</a>
    </div>
    <div className="navBar">
      <Header/>
    </div>
   <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
   </> 
  );
}
