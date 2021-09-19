import React, { Component } from "react";
import "../styles/header.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Header extends Component {
    render() {

    return (
        <div>
        {/* <div className="header-container">
          <h1 className="heading">Hubspot Finder App</h1> 
          
        </div> */}

        <div className= "body-container">
          <br /> <br /> <br />
            <h1 className= "header-container">WELCOME! </h1> <br />
            <h3 className= "header-container">Find your Hubspot, Mark your favourite and Share!</h3>
            <br /> <br /> <br />

            <ReactBootStrap.Container>
             <ReactBootStrap.Row>
               <ReactBootStrap.Col sm className = "welcome-spotsone"><Link to="/myspot">My Spots </Link></ReactBootStrap.Col>
               <ReactBootStrap.Col sm className = "welcome-spotstwo"><Link to="/finder">Find Spots </Link></ReactBootStrap.Col>
               {/* <ReactBootStrap.Col sm className = "welcome-spotsthree"><Link to="/voter">Vote Famous Spots </Link></ReactBootStrap.Col> */}
             </ReactBootStrap.Row>
           </ReactBootStrap.Container>
           <br /> <br />
           

        {/* end of body container div */}
        </div> 

    
    </div>
    );
  }
}

export default Header;