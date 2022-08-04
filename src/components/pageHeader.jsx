import React, { Component } from "react";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <section className="d-flex align-items-center mt-3 p-4 rounded pageHeaderDesign">
        <div className="d-flex">
          <h3 className="iranSansFont m-0">{this.props.value}</h3>
          {/* <h4>{this.props.usersCount}</h4> */}
        </div>
      </section>
    );
  }
}

export default PageHeader;
