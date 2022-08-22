import React, { Component } from "react";

class InvoiceForm extends Component {
  state = {};
  render() {
    return (
      <form className="d-flex flex-wrap align-items-center iranSansFont">
        <div className="d-flex">
          <div>
            <label className="ms-1 iranSansFont" for="">
              سال :
            </label>
            <select className="rounded me-3 InputsDesign" id="" name="" form="">
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
          <div>
            <label className="ms-1 me-3 iranSansFont">
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
          <label className="ms-1 me-3 iranSansFont ">
            فایل (فایل را با فرمت zip فشرده کنید) :
          </label>
          <input type={"file"} className="rounded chooseFileDesign"></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="align-items-center me-3 ms-3 iranSansFont">
            ارسال پیامک به کاربران :
          </label>
          <input className="align-items-center" type={"checkbox"}></input>
        </div>
        <div className="d-flex align-items-center">
          <button className="buttonDesign btn-success me-5">
            بارگذاری فیش حقوقی
          </button>
          {this.props.children}
        </div>
      </form>
    );
  }
}

export default InvoiceForm;
