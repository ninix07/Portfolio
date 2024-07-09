import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "../Styles/about.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Nigam Niraula</span>{" "}
            from <span className="coloured">Kathmandu, Nepal.</span>
            <br /> I am a third-year student pursuing a degree in Computer
            Engineering at{" "}
            <span className="coloured">Kathmandu University</span>.
            <br />
            <br />I have experience working on various projects in{" "}
            <span className="coloured">
              image processing, frontend development, and full-stack development
            </span>
            .
            <br />
            <br />
            My key areas of interest include
            <b className="coloured"> Web Development</b> and
            <b className="coloured"> Machine Learning.</b>
            <br />
            <br />
            Apart from my technical skills, I have strong soft skills in
            communication, teamwork, problem-solving, and adaptability.
            <br />
            <br />
          </p>

          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
