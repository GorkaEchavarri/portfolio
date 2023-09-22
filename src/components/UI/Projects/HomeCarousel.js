import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {image: require('../../../images/Carousel/CodeClicker/image1.png')},
  {image:require('../../../images/Carousel/CodeClicker/image2.png')},
  {image:require('../../../images/Carousel/CodeClicker/image3.png')}
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} pause={false}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>
          <img className="d-block w-100" src={slide.image} alt="slider"/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
export default HomeCarousel;
