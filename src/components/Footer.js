import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/footer.css";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const handleEmailClick = (e) => {
  e.preventDefault();
  const recipientEmail = "nigam21nir@gmail.com";
  window.location.href = `mailto:${recipientEmail}`;
};
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Nigam Niraula</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year} All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ninix07"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ninix_07"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nigam-niraula-564208215/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                onClick={handleEmailClick}
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
