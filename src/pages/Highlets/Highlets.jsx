import React from "react";
import "./highlets.css";
const Highlets = () => {
  return (
    <div>
      <div className="falling-text">
        <h1 className="highlethead">Spotlight</h1>
      </div>

      <br />
      <br />
      <br />
      <div className="highlets-main">
        <div className="box">
          <span style={{ "--i": 1 }}>
            <img src={require("../../assets/ed.jpeg")} alt="" />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={require("../../assets/ideathon.jpg")} alt="" />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={require("../../assets/marathon.jpg")} alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <img src={require("../../assets/ted.jpg")} alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <img src={require("../../assets/tedgrp.jpg")} alt="" />
          </span>
          <span style={{ "--i": 6 }}>
            <img src={require("../../assets/wed.jpg")} alt="" />
          </span>
          <span style={{ "--i": 7 }}>
            <img src={require("../../assets/hack.jpg")} alt="" />
          </span>
          <span style={{ "--i": 8 }}>
            <img src={require("../../assets/techtalk.jpg")} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlets;
