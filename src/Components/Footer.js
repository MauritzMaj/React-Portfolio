import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Row>
      
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MauritzMaj"
                style={{ color: "#c5c6c7" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mauritz-majelyne-96a2b785"
                style={{ color: "#c5c6c7" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          {year} Mauritz Majelyne
        </Col>
        
      </Row>
    </footer>
  );
}

export default Footer;