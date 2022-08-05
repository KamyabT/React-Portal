import React, { Component } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";

class UserRecord extends Component {
  state = {};

  getUserStatus() {
    if (this.props.userStatus === true) return "فعال";
    return "غیرفعال";
  }

  render() {
    return (
      <tr>
        <td className="text-center">{this.props.id}</td>
        <td className="text-center">{this.props.personelid}</td>
        <td className="text-center">{this.props.fuName}</td>
        <td className="text-center">{this.getUserStatus()}</td>
        <td className="text-center">{this.props.nationalID}</td>
        <td className="text-center">{this.props.phone}</td>
        <td className="text-center">
          <div class="usersListDesign d-flex justify-content-center form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              for="flexSwitchCheckDefault"
            ></label>
          </div>
        </td>
        <td className="text-center">
          <Link to="/invoiceArchives">
            <FaFileInvoiceDollar size="22px" color="#69b802" />
          </Link>
        </td>
        <td className="text-center">
          <Link to="/createUser">
            <FaUserEdit size="22px" color="#cf8b04" />
          </Link>
        </td>
        <td className="text-center">
          <Link to="/createUser">
            <FaUserMinus size="22px" color="#cc2a02" />
          </Link>
        </td>
      </tr>
    );
  }
}

export default UserRecord;
