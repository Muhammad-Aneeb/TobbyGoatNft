import React from "react";
import "./TeamTobby.css";
import { Row, Col } from "antd";

function TeamTobby() {
  return (
    <div className="TeamMainDiv">
      <div className="CardDataDiv">
        <div className="Heading">
          <h2 style={{ color: "white", textAlign: "start", marginLeft:"1.3rem" }}>
            - Meet the team
          </h2>
        </div>
        <div className="RowColumnDiv">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={6} md={12} sm ={24} xs={24} className="columnClass" span={6}>
              <div className="columnClass">
                <img
                  className="Logo1"
                  src="https://tobythegoat.io/images/team/team_member1.png"
                  alt="TeamImage1"
                />
                <h4 style={{ color: "white", textAlign: "center" }}>
                  LEITOVSKI
                </h4>
                <h6 style={{ color: "white", textAlign: "center" }}>
                  Illustrator
                </h6>
              </div>
            </Col>
            <Col  lg={6} md={12} sm ={24} xs={24} className="columnClass" span={6}>
              <div className="columnClass">
                <img
                  className="Logo1"
                  src="https://tobythegoat.io/images/team/team_member2.png"
                  alt="TeamImage1"
                />
                <h4 style={{ color: "white", textAlign: "center" }}>NARPAZ</h4>
                <h6 style={{ color: "white", textAlign: "center" }}>
                  UI/UX Designer
                </h6>
              </div>
            </Col>
            <Col  lg={6} md={12} sm ={24} xs={24} className="columnClass" span={6}>
              <div className="columnClass">
                <img
                  className="Logo1"
                  src="https://tobythegoat.io/images/team/team_member3.png"
                  alt="TeamImage1"
                />
                <h4 style={{ color: "white", textAlign: "center" }}>DAVNAR</h4>
                <h6 style={{ color: "white", textAlign: "center" }}>
                  Blockchain Expert
                </h6>
              </div>
            </Col>
            <Col  lg={6} md={12} sm ={24} xs={24} className="columnClass" span={6}>
              <div className="columnClass">
                <img
                  className="Logo1"
                  src="https://tobythegoat.io/images/team/team_member4.png"
                  alt="TeamImage1"
                />
                <h4 style={{ color: "white", textAlign: "center" }}>
                  REDLIVE13
                </h4>
                <h6 style={{ color: "white", textAlign: "center" }}>
                  Lead Developer
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TeamTobby;
