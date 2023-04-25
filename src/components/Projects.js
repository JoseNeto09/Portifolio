/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import TrackVisibility from 'react-on-screen';
import React from 'react';
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "<Astronaut dev/>",
      description: "Crud de cursos online",
      imgUrl: projImg1,
    },
    {
      title: "Food App",
      description: "Faça pedidos para o seu restaurante favorito",
      imgUrl: projImg2,
    },
    {
      title: "My Notes",
      description: "ToodList de anotações importantes",
      imgUrl: projImg3,
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Meus Projetos</h2>
                <p>Projetos desenvolvidos com objetivo de adquirir técnicas em desenvolvimento web, seguindo regras de negócio, análise de requisitos de cada projeto.</p>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
