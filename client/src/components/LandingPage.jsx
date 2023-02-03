import React from "react"
// import {Link}  from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Masthead from "./Masthead.jsx"
import Me from "../images/Me.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = () => {
  const qualities = [`👩‍🎨 creative creature	👩‍🎨`, '👩‍🎤 cosplayer 👩‍🎤	', '🎨 artist 🎨', '🦮 dog mama 🦮', '🍔 food enthusiast 🍔', '🤓 avid learner 🤓', '🎭 prop designer 🎭	', `🪷 novice gardener 🪷`, '👹 costume maker 👹	', '✨ dreamer ✨', '🥛 optimist 🥛	']

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
        <h1 class="animate__animated animate__backInLeft">
          Hello there!
        </h1>
          <br/>
        <Container fluid>
          <Row>
            <Col md="8">
              <h2>I'm Cheryl, <br/>
               software engineer and <br/>
               {quality}
               <br/>
               <br/>
               Thanks for visiting!
              </h2>
            </Col>
            <Col md="4">
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