import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiSass,
} from "react-icons/di";
import { SiMysql, SiMongodb, SiOpencv, SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JS</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h6>MongoDB</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <h6>OpenCV</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <h6>Sass</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
