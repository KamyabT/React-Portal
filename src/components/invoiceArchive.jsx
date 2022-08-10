import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PageHeader from "./pageHeader";

class InvoiceArchive extends Component {
  state = {
    num: 10,
  };
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader value={"آرشیو فیش حقوقی"} />
        <section className="mainContentDesign justify-content-center">
          <form className="d-flex align-items-center formButtonDesign">
            <div className="form-group ms-1">
              <label for="">سال :</label>
              <select
                className="rounded me-2 InputsDesign iranSansFont"
                id=""
                name=""
                form=""
              >
                <option>1403</option>
                <option>1402</option>
                <option>1401</option>
                <option>1400</option>
                <option>1399</option>
                <option>1398</option>
                <option>1397</option>
                <option>1396</option>
              </select>
            </div>
            <div className="form-group mx-1">
              <label for="">از ماه :</label>
              <select
                className="rounded me-2 InputsDesign iranSansFont"
                id=""
                name=""
                form=""
              >
                <option>فروردین</option>
                <option>اردیبهشت</option>
                <option>خرداد</option>
                <option>تیر</option>
                <option>مرداد</option>
                <option>شهریور</option>
                <option>مهر</option>
                <option>آبان</option>
                <option>آذر</option>
                <option>دی</option>
                <option>بهمن</option>
                <option>اسفند</option>
              </select>
            </div>
            <div className="form-group mx-1">
              <label for="">تا ماه :</label>
              <select
                className="rounded me-2 InputsDesign iranSansFont"
                id=""
                name=""
                form=""
              >
                <option>فروردین</option>
                <option>اردیبهشت</option>
                <option>خرداد</option>
                <option>تیر</option>
                <option>مرداد</option>
                <option>شهریور</option>
                <option>مهر</option>
                <option>آبان</option>
                <option>آذر</option>
                <option>دی</option>
                <option>بهمن</option>
                <option>اسفند</option>
              </select>
            </div>
            <button
              type="submit"
              className="buttonDesign btn-success iranSansFont"
            >
              دریافت اطلاعات
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default InvoiceArchive;
