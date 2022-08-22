import React, { Component } from "react";
import MainContent from "./mainContent";
import Navbar from "./navbar";
import NewUserForm from "./newUserForm";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";

class CreateUser extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader title={"افزودن کاربر جدید"} />
        <MainContent>
          <NewUserForm design={"d-flex flex-wrap newUserDesignPage"} />
        </MainContent>
      </>
    );
  }
}

export default CreateUser;
