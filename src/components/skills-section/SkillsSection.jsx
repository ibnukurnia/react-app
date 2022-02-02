import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BackEndSkills from "./BackEndSkills";
import FrontEndSkills from "./FrontEndSkills";

const SkillsSection = () => {
  return (
    <>
      <Container>
        <h4>Skills</h4>
        <h6>What skills i have</h6>
        <Row className="skills_container justify-content-between flex-wrap mt-5">
          <Col md="5" className="card_skills p-4">
            <h4>Front End</h4>
            <FrontEndSkills />
          </Col>
          <Col md="5" className="card_skills p-4 mt-3 mt-md-0">
            <h4>Back End</h4>
            <BackEndSkills />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SkillsSection;
