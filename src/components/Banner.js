import "animate.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import developer from "../assets/img/developer.svg";
import "./Banner.css"
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Fullstack Developer",
    "Frontend Developer",
    "Frontend Developer",
  ];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className="banner-left "
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sifat`} <br />{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="text-xs text-white">
                  Hi there! I'm Sifat, a frontend-focused web developer with a passion for problem-solving and a hunger for learning. In the world of web development, I specialize in creating engaging user experiences using technologies like React, Next.js, TypeScript, MongoDB, and Express.js.</p> 
                  
                  <p className="text-xl text-white">
                  For me, programming isn't just a job; it's a continuous journey of discovery. What sets me apart is not just my technical skills but also my commitment to personal growth. I'm constantly expanding my knowledge base and staying updated with the latest trends in the industry.</p>
                  
                  <p className="text-xl text-white">
                  If you're looking for a dedicated team member who can bring creativity, expertise, and a can-do attitude to your projects, then I'm your person. Let's work together to achieve great things!
                  </p>
                  <a href="https://drive.google.com/uc?export=download&id=12s6ESAvmIfRSKMuTbrrRfCAm_GpOvhhq" download="sifat's web developer resume.pdf" className="btn btn-primary text-white">Download Resume</a>
                  <a style={{ textDecoration: "none" }} href="#connect">
                  <button onClick={() => console.log("connect")}>
                    Contact Me <ArrowRightCircle size={25} /> 
                  </button>
                  </a>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={developer} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};





