/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import TrackVisibility from 'react-on-screen';
import React from 'react';
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "MyStore",
      description: "Loja de artigos feminios",
      imgUrl: projImg2,
      link: "https://JoseNeto09.github.io/myStore",
    },
    
    {
      title: "MyKaban",
      description: "Crie seu Kaban com o MyKaban",
      imgUrl: projImg3,
      link:"https://joseneto09.github.io/myKanban/",
    },
    {
      title: "MyBlog",
      description: "Aplicação de postagens com autenticação por usuario.",
      imgUrl: projImg4,
      link:"https://github.com/JoseNeto09/Mern-blog",
    },

    {
      title: "<Astronaut dev/>",
      description: "CRUD de Cursos Online",
      imgUrl: projImg1,
      link: "https://github.com/JoseNeto09/Courses-Angular",
    },


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
                              <ProjectCard key={index}{...project}/>
                              
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
