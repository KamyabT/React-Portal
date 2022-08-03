import React, { Component } from "react";
import InvoiceForm from "./invoiceForm";

class UploadForm extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>
          برای بارگذاری فیش حقوقی، ابتدا فایل فیش حقوقی را از قسمت انتخاب فایل ،
          انتخاب کنید سپس پس از مشخص کردن ماه و سال، دکمه بارگذاری را کلیک کنید
        </p>
        <InvoiceForm />
      </div>
    );
  }
}

export default UploadForm;
