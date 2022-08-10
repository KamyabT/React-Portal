import React, { Component } from "react";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <section className="d-flex align-items-center mt-3 p-4 rounded pageHeaderDesign">
        <div className="d-flex">
          <h3 className="iranSansBoldFont m-0">{this.props.value}</h3>
        </div>
      </section>
    );
  }
}

export default PageHeader;
