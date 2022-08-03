import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PageHeader from "./pageHeader";
import UploadForm from "./uploadInvoice";
import MainContent from "./mainContent";

class NewInvoice extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader value={"New Invoice"} />
        <MainContent>
          <UploadForm />
        </MainContent>
      </>
    );
  }
}

export default NewInvoice;
