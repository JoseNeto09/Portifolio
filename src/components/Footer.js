import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/icons8-github.svg";
import navIcon2 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>Copyright 2022. All Rights Reserved José Lopes</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/JoseNeto09"><img src={navIcon1} alt="gitHUb" /></a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-lopes-sobrinho-neto/"><img src={navIcon2} alt="Likedin Icon" /></a>
              <a href="https://www.instagram.com/joselopes.sn/"><img src={navIcon3} alt="Instagram Icon" /></a>
            </div>
           
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
