import React from "react"
import Masthead from "./Masthead.jsx"
import Me from "../images/Me.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = () => {
  const qualities = [`creative creature	👩‍🎨`, 'cosplayer 👩‍🎤	', 'artist 🎨', 'dog mama 🦮', 'food enthusiast 🍔', 'avid learner 🤓', 'prop designer 🎭	', `novice gardener 🪷`, 'costume maker 👹	', ' dreamer ✨', 'optimist 🥛	']

  const [quality, setQuality] = React.useState("");

  const shuffle = React.useCallback(() => {
      const index = Math.floor(Math.random() * qualities.length);
      setQuality(qualities[index]);
  }, []);

  React.useEffect(() => {
      const intervalID = setInterval(shuffle, 1500);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return(
    <div class="LandingPage, component">
      <Masthead/>
      <div class='bufferDiv'>
      <div class='body'>
          <br/>
        <Container fluid>
          <Row>
            <Col md="7">
              <h1 class="animate__animated animate__rollIn">
                Hello there!
              </h1>
              <h1>I'm Cheryl, <br/>
               software engineer and <br/>
               {quality}
               <br/>
               <br/>
               Thanks for visiting my site!
              </h1>
            </Col>
            <Col md="5">
              <img
              className="myPhoto"
              src={Me}
              // height="100%" width="100%"
              alt="Chery, herself"/>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    </div>
  )
}

export default LandingPage