import React, { Component } from "react";

class SmsPanelForm extends Component {
  state = {};
  render() {
    return (
      <form className="">
        <p className="iranSansFont">
          توجه ! پیامک ارسالی شما به صورت پیش فرض برای همگی کاربران پرتال ارسال
          خواهد شد!
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
    );
  }
}

export default SmsPanelForm;
