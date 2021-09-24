import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SampleCarousel(props) {
  const slides = props.slides.map((slide, index) =>
    <div className="d-flex flex-column" key={index}>
      <img
        className="align-self-center rounded"
        style={{ maxHeight: props.height }}
        src={slide.image}
        alt={slide.alt}
      />
      <p className="legend">{slide.alt}</p>
    </div>
  );

  return (
    <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} useKeyboardArrows={true} showThumbs={false} dynamicHeight={true}>
      {slides}
    </Carousel>
  );
}

export default SampleCarousel;
