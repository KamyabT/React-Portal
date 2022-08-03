import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white sidebarDesign"
        style={{ width: "280px" }}
      >
        <a href="#"></a>
        <ul>
          <li className="nav-link iranSansFont">
            <Link
              to="/"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaTachometerAlt size="18px" className="ms-2" />
              داشبورد
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/usersList"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaUsers size="18px" className="ms-2" />
              کاربران
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/invoiceArchives"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaFileInvoiceDollar size="18px" className="ms-2" />
              آرشیو فیش حقوقی
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/newInvoice"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaFileUpload size="18px" className="ms-2" />
              بارگذاری فیش حقوقی
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/createUser"
              className="text-white d-flex align-items-center"
              href="/createUser"
            >
              <FaUserEdit size="18px" className="ms-2" />
              ایجاد کاربر جدید
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/Smspanel"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaSms size="18px" className="ms-2" />
              پنل پیامکی
            </Link>
          </li>
          <li className="nav-link iranSansFont">
            <Link
              to="/logOut"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaSignOutAlt size="18px" className="ms-2" />
              خروج
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
