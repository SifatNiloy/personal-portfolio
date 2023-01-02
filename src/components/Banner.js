import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg'
const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm web decoded`} <span className='wrap'>Web Developer</span> </h1>
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