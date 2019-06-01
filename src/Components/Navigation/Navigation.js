import React, { Component } from "react";
import logo from "../../rsc/svg/logo-horizontal.svg"
import userIcon from "../../rsc/svg/user-icon.svg";
import './Navigation.css';

export default class Banner extends Component {
  render() {
      return (
        <div style={{ height: "60px", display: "flex", justifyContent: "space-between"}}>
          <div align="left" className="logoContainer">
            <a href="https://deliveroo.co.uk/">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <a href="https://deliveroo.co.uk/">
              <img src={require("../../rsc/logo.png")} alt="small logo" className="smallLogo"/>
            </a>
          </div>
          <div align="right" className="userInfoContainer">
            <img src={userIcon} alt="user icon" />
            <div className="userName">Jane Smith</div>
          </div>
        </div>
      );
  }
}
