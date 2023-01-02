import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg'
const Banner = () => {
    const [loopNum , setloopNum]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);

    const toRotate=["Web developer", "Web designer", "UI/UX designer"]
    const [text, setText]= useState('');
    const [delta, setDelta]= useState(3000- Math.random()*100)
    const period= 2000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        },delta)

        return ()=>{ clearInterval (ticker)}
    }, [text ])

    const tick= ()=>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=> prevDelta/2)
        }
        if(!isDeleting && updatedText=== fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setloopNum(loopNum+1);
            setDelta(500)
        }
    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm web decoded`} <span className='wrap'>{text}</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi. Reprehenderit iusto, sunt unde magni officiis illum sit deleniti nihil quibusdam laborum, veniam, cum vel veritatis labore esse asperiores nesciunt?</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <i class="bi bi-arrow-right-circle"></i></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;