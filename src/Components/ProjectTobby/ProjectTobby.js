import React from "react";
import "./ProjectTobby.css";
import { Row, Col } from "antd";

function ProjectTobby() {
  return (
    <div>

      {" "}
      <Row className="Mainclass111p">
        
         
          <Col span={6} className="firstcolumnp">
            
            <div className="Abouttobbyp">
            <h2 style={{color:"black"}}>- Project</h2>
            </div>
            <div className="Aboutdescription111p">
            <p>
                <b>"Toby The Goat"</b>, or TTG for short, is an NFT collection
                that was born out of the passion of four friends for the Crypto
                ecosystem and the NFTs universe. Believing in the potential of
                the technology, Toby's team intends to launch new educational
                content with the aim of reducing the learning curve for the
                general public.
              </p>
              <p>
                <strong>Education is key</strong> to making blockchain and web3
                technology widely adopted by the public. A lot of times people
                don't have the time or are too afraid to do their research into
                topics they don't fully understand.
              </p>
              <p>
                <strong>
                  Toby The Goat is a symbiosis between art and utility.
                </strong>{" "}
                We want to educate people through animation and board games,
                make Crypto an educational theme that younger and older
                generations will find interesting and start to adopt in their
                daily lives.
              </p>
              <p> <b>
                Join the ride and help us present the metaverse to the universe.</b>
              </p>            </div>
          
          
          </Col>
          <Col span={6}>
          <div className="ImagePartp">
            <img className="imgsettingp" src="https://tobythegoat.io/images/project_goat.png" alt = "About Image" />
        </div>
          
          </Col>
      

      </Row>
    </div>
  );
}

export default ProjectTobby;
