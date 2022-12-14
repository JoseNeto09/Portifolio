/* eslint-disable jsx-a11y/anchor-is-valid */

import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import React  from 'react';



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>Copyright 2022. All Rights Reserved José Lopes <p>+55 (83) 998109-8868</p> </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jos%C3%A9-lopes-sobrinho-neto/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/JoseNeto09"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.instagram.com/joselopes.sn/ "><img src={navIcon2} alt="Icon" /></a>
            </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}
