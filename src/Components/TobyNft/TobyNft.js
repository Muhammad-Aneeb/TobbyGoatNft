import React from "react";
import "./TobyNft.css";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function TobyNft() {
  return (
    <div className="Maindiv321">
      <div className="firstdiv321">
        <h1> Toby The Got NFT </h1>
        <h6 style={{ marginBottom: ".8rem" }}>
          Make the Universe Meet the Metaverse
        </h6>
        <div className="greendiv">
          <div>
            <p style={{ marginTop: ".8rem" }}>How many Toby's?</p>
          </div>
          <MinusOutlined />
          <div className="whitecircle">1</div>
          <PlusOutlined />
          <div className="MintButton">
            0.06 eth
            <Button type="primary">MINT</Button>
          </div>
        </div>
      </div>
      <div className="timediv">
        <h6 className="timediv444">Mint closes on December 17th 20:00 (UTC +0)</h6>
        <div className="timediv321">
          <h6 className="timediv333">10 hours, 59 minutes and 57 seconds remaining</h6>
        </div>
      </div>
    </div>
  );
}

export default TobyNft;
