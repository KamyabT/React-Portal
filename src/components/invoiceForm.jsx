import React, { Component } from "react";

class InvoiceForm extends Component {
  state = {};
  render() {
    return (
      <form className="d-flex align-items-center">
        <div className="d-flex">
          <div>
            <label className="ms-1 iranSansFont" for="">
              سال :
            </label>
            <select className="rounded me-3 InputsDesign" id="" name="" form="">
              <option>1401</option>
              <option>1400</option>
              <option>1399</option>
              <option>1398</option>
              <option>1397</option>
              <option>1396</option>
            </select>
          </div>
          <div>
            <label className="ms-1 me-3 iranSansFont" for="">
              ماه :
            </label>
            <select className="rounded me-2 InputsDesign" id="" name="" form="">
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
        </div>
        <div>
          <label className="ms-1 me-3 iranSansFont" for="">
            فایل (فایل را با فرمت zip فشرده کنید) :
          </label>
          <input type={"file"} className="rounded"></input>
        </div>
        <div>
          <label
            className="d-flex align-items-center me-3 ms-3 iranSansFont"
            for=""
          >
            ارسال پیامک به کاربران :
          </label>
          <input
            className="d-flex align-items-center"
            type={"checkbox"}
          ></input>
        </div>
        <div>
          <button className="buttonDesign btn-success me-3">Submit</button>
          {this.props.children}
        </div>
      </form>
    );
  }
}

export default InvoiceForm;
