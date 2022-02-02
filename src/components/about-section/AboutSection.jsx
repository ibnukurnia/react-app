import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <>
      <Container className="text-center">
        <div className="text-sm-end">
          <h4>About Me</h4>
          <h6>Who i am</h6>
        </div>
        <Row className="mt-5 text-sm-start align-items-start">
          <Col sm="6" className="about_desc">
            <p>
              My name is Ibnu Kurnia Budi Purnama, i'm a <span> Fullstack Web Developer. </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni!
            </p>
          </Col>
          <Col sm="5" className="ms-sm-auto">
            <Row className="about_detail">
              <Col md="6">
                <div>
                  <p>
                    Birthday : <span> 16 April 1998</span>
                  </p>
                </div>
                <div>
                  <p>
                    Address : <span>Jakarta, Indonesia</span>
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div>
                  <p>
                    Gender : <span>Male</span>
                  </p>
                </div>
                <div>
                  <p>
                    Status : <span>Student</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutSection;
