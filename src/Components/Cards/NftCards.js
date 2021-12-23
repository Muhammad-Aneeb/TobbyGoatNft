import React from "react";
import "./NftCards.css";
import { Row, Col, Card } from "antd";
import { samsung } from "./Data.js";
 

function Samsung1() {
  return (
    <div>
      {" "}
      <Row justify="center">
        {samsung.map((user) => (
         
          <Col
            id={user.title}
            className="marginbottomeee"
            lg={5}
            md={10}
            xs={20}
            sm={20}
          >
            <Card
              hoverable
              style={{ width: 200, height: 200, borderRadius:"36px" }}
              cover={<img style={{ width: 200, borderRadius:"36px" }} alt="example" src={user.img} />}
            >
            </Card>
          </Col>
      
        ))}
      </Row>
    </div>
  );
}

export default Samsung1;