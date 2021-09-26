import React, { Component } from "react";
import { SliderData } from "./CarouselData/HomeCarousel";
import SampleCarousel from "./SampleCarousel";
import {
  Container,
  Navbar,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Navbar className="border-bottom box-shadow mb-3" light>
          <Container>
            <ul className="navbar-nav flex-grow mx-auto">
              <NavItem>
                <NavLink tag={Link} className="text-info" to="/portfolio">
                  <h3 className="display-2">Portfolio</h3>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-info" to="/about-me">
                  <h3 className="display-2">About me</h3>
                </NavLink>
              </NavItem>
            </ul>
          </Container>
        </Navbar>
        <SampleCarousel slides={SliderData} height="90vh" />
      </div>
    );
  }
}
