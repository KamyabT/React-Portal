import React, { Component } from "react";
import Image from "../images/loginBg.jpg";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <section className="vh-100" style={{ backgroundColor: "#508bfc;" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem;" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input type={"email"} />
                    <label className="form-label" htmlFor="">
                      Email
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      type={"password"}
                    />
                    <label className="form-label" htmlFor="">
                      Password
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      class="form-check-input"
                      type={"checkbox"}
                      // value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlfor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
