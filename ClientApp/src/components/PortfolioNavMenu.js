import React, { Component } from "react";
import { NavBlock } from "./Portfolio";

export class PortfolioNavMenu extends Component {
  static displayName = PortfolioNavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="fixed-top d-none d-xl-block">
        {this.state.collapsed
          ? <div>
              <button className="btn btn-info m-2" onClick={this.toggleNavbar}>
                Content
              </button>
            </div>
          : <div
              className="position-absolute mt-5 pt-5"
              style={{ left: 0 }}
            >
              <NavBlock isNavBar={true} onclick={this.toggleNavbar} />
            </div>}
      </div>
    );
  }
}
