// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
 
// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="../assets/images/alberto.png" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="../assets/images/buffet.png" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="../assets/images/buffet.png" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// }

// export default DemoCarousel;


import React, { useState } from 'react';
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

const Example = (props) => {
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
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example