import React from "react";
import Me2 from "../images/Me2.jpg"
import { Navbar, Nav, Container } from 'react-bootstrap';

const Masthead = () => {
  const [theme, setTheme] = React.useState(false);

  const handleThemeChange = () => {
    if (!theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme(false);
    }
  }
    return (
      <>
        <Navbar class="navBar" collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container class="container">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <img className="logo" src={Me2} alt="logo"/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/AboutMe'>About Me</Nav.Link>
                <Nav.Link href='/SoftwareEngineeringProjects'>SoftwareEngineeringProjects</Nav.Link>
                <Nav.Link href='/Skills'>Skills</Nav.Link>
                <Nav.Link href='/VisualArtsProjects'>VisualArtsProjects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="theme-switch-wrapper">
        {!theme
        ? <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i>ColorTheme</button>
        : <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i>ColorTheme</button>
        }
      </div>
          </Container>
        </Navbar>
      </>
    )
};

export default Masthead