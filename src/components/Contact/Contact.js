import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import Modal from 'react-modal';

import 'animate.css';
import './styles.contact.css';


export const Contact = () => {
  const form = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

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
                
                <h2> Me Envie uma mensagem!</h2>
                <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Nome Completo" name="user_name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="E-mail" name="user_email" />
                  </Col>
                  <textarea placeholder="Envie sua Mensagem" name="message" />
                  <button onClick={openModal}>Enviar</button>
                  <Modal
                   isOpen={modalIsOpen}
                   onRequestClose={closeModal}
                   contentlabel = "example Modal"
                   overlayClassName= "modal-overlay"
                   className="modal-content"
                  >
                    <button onClick={closeModal}>X</button>
                    <h2>Mensagem enviada com sucesso</h2>
                    <hr  />
                    <p>
                      Obrigado pelo seu feedback no meu portifolio, irie entrar em contato de imediato.
                    </p>
                  </Modal>
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