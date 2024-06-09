import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import { ProjectCard } from "./ProjectCard";
import "./Projects.css"
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Click2Buy",
      description: "Ecommerce website",
      imgUrl: projImg17,
      site: "https://click2buy-client.sifatniloy.top/",
    },

    {
      title: "Doctorseba",
      description: "Online Telemedicine Service",
      imgUrl: projImg2,
      site: "https://doctorseba-d9db3.web.app/",
    },

    {
      title: "Cameragraphy",
      description: "Online Camera Shop",
      imgUrl: projImg3,
      site: "https://cameragraphy.sifatniloy.top/",
    },
    {
      title: "GPT3",
      description: "Online Store",
      imgUrl: projImg16,
      site: "https://gpt3-1366.netlify.app/",
    },
    {
      title: "Travelofun",
      description: "Online Travel Booking",
      imgUrl: projImg4,
      site: "https://travelofun.sifatniloy.top/",
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p >
                    Here are the projects I've workded with various technology
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>  */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
