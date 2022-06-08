import React, { useState } from "react";
import { Navbar , Container , Nav } from "react-bootstrap";
import "./HeaderStyle.css";
import logo from "../../assets/images/Common/ecotech_logo.svg";

const Header = () => {
  const [navbarMain, setNavbar] = useState(false);
  const changeBackground = () =>{
      if(window.scrollY >= 80){
          setNavbar(true)
      } else{
          setNavbar(false);
      }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div id="navbar" >
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={navbarMain ? 'navbarMain active' : 'navbarMain' } >
          <Container>
          <Navbar.Brand href="#home">
            <img width="100%" height="auto" src={logo} alt="header_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#experiance">Experiance</Nav.Link>
              <Nav.Link href="#management">Management</Nav.Link>
              <Nav.Link href="#vision">Vision</Nav.Link>
              <Nav.Link href="#industry">Industry</Nav.Link>
              <Nav.Link href="#opportunities">Opportunities</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
