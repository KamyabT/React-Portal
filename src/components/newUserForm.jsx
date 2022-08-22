import React, { Component } from "react";

class NewUserForm extends Component {
  state = {
    firstName: "0",
    lastName: "00",
    requestedUser: this.props.requestedUser,
  };

  inputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.requestedUser);
  };

  render() {
    // console.log(this.state.requestedUser);
    return (
      <>
        <div>
          <form>
            <div className={this.props.design}>
              <div className="form-group ms-2">
                <label className="iranSansFont">نام: </label>
                <input
                  // value={this.state?.requestedUser.name ?? ""}
                  value={this.state.firstName}
                  onChange={this.inputChange}
                  type={"text"}
                  className="iranSansFont p-1"
                  name="firstName"
                ></input>
              </div>
              <div className="form-group ms-2">
                <label className="iranSansFont">نام خانوادگی: </label>
                <input
                  // value={this.state?.requestedUser.name ?? ""}
                  value={this.state.lastName}
                  type={"text"}
                  onChange={this.inputChange}
                  className="iranSansFont p-1"
                  name="lastName"
                ></input>
              </div>
              <div className="form-group ms-2">
                <label className="iranSansFont">کد ملی: </label>
                <input
                  // value={this.state?.requestedUser.NID}
                  type={"number"}
                  className="iranSansFont p-1"
                ></input>
              </div>
              <div className="form-group ms-2">
                <label className="iranSansFont">شماره پرسنلی: </label>
                <input
                  // value={this.state?.requestedUser.personel}
                  type={"number"}
                  className="iranSansFont p-1"
                ></input>
              </div>
              <div className="form-group d-flex align-items-center ms-2">
                <label className="iranSansFont" htmlFor="">
                  نقش کاربری:{" "}
                </label>
                <select
                  className="rounded me-2 InputsDesign iranSansFont p-1"
                  id=""
                  name=""
                  form=""
                >
                  <option>مدیر کل</option>
                  <option>مدیر کاربران</option>
                  <option>مسئول فیش حقوقی</option>
                  <option>مسئول پنل پیامکی</option>
                  <option>کارمند</option>
                </select>
              </div>
              <div className="form-group ms-2">
                <label className="iranSansFont">شماره تماس: </label>
                <input
                  // value={this.state?.requestedUser.phone}
                  type={"email"}
                  className="iranSansFont p-1"
                ></input>
              </div>
              <div className="form-group ms-2">
                <label className="iranSansFont">رمز عبور</label>
                <input type={"password"} className="iranSansFont p-1"></input>
              </div>
              <div className="d-flex align-items-center form-group form-check form-switch ms-4">
                <label className="iranSansFont">وضعیت: </label>
                <input
                  className="form-check-input p-1"
                  type={"checkbox"}
                  role="switch"
                  id="flexSwitchCheckDefault"
                  // checked={
                  //   this.state.requestedUser.userstatus ? "true" : "false"
                  // }
                ></input>
              </div>
              <div className="form-group d-flex align-items-center ms-4">
                <label className="iranSansFont">ارسال پیامک فیش حقوقی: </label>
                <input type={"checkbox"} className="iranSansFont p-1"></input>
              </div>
              <div className="form-group ms-2">
                <label></label>
                <input
                  type={"submit"}
                  value={"ثبت کاربر"}
                  className="btn-outline-success iranSansFont p-1 px-4"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NewUserForm;
