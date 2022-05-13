import React, { Component } from "react";
import Image from "../images/ProfileAvatar.png";
import persianDate from "../../node_modules/persian-date/dist/persian-date.js";

class Navbar extends Component {
  state = {};

  render() {
    // const kamdate = new Date();
    // console.log(kamdate);

    return (
      <nav className="navbarbg-info p-2 navbarDesign">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <a href="" className="navbar-brand text-white iranSansFont">
              Company Portal
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column iranSansFont">
              <span className="text-white">خوش آمدید یوزر</span>
              <span className="text-white">امروز {this.formatDate()} است</span>
            </div>
            <span className="mr-3">
              <img src={Image} className="imgDesign" alt="" />
            </span>
          </div>
        </div>
      </nav>
    );
  }
  formatDate() {
    let kamdate = new persianDate().format("YYYY/MM/DD");
    return kamdate;
  }
}

export default Navbar;
