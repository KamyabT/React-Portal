import React, { Component } from "react";
// import PageHeader from "./pageHeader";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <section
        className="d-flex align-items-center mt-3 p-4 rounded mainContentDesign"
      >
        {this.props.children}
      </section>
    );
  }
}

export default MainContent;
