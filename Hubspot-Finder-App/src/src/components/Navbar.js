import React, { Component } from "react";
// import "../styles/header.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Navbar extends Component {
  
    render() {

    return (
        <div>
        <div className="header-container">
          <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <ReactBootStrap.Container>
           <ReactBootStrap.Navbar.Brand href="#header"><Link to="/">Hubspot Finder App</Link></ReactBootStrap.Navbar.Brand>
           <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
             <ReactBootStrap.Nav className="me-auto">
               <ReactBootStrap.Nav.Link href="#header"><Link to="/myspot">MySpot </Link></ReactBootStrap.Nav.Link>
               <ReactBootStrap.Nav.Link href="#finder"><Link to="/finder">Finder </Link></ReactBootStrap.Nav.Link>
               {/* <ReactBootStrap.Nav.Link href="#voter"><Link to="/voter">Voter </Link></ReactBootStrap.Nav.Link> */}


               {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                 <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                 <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                 <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item> 
                 <ReactBootStrap.NavDropdown.Divider />
                 <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
               </ReactBootStrap.NavDropdown>*/}
             </ReactBootStrap.Nav>
             {/* <ReactBootStrap.Nav>
               <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
               <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                 Dank memes
               </ReactBootStrap.Nav.Link>
             </ReactBootStrap.Nav> */}
           </ReactBootStrap.Navbar.Collapse>
           </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
        </div>
        

    
    </div>
    );
  }
}

export default Navbar;

//sample code
// import React from "react";
// import {Link} from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <Link to="/">Header </Link>
//       <Link to="/finder">Finder </Link>
//       <Link to="/voter">Voter </Link>
//     </div>
//   );
// };

// export default Navbar;