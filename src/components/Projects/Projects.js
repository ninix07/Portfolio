import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "../Styles/project.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import prabigya from "../../Assets/Projects/Prabigya.png";
import autoffic from "../../Assets/Projects/autoffic.svg";
import prophesy from "../../Assets/Projects/battery.png";
function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Container>
        <ParallaxProvider>
          <Parallax speed={10}>
            <h1 className="project-heading">
              My Recent <strong className="coloured">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects that I've worked on.
            </p>
          </Parallax>
        </ParallaxProvider>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prabigya}
              isBlog={false}
              title="Prabigya"
              description="Prabigya is a VS Code extension that suggests a variable name based on the comments provided by the programmers. It was done with the aim of helping programmers write more readable code. The major parts of the project is NLP and BART transformer model."
              ghLink="https://github.com/orgs/Prabigyaa/repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoffic}
              isBlog={false}
              title="Autoffic"
              description="Autoffic uses object detection and object tracking systems to detect the number of vehicles in an intersection and control the traffic accordingly in a simulated environment."
              ghLink="https://github.com/orgs/Autoffic/repositories"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prophesy}
              isBlog={false}
              title="Prophesy"
              description="Prophesy is a battery monitoring software tailored for linux and windows user. It focuses on providing relevant information about battery and using it to predict the remaining time of use for given charge cycle using neural network and regression algorithms."
              ghLink="https://github.com/earthPerson-001/prophesy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
