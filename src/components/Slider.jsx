import React from "react";

import { Carousel } from "react-bootstrap";

import item1 from "../slider_photo/1.jpg";
import item2 from "../slider_photo/2.jpg";
import item3 from "../slider_photo/3.jpg";

import "../styles/Slider.css";

function Slider() {
  const img = [
    <img key={item1} src={item1} />,
    <img key={item2} src={item2} />,
    <img key={item3} src={item3} />,
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1;

        return res;
      });
    }, 3000);

    return () => clearInterval();
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;

  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}
export default Slider;
