import React, { Component } from "react";
import "./TobbyFAQs.css";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function TobbyFAQs() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>- FAQ's</h2>
        </div>
        <div>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="Quantity and Price??" key="1">
              <p>The collection consists of 9999 Goats priced at .06 Ether.</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="How were the Goats created?" key="1">
              <p>
                Each of our goats was randomly created using computer software
                that combined more than 350 handcrafted traits to create unique
                goats.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="where can I get a Toby the Goat NFT?" key="1">
              <p>Minting starts on December 15th, 15:00 (UTC +0)</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="where can I get a Toby the Goat NFT?" key="1">
              <p>
                You can mint Toby The Goat NFTs through the official website
                (https://tobythegoat.io) or directly through the smart contract.
                Upon minting NFTs, these are automatically sent to your wallet
                and shown in your OpenSea account.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="When is the art going to be revealed?" key="1">
              <p>
                Art reveal will start ten days after minting is enabled, on
                christmas day - December 25th, 15:00 (UTC +0)
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="Is there a limit of NFTs per transaction?" key="1">
              <p>Yes, the maximum amount of NFTs per transaction is 10.</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              borderRadius: "20px",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="Is the miniting random?" key="1">
              <p>Yes, all NFTs are minted at random from the smart contract.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default TobbyFAQs;
