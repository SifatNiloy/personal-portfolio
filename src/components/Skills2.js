// import Marquee from "react-fast-marquee";
import colorSharp from "../assets/img/color-sharp.png";
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
import nextjs from "../assets/skills/nextJS.svg";
import mongodb from "../assets/skills/mongoDB.svg";
import mysql from "../assets/skills/mysql.svg";

const Skills2 = () => {
  return (
    <section className="skill" id="skills">
      <div className="container py-24">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
              <p className="text-lg mb-12 text-white">
                Here's a collection of the tools and technologies I’ve worked
                with. Each one is a key part of my experience and highlights my
                dedication to learning and improving as a developer. I use these
                skills to create effective and high-quality software solutions.
              </p>
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
                <div className="item">
                  <img src={mysql} alt="Image3" />
                  <h5>Mysql</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image3" />
                  <h5>nextJS</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Image3" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image3" />
                  <h5>Mongodb</h5>
                </div>
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
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Images of technology logo"
      />
    </section>
    // <Marquee>
    // </Marquee>
  );
};

export default Skills2;
