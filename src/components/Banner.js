import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import React, { Component }  from 'react';

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Fullstack Developer", "AngularJs", "Reactjs", "NextJs", "Springboot", "Java","Javascript  typescript" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if(isDeleting){
            setDelta(preveDelta => preveDelta /2)
        }
        if(!isDeleting &&  updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){{
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
}
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`José Lopes S.N  `}<span className="wrap">{text}</span></h1>
                        <p></p>
                        <p>Curioso e faminto por tecnologia, venho em busca oportunidade na parte de desenvolvimento em geral front ou back</p>
                        <button onClick={() => console.log('connect')}>Conectar <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMG" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}