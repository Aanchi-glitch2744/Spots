import React, { Component, useRef, useState } from "react";
import "../styles/myspot.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copypng from './copy.png';
import GeoLocation from "./geolocation";
// import map from './map.py'; 


class Myspot extends Component {

  state = {
    value: '',
    copied: false,
  };

  

  // constructor(props) {

  //   super (props); 
  //   this.state = {
  //   latitude: null,
  //   longitude: null,
  //   userAddress: null
  //   };
  //   this.getLocation = this.getLocation.bind(this); 
  //   this.getCoordinates = this.getCoordinates.bind(this);
  //   }

  //   getLocation(){
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
  //     }else {
  //       alert("Geolocation is not supported by this browser.");
  //     }


  //   getCoordinates(position) {

  //     this.setState({
  //        latitude: position.coords. latitude,
  //        longitude: position.coords. Longitude
  //     })
  //   }

  //   handleLocationError(error) {
  //     switch(error.code) {
  //       case error.PERMISSION_DENIED:
  //         alert("User denied the request for Geolocation.")
  //         break;
  //       case error.POSITION_UNAVAILABLE:
  //         alert("Location information is unavailable.")
  //         break;
  //       case error.TIMEOUT:
  //         alert("The request to get user location timed out.")
  //         break;
  //       case error.UNKNOWN_ERROR:
  //         alert("An unknown error occurred.")
  //         break;
  //     default:
  //         alert("An unknown error occurred.")
  //     }
  //   }





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
            <h1 className= "ur-spots">Your Spots! </h1> <br />    
            <h3 className= "ur-ori-five">Your Original Five:</h3>
            <br /> <br /> <br />
          </div>
          
          {/* <form encType="multipart/form-data" method="post" action="map.py"/>
          <span><img class="map" src={map} action="map.py"/></span> */}
        {/* end of body container div */}
{/* 
        <div className="MapApp">

         <h2>   
         React Geolocation Example
        </h2>

           <button onClick={this.getLocation}>Get coordinates</button>
           
           <h4>HTMLS Coordinates</h4> 
           <p>Latitude: {this.state. latitude}</p>
           <p>Longitude: {this.state. longitude}</p>
           <h4>Google Maps Reverse Geocoding</h4>
           <p>Address: {this.state.userAddress}</p>
            */}
          {/* {
            this.state.latitude && this.state.longitude ?
            <img src= {'https://maps.googleapis.com/maps/api/staticmapcenter-${this.state.latitude)${this.state.longitude)&zoom=14&size=400x300&sensor=false&markers=color:red%7C$(this.state.latitude),$(this.state.longitude)&key=$(GOOGLE_API_KEY)'} alt='' />
            :
            null
          } */}

          {/* </div> */}
        
     
          <GeoLocation/>




    </div>

       

    
    </div>
    );
  }
}

export default Myspot;






