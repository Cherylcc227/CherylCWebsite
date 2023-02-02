import React from "react";
import {Link}  from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Masthead = () => {

    return (
      <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/AboutMe'>About Me</Nav.Link>
                <Nav.Link href='/SoftwareEngineeringProjects'>SoftwareEngineeringProjects</Nav.Link>
                <Nav.Link href='/Skills'>Skills</Nav.Link>
                <Nav.Link href='/VisualArtsProjects'>VisualArtsProjects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      // <nav>
      // <div class="Masthead">
      //   <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Home</Link>
      //   <Link to="/AboutMe" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>About Me</Link>
      //   <Link to="/SoftwareEngineeringProjects" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Software Engineering Projects</Link>
      //   <Link to="/Skills" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Skills</Link>
      //   <Link to="/VisualArtsProjects" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>Art</Link>
      //   {/* <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link>
      //   <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link>
      //   <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}></Link> */}
      // </div>
      // </nav>
    )
};

export default Masthead