import React, { Component, useRef, useState } from "react";
import "../styles/voter.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copypng from './copy.png';

class Voter extends Component {

  state = {
    value: '',
    copied: false,
  };

  componentDidMount () {
    const script = document.createElement("script");

    script.src="https://unpkg.com/react@16.0.0/umd/react.production.min.js";
    script.src="https://unpkg.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js";
    script.async = true;

    document.body.appendChild(script);
}
    render() {

    return (
        <div className="finder-body"> 
        <div className= "text-copier">
        <input style={{borderRadius: '10px'}} value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span><img class="copyimg" src={copypng} alt="Copy"/></span>
        </CopyToClipboard>

        {/* <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard> */}

        {this.state.copied ? <span style={{color: 'brown'}}>Copied.</span> : null}
      </div>
       
        <div className= "body-containerfinder">
          <br /> <br /> <br />
          <div className= "header-finder">
            <h1 className= "ur-spots">Vote Famous Hotspot! </h1> <br />    
            <h3 className= "ur-ori-five">Mark your favourites under 5KM area:</h3>
            <br /> <br /> <br />
          </div>
          

           
        {/* end of body container div */}
        </div> 

    
    </div>
    );
  }
}

export default Voter;