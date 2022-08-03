import React, { Component } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";

class NewUser extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader />
        <MainContent>

        </MainContent>
      </>
    );
  }
}

export default NewUser;
