import React, { Component } from "react";
import Logo from "../images/CompanyLogo.png";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <section className="mainLoginSectionDesign">
        <div className="formBg">
          <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <div className="mb-4 mt-2">
              <img src={Logo} className="logoDesign" alt="" />
            </div>
            <form action="#">
              <div className="d-flex flex-column">
                <label className="iranSansFont text-white mb-2">
                  نام کاربری{" "}
                </label>
                <input
                  className="px-2 py-2 iranSansFont"
                  type={"email"}
                  placeholder={"کد ملی / شماره تماس"}
                />
              </div>
              <div>
                <input type={"password"} />
              </div>
              <div className="d-flex justify-content-center">
                <input
                  className="iranSansFont px-2 py-2 mt-2"
                  type={"number"}
                  placeholder={"کد امنیتی ... "}
                />
              </div>
              <div>
                <button
                  className="form-control btn btn-primary submit px-3 mt-4 iranSansFont"
                  type={"submit"}
                  value={""}
                >
                  ورود{" "}
                </button>
              </div>
            </form>
          </div>
          <div>{/* <h5>555555</h5> */}</div>
        </div>
      </section>
    );
  }
}

export default LoginForm;

// <section class="vh-100" style="background-color: #508bfc;">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//         <div class="card shadow-2-strong" style="border-radius: 1rem;">
//           <div class="card-body p-5 text-center">

//             <h3 class="mb-5">Sign in</h3>

//             <div class="form-outline mb-4">
//               <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
//               <label class="form-label" for="typeEmailX-2">Email</label>
//             </div>

//             <div class="form-outline mb-4">
//               <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
//               <label class="form-label" for="typePasswordX-2">Password</label>
//             </div>

//             <!-- Checkbox -->
//             <div class="form-check d-flex justify-content-start mb-4">
//               <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
//               <label class="form-check-label" for="form1Example3"> Remember password </label>
//             </div>

//             <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

//             <hr class="my-4">

//             <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
//               type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
//             <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
//               type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="vh-100" style={{ backgroundColor: "#508bfc;" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//               <div
//                 class="card shadow-2-strong"
//                 style={{ borderRadius: "1rem;" }}
//               >
//                 <div className="card-body p-5 text-center">
//                   <h3 className="mb-5">Sign in</h3>
//                   <div className="form-outline mb-4">
//                     <input type={"email"} />
//                     <label className="form-label" htmlFor="">
//                       Email
//                     </label>
//                   </div>
//                   <div className="form-outline mb-4">
//                     <input
//                       className="form-control form-control-lg"
//                       type={"password"}
//                     />
//                     <label className="form-label" htmlFor="">
//                       Password
//                     </label>
//                   </div>
//                   <div className="form-check d-flex justify-content-start mb-4">
//                     <input
//                       class="form-check-input"
//                       type={"checkbox"}
//                       // value=""
//                       id="form1Example3"
//                     />
//                     <label className="form-check-label" htmlfor="form1Example3">
//                       {" "}
//                       Remember password{" "}
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
