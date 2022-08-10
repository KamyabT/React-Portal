import React, { Component } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

class InvoiceRecords extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.id}</td>
        <td className="text-center">{this.props.arYear}</td>
        <td className="text-center">{this.props.arMonth}</td>
        <td className="text-center">{this.props.arTotal}</td>
        <td className="text-center">{this.props.arConfirmed}</td>
        <td className="text-center">{this.props.arStatus}</td>
        <td className="text-center">
          <FaTrash size="22px" color="#cc2a02" />
        </td>
      </tr>
    );
  }
}

export default InvoiceRecords;
