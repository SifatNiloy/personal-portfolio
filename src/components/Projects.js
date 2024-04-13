import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
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
  const projects2 = [
    {
      title: "Copa America",
      description: "Players and News",
      imgUrl: projImg7,
      site: "https://agitated-mahavira-e10a73.netlify.app/",
    },
    {
      title: "Genius Car",
      description: "Online Car service order",
      imgUrl: projImg8,
      site: "https://genius-car-services-2-a514c.web.app/",
    },
    {
      title: "Fashion Community",
      description: "Hire Fashion Models",
      imgUrl: projImg9,
      site: "https://project-fashion-models.netlify.app/",
    },
    {
      title: "Panda Commerce",
      description: "Online Product Shop",
      imgUrl: projImg10,
      site: "https://panda-commerce-sifat.netlify.app/",
    },
    {
      title: "E-School",
      description: "Online Course Services",
      imgUrl: projImg5,
      site: "https://e-school-sifat.netlify.app/",
    },
  ];
  const projects3 = [
    {
      title: "MacBook Pro",
      description: "Order Macbook ",
      imgUrl: projImg13,
      site: "https://macbook-js-assignment.netlify.app/",
    },
    {
      title: "Bike Shop",
      description: "Buy Bike and get Updates",
      imgUrl: projImg12,
      site: "https://honda-cbr-ph2021.netlify.app/",
    },
    {
      title: "Dollar Smart",
      description: "Online Store",
      imgUrl: projImg15,
      site: "https://dollarsmart.netlify.app/",
    },
    {
      title: "Doctors Portal",
      description: "Online Appointment Service",
      imgUrl: projImg1,
      site: "http://doctors-portal-client.sifatniloy.com/",
    },
    {
      title: "Netlearner",
      description: "Online Course Services",
      imgUrl: projImg6,
      site: "https://netlearner.netlify.app/",
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
                  <p>
                    Here is the project I've workded with various Technology
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
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
                    </Nav>
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
                      <Tab.Pane eventKey="second">
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
                      </Tab.Pane>
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
