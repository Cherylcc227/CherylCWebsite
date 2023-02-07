import React from "react";
import Me2 from "../images/Me2.jpg"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ThemeContext } from "../App.js";
import { Link } from "react-router-dom";


const Masthead = () => {
  const {theme, setTheme} = React.useContext(ThemeContext);

  const handleThemeChange = () => {
    // e.preventDefault();
    console.log('handle theme change', theme)
    if (!theme) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }

    return (
      <>
        <Navbar className="navBar" collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container className="container">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <img className="logo" src={Me2} alt="logo"/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link><Link style={{textDecoration: 'none'}} to='/' className="link">Home</Link></Nav.Link>
                <Nav.Link><Link style={{textDecoration: 'none'}} to='/AboutMe' className="link">About Me</Link></Nav.Link>
                <Nav.Link><Link style={{textDecoration: 'none'}} to='/SoftwareEngineeringProjects' className="link">SE Projects</Link></Nav.Link>
                <Nav.Link><Link style={{textDecoration: 'none'}} to='/Skills' className="link">Skills</Link></Nav.Link>
                <Nav.Link><Link style={{textDecoration: 'none'}} to='/VisualArtsProjects' className="link">Visual Arts</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="theme-switch-wrapper">
        {!theme
        ? <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i>Night</button>
        : <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i>Day</button>
        }
      </div>
          </Container>
        </Navbar>
      </>
    )
};

export default Masthead