import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import Popup from 'reactjs-popup';

import 'animate.css';
import './styles.contact.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rouz947', 'template_lz6mvig', form.current, '6FZqYi1hT2uFxpOIz')
      .then((result) => {
          console.log(result.text);
          console.log("mensage sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Me Envie uma mensagem!</h2>
                <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Nome Completo" name="user_name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="E-mail" name="user_email" />
                  </Col>
                  <textarea placeholder="Envie sua Mensagem" name="message" />
                  <Popup trigger={<button>Enviar</button>}>
                  <div className='Popup'>Mensagem enviada com sucesso!!</div>
                  </Popup>
                </Row>
              </form>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};