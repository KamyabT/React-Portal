import React, { Component } from "react";

class NewUserForm extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <form>
            <div className={this.props.design}>
              <div className="form-group">
                <label className="iranSansFont">نام: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">نام خانوادگی: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">کد ملی: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">شماره پرسنلی: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">نقش کاربری: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">شماره تماس: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">رمز عبور</label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">وضعیت</label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label className="iranSansFont">ارسال پیامک فیش حقوقی: </label>
                <input type={"email"} className="iranSansFont"></input>
              </div>
              <div className="form-group">
                <label></label>
                <input type={"submit"} className="btn-outline-success"></input>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NewUserForm;
