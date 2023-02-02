import React from "react";
import {Link}  from "react-router-dom";

const Masthead = () => {
    return (
      <div>
        <Link to="/AboutMe" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>About Me</Link>
        <Link to="/SoftwareEngineeringProjects" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Software Engineering Projects</Link>
        <Link to="/Skills" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Skills</Link>
        <Link to="/VisualArtsProjects" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Art</Link>
        {/* <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link>
        <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link>
        <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link> */}
      </div>
    )
};

export default Masthead