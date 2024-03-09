import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Avatar from "../../Assets/avatar.svg";
import Toolstack from "./Toolstack";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "../Styles/home.css";
import "../Styles/about.css";

function About() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Set the mobile breakpoint as per your design
  const translateXValues = ["-100px", "0px"];
  const scaleValues = [1, 1];
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7}>
            <ParallaxProvider>
              <Parallax
                translateX={translateXValues}
                scale={scaleValues}
                easing="easeInQuad"
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  About Me
                </h1>
              </Parallax>
            </ParallaxProvider>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={Avatar} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <ParallaxProvider>
          <Parallax
            translateX={translateXValues}
            scale={scaleValues}
            easing="easeInQuad"
          >
            <h1 className="project-heading">
              Professional <strong className="coloured">Skillset </strong>
            </h1>
          </Parallax>
        </ParallaxProvider>

        <Techstack />
        <ParallaxProvider>
          <Parallax
            translateX={translateXValues}
            scale={scaleValues}
            easing="easeInQuad"
          >
            <h1 className="project-heading">
              <strong className="coloured">Tools</strong> I use
            </h1>
          </Parallax>
        </ParallaxProvider>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
