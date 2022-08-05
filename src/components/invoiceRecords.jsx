import React, { Component } from "react";

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
        <td className="text-center">{this.props.arRemove}</td>
      </tr>
    );
  }
}

export default InvoiceRecords;
