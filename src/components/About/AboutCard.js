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
            Hi Everyone, I am <span className="purple">Nigam Niraula </span>
            from <span className="coloured"> Kathmandu,Nepal.</span>
            <br /> I am a third year student pursuing Computer Engineering.
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="coloured"> C, C++, and Javascript. </b>
            </i>
            <br />
            <br />
            My field of Interest's are
            <b className="coloured"> Web Development </b> and{" "}
            <b className="coloured">Machine Learning</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
