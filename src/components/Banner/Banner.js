/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.jpg";
import 'animate.css';

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["José Lopes Sobrinho Neto", "Software Developer Jr"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 10);
    const period = 100;

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
                        <h1>{``}<span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMG" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}