import React from "react";
import "./Collection.css";
import NftCards from "../Cards/NftCards";
import { Container } from "react-bootstrap";

function Collection() {
  return (
    <div className="CollectionMain">
      
        <h2 style={{ color: "black", textAlign:"center" }}>- The Collection</h2>
        <div className="CollectionDescription">
          <p>
            Our Toby The Goat Non-Fungible Token (NFT) collection consists of
            9999 items that were dynamically generated through<br/> computer software
            based on more than 350 unique traits created by Leitov, our
            illustrator. From simple expressions to<br/> themed hoodies and masks,
            our team has put in the time and effort to create a quality NFT that
            makes us proud to call it our<br/> own. With Toby The Goat, we offer a
            perfect symbiosis between art and utility. Owning a Toby The Goat is
            much more than<br/> owning a beautifully crafted goat, it's a gateway to
            utility, contests, giveaways, and making NFTs more mainstream. Go<br/>
            through our website to discover how we are bringing utility to our
            NFT and check out the roadmap to find out what we have<br/> planned for
            this project.
          </p>
        </div>
      
    </div>
  );
}

export default Collection;
