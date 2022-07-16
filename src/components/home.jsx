import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader />
      </>
    );
  }
}

export default Home;
