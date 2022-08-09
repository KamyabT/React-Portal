import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import UploadForm from "./uploadInvoice";
import SmsPanelForm from "./smsPanelForm";
import InvoiceForm from "./invoiceForm";
import { Link } from "react-router-dom";

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
            <p className="iranSansBoldFont mb-0">وضعیت فیش های حقوقی</p>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="iranSansFont">آخرین فیش حقوقی آپلود شده: </div>
              <div className="iranSansFont">تیر ماه 1401</div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <button className="btn btn-success iranSansFont">
                  آرشیو فیش حقوقی
                </button>
              </div>
              <div>
                <button className="btn btn-success iranSansFont">
                  بارگذاری فیش حقوقی جدید
                </button>
              </div>
            </div>
          </div>

          <div className="halfMainContentDesign d-flex flex-column">
            <p className="iranSansBoldFont mb-0">وضعیت کاربران: </p>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="iranSansFont d-flex">
                <span>تعداد کاربران ثبت شده: </span>
                <span className="me-4">431 نفر</span>
              </div>
              <div className="iranSansFont d-flex justify-content-between">
                <span>تعداد کاربران فعال: </span>
                <span className="me-4">430 نفر</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <Link to="/usersList">
                  <button className="btn btn-success iranSansFont">
                    لیست کاربران
                  </button>
                </Link>
              </div>
              <div>
                <button className="btn btn-success iranSansFont">
                  افزودن کاربر جدید
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
