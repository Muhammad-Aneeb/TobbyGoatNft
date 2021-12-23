import React from "react";
import "./Footerr.css";
function Footerr() {
  return (
    <div>
      <div className="MainDivFooterr">
        <div>
          <h3 style={{ color: "white" }}>- Follow Toby The Goat -</h3>
        </div>
        <div className="Iconss">
          <div className="IconsFooterr">
            <img
              style={{ width: "5rem", height: "5rem" }}
              src="https://tobythegoat.io/images/icons/discord.svg"
            />
          </div>
          <div className="IconsFooterr">
            <img
              style={{ width: "5rem", height: "5rem" }}
              src="https://tobythegoat.io/images/icons/twitter.svg"
            />
          </div>
          <div className="IconsFooterr">
            <img
              style={{ width: "5rem", height: "5rem" }}
              src="https://tobythegoat.io/images/icons/opensea.svg"
            />
          </div>
        </div>
        <h6 style={{ color: "white", marginBottom: "2rem", marginTop: "2rem" }}>
          For inquiries send us an email
        </h6>
        <h6 style={{ color: "white" }}>
          {" "}
          TTG TOKEN CONTRACT : 0x2484A62c2D3C6980Dc57D9aa02305C2F7523Dc0d
        </h6>
        <h6 style={{ color: "white", marginTop: "2rem" }}>
          {" "}
          2021, TOBY THE GOAT NFT
        </h6>
      </div>
    </div>
  );
}

export default Footerr;
