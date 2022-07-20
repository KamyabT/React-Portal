import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PageHeader from "./pageHeader";

class InvoiceArchive extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader />
        <section className="mainContentDesign justify-content-center">
          <form className="d-flex align-items-center formButtonDesign">
            <div className="form-group ms-1">
              <label for="">Year :</label>
              <select className="rounded me-2" id="" name="" form="">
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>219</option>
                <option>2018</option>
                <option>2017</option>
                <option>July</option>
              </select>
            </div>
            <div className="form-group mx-1">
              <label for="">From Month :</label>
              <select className="rounded me-2" id="" name="" form="">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octobor</option>
                <option>Novomber</option>
                <option>December</option>
              </select>
            </div>
            <div className="form-group mx-1">
              <label for="">To Month :</label>
              <select className="rounded me-2" id="" name="" form="">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octobor</option>
                <option>Novomber</option>
                <option>December</option>
              </select>
            </div>
            <button type="submit" className="buttonDesign btn-success">
              Get Data
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default InvoiceArchive;
