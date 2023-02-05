import React from "react"
import SpiritOfCreation from "../images/SpiritOfCreativity.jpg"
import Area52 from "../images/Area52.jpg"
import MushroomTree from "../images/MushroomTree.jpg"
import RidingCarpetsPromo from "../images/RidingCarpetsPromo.jpg"
import Carousel from 'react-bootstrap/Carousel'

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
          src={SpiritOfCreation}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Spirit of Creation</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={RidingCarpetsPromo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Commisioned Promo Art for Band: Riding Carpets</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={MushroomTree}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hand crafted resin mushroom ornaments & foam clay display tree</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Area52}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Personal Project</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArtCarousel