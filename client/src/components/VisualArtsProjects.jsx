import React from "react"
import Masthead from "./Masthead.jsx"
import ArtCarousel from "./ArtCarousel.jsx"

const VisualArtsProjects = () => {

  return (
    <div class="art component">
      <Masthead/>
      <div class='bufferDiv'>
      <div class='body'>
        <h1>Visual Arts</h1>
        <ArtCarousel/>
      </div>
      </div>
    </div>
  )

};

export default VisualArtsProjects