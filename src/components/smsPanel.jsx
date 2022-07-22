import React, { Component } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";
// import { pageHeader } from "./pageHeader.jsx";
// import MainContent from "./mainContent.jsx";

class Smspanel extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader value={"SMS Dashboard"} />
        <section className="mainContentDesign">
          <form className="">
            <p className="iranSansFont">
              Attention! Your SMS by default is going to send to all users of
              portal
            </p>
            <div className="d-flex flex-column">
              <label for="emailInput"></label>
              <textarea
                className="iranSansFont p-2"
                placeholder="متن پیامک خود را بنویسید"
                rows="5"
                cols="20"
              ></textarea>
              <input
                type="button"
                value="ارسال"
                className="iranSansFont mt-2 p-1 btn btn-outline-success"
              />
            </div>
          </form>
        </section>


        {/* <form action="#" className="d-flex flex-column">
            <p className="iranSansFont">
              توجه! پیامک شما به صورت پیش فرض به همه کاربران موجود در پرتال
              ارسال خواهد شد.
            </p>
            <label for="emailInput"></label>
            <textarea
              className="iranSansFont p-2"
              placeholder="متن پیامک خود را بنویسید"
              rows="5"
              cols="20"
            ></textarea>
            <input
              type="button"
              value="ارسال"
              className="iranSansFont mt-2 p-1 btn btn-outline-success"
            />
          </form> */}
      </>
    );
  }
}

export default Smspanel;
