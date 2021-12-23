import React from "react";
import "./AboutTobby.css";
import { Row, Col } from "antd";
function AboutTobby() {
  return (
    <div className="Mainclassdiv333">
      {" "}
      <Row className="Mainclass111">
        
         
          <Col span={6} className="firstcolumn">
            
            <div className="Abouttobby">
            <h2 style={{color:"white"}}>- About Toby</h2>
            </div>
            <div className="Aboutdescription111">
            <p><strong>Toby is a goat</strong> that has never joined the herd like the others. Since childhood, he showed an <strong>adventurous spirit</strong> and willingness to explore the unknown. After years of doing his own research, Toby decided to leave his pasture life to embark on what will be the biggest adventure of his life. Determined to put goats in the history books, <strong>Toby moved to the Ethereum blockchain</strong> to be the first goat to go to the moon.</p>
            <p><strong>Toby is a goat</strong> that has never joined the herd like the others. Since childhood, he showed an <strong>adventurous spirit</strong> and willingness to explore the unknown. After years of doing his own research, Toby decided to leave his pasture life to embark on what will be the biggest adventure of his life. Determined to put goats in the history books, <strong>Toby moved to the Ethereum blockchain</strong> to be the first goat to go to the moon.</p>

            </div>
          
          
          </Col>
          <Col span={6}>
          <div className="ImagePart">
            <img className="imgsetting" src="https://tobythegoat.io/images/toby_moon.png" alt = "About Image" />
        </div>
          
          </Col>
      

      </Row>
      
    </div>
  );
}

export default AboutTobby;
