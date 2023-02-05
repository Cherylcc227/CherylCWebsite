import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Masthead from "./Masthead.jsx";
import ArtCarousel from "./ArtCarousel.jsx"

const VisualArtsProjects = () => {

  return (
    <div class="art component">
      <Masthead/>
      <div class='bufferDiv'>
      <div class='body'>
        <h1 class="artHeading">Visual Arts</h1>
        <h2>I love ALL art! Software enginnering is an art in itself and one that I truly adore.  I also explore visual arts in the form of painting, sculptures in foam or clay, resin work, even fondant with baking.  If you'd like to take a peek into some of my creations, feel free to visit my instagram.
        <SocialIcon url="https://www.instagram.com/morseloflove/?hl=en" />
        <br/>
        Below are some featured pieces.
        </h2>
        <ArtCarousel/>
      </div>
      </div>
    </div>
  )

};

export default VisualArtsProjects