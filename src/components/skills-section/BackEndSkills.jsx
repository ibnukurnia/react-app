import React from "react";
import { Col, Row } from "react-bootstrap";

import { beSkills } from "./skills";

const BackEndSkills = () => {
  const colSkill1 = beSkills.slice(0, 3);
  const colSkill2 = beSkills.slice(3, 6);

  return (
    <div className="skill">
      <Row className="gap-3 gap-sm-0 skill">
        <Col sm="6" className="gap-3 d-flex flex-column">
          {colSkill1.map((skill, index) => {
            return (
              <>
                <div className="skill_item" key={index}>
                  <div>
                    {skill.logo}
                    <p>{skill.skillName}</p>
                  </div>
                  <span>{skill.level}</span>
                </div>
              </>
            );
          })}
        </Col>
        <Col sm="6" className="gap-3 d-flex flex-column">
          {colSkill2.map((skill, index) => {
            return (
              <>
                <div className="skill_item" key={index}>
                  <div>
                    {skill.logo}
                    <p>{skill.skillName}</p>
                  </div>
                  <span>{skill.level}</span>
                </div>
              </>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default BackEndSkills;
