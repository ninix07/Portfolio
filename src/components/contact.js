import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Styles/contact.css";

const handleEmailClick = (e) => {
  e.preventDefault();
  const recipientEmail = "nigam21nir@gmail.com";
  window.location.href = `mailto:${recipientEmail}`;
};

export default function Contact() {
  return (
    <div className="contact-section" id="Contact">
      <h2 className="blockquote mb-0">
        Feel free to <span className="coloured">connect </span>with me on
      </h2>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/ninix07"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/ninix_07"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/nigam-niraula-564208215/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="/contact"
            target="_blank"
            rel="noreferrer"
            onClick={handleEmailClick}
            className="icon-colour  home-social-icons"
          >
            <AiFillMail />
          </a>
        </li>
      </ul>
    </div>
  );
}
