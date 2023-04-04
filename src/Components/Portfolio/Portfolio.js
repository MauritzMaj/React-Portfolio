import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import  PasswordGenerator from "../../Assets/Projects/Password_Generator.png";
import JavascriptQuiz from "../../Assets/Projects/Javascript_Quiz.png";
import WeatherForecast from "../../Assets/Projects/Weather_Forecast.png";
import EmployeeTracker from "../../Assets/Projects/Employee_Tracker.png";
import DayPlanner from "../../Assets/Projects/Day_Planner.png";
import NoteTaker from "../../Assets/Projects/Note_Taker.png";

function Projects() {
  return (
    <section>
    <Container fluid className="project-section" >
      <Container>
        <h1 className="project-heading">
          What I've Been Working On
        </h1>
        { <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PasswordGenerator}
              isBlog={false}
              title="Password Generator"
              description="This application will generate a random password based on user-selected criteria."
              link="https://github.com/MauritzMaj/Password-Generator"
              link2="https://mauritzmaj.github.io/Password-Generator/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JavascriptQuiz}
              isBlog={false}
              title="Javascript Quiz"
              description="This is a timed quiz on Javascript fundamentals that stores high scores."
              link ="https://github.com/MauritzMaj/JavaQuiz"
              link2="https://mauritzmaj.github.io/JavaQuiz/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherForecast}
              isBlog={false}
              title="Weather Forecast"
              description="This is an application that provides a weather forecast for any city in the world."
              link="https://github.com/MauritzMaj/WeatherForecast"
              link2="https://mauritzmaj.github.io/WeatherForecast/"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeTracker}
              isBlog={false}
              title="Employee Tracker"
              description="This is a command-line application that allows the user to view and manage the departments, roles, and employees in their company."
              link="https://github.com/MauritzMaj/Employee-Tracker"
            
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DayPlanner}
              isBlog={false}
              title="Day Planner"
              description="This is a simple calendar application that allows the user to save events for each hour of the day."
              link="https://github.com/MauritzMaj/DayPlanner"
              link2=" https://mauritzmaj.github.io/DayPlanner/"
            
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NoteTaker}
              isBlog={false}
              title="Note Taker"
              description="This is an application that can be used to write, save, and delete notes. "
              link="https://github.com/MauritzMaj/NoteTaker"
              link2="https://tranquil-retreat-95902.herokuapp.com/"
              
            />
          </Col>

  </Row> }
      </Container>
    </Container>
    </section>
  );
}

export default Projects;