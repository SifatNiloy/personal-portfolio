import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Doctors Portal",
      description: "Online Appointment Service",
      imgUrl: projImg1,
      site: 'https://doctors-portal-348ac.web.app/'
    },
    {
      title: "Doctorseba",
      description: "Online Telemedicine Service",
      imgUrl: projImg2,
      site: 'https://doctorseba-d9db3.web.app/'
    },
    {
      title: "Cameragraphy",
      description: "Online Camera Shop",
      imgUrl: projImg3,
      site: 'https://cameragraphy-6ea25.web.app/'
    },
    {
      title: "Travelofun",
      description: "Online Travel Booking",
      imgUrl: projImg4,
      site: 'https://travelofun-df17a.web.app/'
    },
    {
      title: "E-school",
      description: "Online Course Services",
      imgUrl: projImg5,
      site: 'https://e-school-sifat.netlify.app/'
    },
    {
      title: "Netlearner",
      description: "Online Course Services",
      imgUrl: projImg6,
      site: 'https://netlearner.netlify.app/'
    },
  ];
  const projects2 = [
    {
      title: "Doctors Portal",
      description: "Online Appointment Service",
      imgUrl: projImg1,
      site: 'https://doctors-portal-348ac.web.app/'
    },
    {
      title: "Doctorseba",
      description: "Online Telemedicine Service",
      imgUrl: projImg2,
      site: 'https://doctorseba-d9db3.web.app/'
    },
    {
      title: "Cameragraphy",
      description: "Online Camera Shop",
      imgUrl: projImg3,
      site: 'https://cameragraphy-6ea25.web.app/'
    },
    {
      title: "Travelofun",
      description: "Online Travel Booking",
      imgUrl: projImg4,
      site: 'https://travelofun-df17a.web.app/'
    },
    {
      title: "E-school",
      description: "Online Course Services",
      imgUrl: projImg5,
      site: 'https://e-school-sifat.netlify.app/'
    },
    {
      title: "Netlearner",
      description: "Online Course Services",
      imgUrl: projImg6,
      site: 'https://netlearner.netlify.app/'
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
                <h2>Projects</h2>
                <p>Here is the project I've workded with various Technology</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
