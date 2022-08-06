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
          <div className="halfMainContentDesign d-flex flex-column">
            <p className="iranSansFont IRANSansBold">وضعیت فیش های حقوقی</p>
            <div className="d-flex justify-content-between">
              <div className="iranSansFont">آخرین فیش حقوقی آپلود شده: </div>
              <div className="iranSansFont">تیر ماه 1401</div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <button>upload new invoice</button>
              </div>
              <div>
                <button>invoice archives</button>
              </div>
            </div>
          </div>
          <div className="halfMainContentDesign d-flex flex-column">
            <p className="iranSansFont IRANSansBold">users status</p>
            <div className="d-flex justify-content-between">
              <div className="iranSansFont">users count</div>
              <div className="iranSansFont">330</div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <button>upload new invoice</button>
              </div>
              <div>
                <button>invoice archives</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
