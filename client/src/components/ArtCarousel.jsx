import React from "react"
import SpiritOfCreation from "../images/SpiritOfCreativity.jpg"
import Area52 from "../images/Area52.jpg"
import MushroomTree from "../images/MushroomTree.jpg"
import RidingCarpetsPromo from "../images/RidingCarpetsPromo.jpg"
import Carousel from 'react-bootstrap/Carousel'
import Cheryl11 from "../images/Cheryl11.jpg"
import Cheryl12 from "../images/Cheryl12.jpg"
import CherylTwo from "../images/CherylTwo.jpg"
import CherylThree from "../images/CherylThree.jpg"

const ArtCarousel = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel id='carousel' variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src={Cheryl11}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Aspen Moon</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Cheryl12}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Wicked Sunrise</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={CherylTwo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Peace after Grief</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={CherylThree}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Cheshire Dream</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArtCarousel