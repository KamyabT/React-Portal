import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import UploadForm from "./uploadInvoice";
import SmsPanelForm from "./smsPanelForm";
import InvoiceForm from "./invoiceForm";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader value={"داشبورد"} />
        <section className="d-flex">
          <div className="halfMainContentDesign">
            <InvoiceForm />
          </div>
          <div className="halfMainContentDesign">
            <SmsPanelForm />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
