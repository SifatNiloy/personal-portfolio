import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
const Projects = () => {
    const projects=[
        {
            title: 'Business Startup',
            description: 'Design and Development',
            imgUrl: projImg1
        },
        {
            title: 'Business Startup',
            description: 'Design and Development',
            imgUrl: projImg2
        },
        {
            title: 'Business Startup',
            description: 'Design and Development',
            imgUrl: projImg3
        },
        {
            title: 'Business Startup',
            description: 'Design and Development',
            imgUrl: projImg1
        },
        {
            title: 'Business Startup',
            description: 'Design and Development',
            imgUrl: projImg1
        }
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis quae expedita dignissimos beatae fuga?</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab 3
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">lorem</Tab.Pane>
                            <Tab.Pane eventKey="third">lorem</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;