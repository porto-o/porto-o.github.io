import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ismael Porto </span>
            from <span className="purple"> Mexico City, Mexico.</span>
            <br /> I am a second year student pursuing my Bachelors
            in Data Science at ESCOM-IPN.
            <br />
            Additionally, I am currently leader of "Nous Community" and MERN Stack Student at MITxPro.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ego kills knowledge, as knowledge requires learning, and learning requires humility."{" "}
          </p>
          <footer className="blockquote-footer">Rolsey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
