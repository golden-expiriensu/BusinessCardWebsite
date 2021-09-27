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
            <ul className="navbar-nav flex-grow mx-auto text-center">
              <NavItem>
                <NavLink tag={Link} className="text-info" to="/portfolio">
                  <this.NavTitle text={"Portfolio"} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-info" to="/about-me">
                  <this.NavTitle text={"About me"} />
                </NavLink>
              </NavItem>
            </ul>
          </Container>
        </Navbar>
        <div className="mb-2" >
          <SampleCarousel slides={SliderData} height="90vh" />
        </div>
      </div>
    );
  }

  NavTitle(props){
    return (
      <div>
        <h3 className="display-3 d-sm-none">{props.text}</h3>
        <h3 className="display-2 d-none d-sm-block d-md-none">{props.text}</h3>
        <h3 className="display-1 d-none d-md-block">{props.text}</h3>
      </div>
    )
  }
}
