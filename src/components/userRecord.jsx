import React, { Component } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";

class UserRecord extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.id}</td>
        <td className="text-center">{this.props.personelid}</td>
        <td className="text-center">{this.props.fuName}</td>
        <td className="text-center">{this.props.userStatus}</td>
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
          <FaFileInvoiceDollar size="22px" color="#69b802" />
        </td>
        <td className="text-center">
          <FaUserEdit size="22px" />
        </td>
        <td className="text-center">
          <FaUserMinus size="22px" color="#cc2a02" />
        </td>
      </tr>
    );
  }
}

export default UserRecord;
