import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaTachometerAlt size="18px" className="m-1" />
              Dashboard
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaUsers size="18px" className="m-1" />
              Users
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaFileInvoiceDollar size="18px" className="m-1" />
              Invoice Archive
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaFileUpload size="18px" className="m-1" />
              Upload Invoice
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaUserEdit size="18px" className="m-1" />
              Edit Users
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaSms size="18px" className="m-1" />
              SMS Dashbaord
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#"
              className="text-white d-flex align-items-center"
              href="#"
            >
              <FaSignOutAlt size="18px" className="m-1" />
              Log out
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
