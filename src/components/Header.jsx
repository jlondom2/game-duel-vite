import React, { Component } from 'react';
import { Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
        <a href=""
          
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
         <img src="./img/logo.png" width="200" alt="Game Duel" />
        </a>


        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-flex align-items-center">
            
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/" className="main-menu-item-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1"  className="main-menu-item-link">eSports</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="main-menu-item-link">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3" className="main-menu-item-link">News</Nav.Link>
            </Nav.Item>
          </Nav>
           
            <li className="ms-4 header-icon">
              <span className="iconify" data-icon="akar-icons:search"></span>
            </li>

            <li className="ms-4 header-icon">
              <span className="iconify" data-icon="ion:bag-handle"></span>
            </li>

            
          </ul>

         
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
