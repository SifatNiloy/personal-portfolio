// import Marquee from "react-fast-marquee";
// import colorSharp from "../assets/img/color-sharp.png";
import "./Skills2.css";
// import meter1 from "../assets/img/meter1.svg";
import Marquee from "react-fast-marquee";
import firebase from "../assets/skills/firebase.svg";
import git from "../assets/skills/git.svg";
import react from "../assets/skills/react.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import tailwind from "../assets/skills/tailwind.svg";
import typescript from "../assets/skills/typescript.svg";
import figma from "../assets/skills/figma.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
// import node from "../assets/skills/node.svg";
// import express from "../assets/skills/express.svg";
// import mongodb from "../assets/skills/mongodb.svg";
import mysql from "../assets/skills/mysql.svg";

const Skills2 = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>All the technolody I have worked with</p>
              <Marquee>
                <div className="item">
                  <img src={git} alt="Image1" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image2" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image3" />
                  <h5>React</h5>
                </div>
                {/* <div className="item">
                  <img src={node} alt="Image3" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image3" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image3" />
                  <h5>Mongodb</h5> */}
                {/* </div> */}
                <div className="item">
                  <img src={html} alt="Image3" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image3" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image3" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image3" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image3" />
                  <h5>javascript</h5>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
    // <Marquee>
    // </Marquee>
  );
};

export default Skills2;
