import React from "react";
import { Col, Row } from "react-bootstrap";

import { feSkills } from "./skills";

const FrontEndSkills = () => {
  const colSkill1 = feSkills.slice(0, 4);
  const colSkill2 = feSkills.slice(4, 8);

  return (
    <div className="skill">
      <Row className="gap-3 gap-sm-0">
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

export default FrontEndSkills;
