import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PageHeader from "./pageHeader";
import UploadForm from "./uploadInvoice";
import MainContent from "./mainContent";
import InvoicesList from "./invoicesList";

class NewInvoice extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader title={"بارگذاری فیش حقوقی"} />
        <MainContent>
          <UploadForm />
        </MainContent>
        <MainContent>
          <InvoicesList />
        </MainContent>
      </>
    );
  }
}

export default NewInvoice;
