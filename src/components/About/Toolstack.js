import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiUnity,
  SiPostman,
  SiJupyter
} from "react-icons/si";
import {
  DiAndroid
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p>Jupyter Notebooks</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity/>
        <p>Unity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <p>Android Studio</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
