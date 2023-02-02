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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={SpiritOfCreation}
          height="100%" width="100%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={RidingCarpetsPromo}
          height="100%" width="100%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={MushroomTree}
          height="100%" width="100%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Area52}
          height="100%" width="100%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

// render(<ControlledCarousel />);
  // return (
  //   <div>
  //     <Masthead/>
  //     <h1> VISUAL ARTS PAGE </h1>
  //     <p class="featured">
  //       <h2>FEATURED</h2>
  //       <div class="art">
  //         <img src={SpiritOfCreation} height="30%" width="30%" alt="Spirit Of Creation"></img>
  //         <img src={RidingCarpetsPromo} height="30%" width="30%" alt="Riding Carpets Promo"></img>
  //         <img src={MushroomTree} height="30%" width="30%" alt="Mushroom Tree"></img>
  //         <img src={Area52} height="30%" width="30%" alt="Area 52"></img>
  //       </div>
  //     </p>
  //   </div>
  // )
//  };

export default ArtCarousel