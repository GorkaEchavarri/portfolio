import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel(props) {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} pause={false}>
       {props.data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
          <img className="d-block w-100" src={slide.image} alt="slider"/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
export default HomeCarousel;
