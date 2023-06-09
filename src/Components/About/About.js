import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import headShot from "../../Assets/Images/profile-pic2.jpg"

const imgStyle= {
  width: "50%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "30%",
  border: "5px solid #fff",
  boxShadow: "0 0 10px #000"
}
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={0}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me:
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={headShot} alt="about" className="img-fluid" style={imgStyle} />
          </Col>
       </Row>
      </Container>
    </Container>
  );
}

export default About;
