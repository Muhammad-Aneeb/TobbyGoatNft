import React from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbarr.css";
function Navbarr() {
  return (
    <div className="MAindiv111">
      <Navbar style={{ backgroundColor: "rgb(17,39,44)", padding:"0.5rem" }} collapseOnSelect expand="lg" >
        <Container fluid>
          <Navbar.Brand style={{color:"white", textAlign:"start"}} href="#home">Toby The Goat</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav className="Linksdata">
            <Nav.Link style={{color:"white"}} href="#deets">Collection</Nav.Link>
            <Nav.Link style={{color:"white"}}  href="#deets">Rarity</Nav.Link>
            <Nav.Link style={{color:"white"}}  href="#deets">Project</Nav.Link>
            <Nav.Link style={{color:"white"}}  href="#deets">Roadmap</Nav.Link>
            <Nav.Link style={{color:"white"}}  href="#deets">Team</Nav.Link>
            <Nav.Link style={{color:"white"}}  href="#deets">FAQs</Nav.Link>
              <Nav.Link style={{color:"white"}}  href="#deets">Connect Wallet</Nav.Link>
              <Nav.Link style={{color:"white"}}  eventKey={2} href="#memes">
                Join Discord
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
    
  );
}

export default Navbarr;
