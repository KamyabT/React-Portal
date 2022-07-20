import React, { Component } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";


class UsersList extends Component {
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

export default UsersList;
