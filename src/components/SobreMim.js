/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const SobreMim = () =>{
    return(
        <section className="sobre" id="sobre">
            <Container>
                <Row>
                    <Col>
                        <h1>{`José Lopes Sobrinho Neto`}<span className="wrap"></span></h1>
                        <p>Graduado em Ciências da Computação. Durante o curso me descobri como desenvolvedor web, desenvolvendo desde pequenos sites do tipo landing pages, até Sistemas de contabilidade com Spring no backend
                        Estou sempre em busca de novas tecnologias, visando alta performance e otimização, independente do tamanho do projeto, inclusive projetos pequenos até sistemas mais complexos com regras de negócio a serem implementadas. </p>
                    </Col>
                    <a target="blank" href="https://docs.google.com/document/d/1f2mxPxCobAks2mUQhg_FAVvPgBq-iGgSpkiEdlGYa-U/edit?usp=sharing">
                        <button id="bt" >Meu Cv</button> </a>
                </Row>
            </Container>
        </section>
    )
}