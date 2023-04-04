import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I am a newly trained developer with a background in cybersecurity. 
           I am learning to be a developer in order to improve my knowledge of IT and expand my skill set.

           Some of my skills include:
          </p>
          <ul>
            <li className="about-activity">
              <ImCheckmark /> HTML
            </li>
            <li className="about-activity">
              <ImCheckmark/> CSS
            </li>
            <li className="about-activity">
              <ImCheckmark /> JavaScript
            </li>
            <li className="about-activity">
              <ImCheckmark /> SQL
            </li>
            <li className="about-activity">
              <ImCheckmark /> React
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;