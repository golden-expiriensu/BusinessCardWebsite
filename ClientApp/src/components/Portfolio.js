import React, { Component } from "react";
import SampleCarousel from "./SampleCarousel";
import { SliderData as SCTxtPSliderData } from "./CarouselData/SC/TxtP";
import { SliderData as SCFiguresSliderData } from "./CarouselData/SC/Figures";
import { SliderData as WebRessaSliderData } from "./CarouselData/Web/Ressa";
import { SliderData as UHarvestSliderData } from "./CarouselData/Unity/Harvest";
import { Link, Element } from "react-scroll";
import { ArcherContainer, ArcherElement } from "react-archer";
import { MiniTitleWithLinkOnDarkBG as MiniTitleWithLink } from "./MiniTitleWithLinkOnDarkBG";
import { PortfolioNavMenu } from "./PortfolioNavMenu";
import { MemoryGame } from "./MemoryGame";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.Unity = this.Unity.bind(this);
    this.Harvest = this.Harvest.bind(this);
    this.Memory = this.Memory.bind(this);
    this.CSharp = this.CSharp.bind(this);
    this.TxtParser = this.TxtParser.bind(this);
    this.TxtBeforeAfter = this.TxtBeforeAfter.bind(this);
    this.Figures = this.Figures.bind(this);
    this.WebProjects = this.WebProjects.bind(this);
    this.Ressa = this.Ressa.bind(this);
    this.ThisSite = this.ThisSite.bind(this);
    this.AnotherProjects = this.AnotherProjects.bind(this);
  }

  BigCategoryHeader(props) {
    return (
      <h1 className="m-2 mb-3 text-center p-2 display-1 border-top">
        {props.text}
      </h1>
    );
  }

  ConcreteProjectHeader(props) {
    return (
      <h2 className="m-2 text-center display-4 border-top">
        {props.text}
      </h2>
    );
  }

  FullCodeGitHubLink(props) {
    return (
      <div className="p-3 text-center">
        <h2>
          Full code:{" "}
          <a className="text-info" href={props.href}>
            GitHub
          </a>
        </h2>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid lead">
        <PortfolioNavMenu />
        <div className="d-xl-none mx-auto col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <NavBlock isNavBar={false} />
        </div>
        <Element name="Unity">
          <this.Unity />
        </Element>
        <Element name="CSharp">
          <this.CSharp />
        </Element>
        <Element name="Web">
          <this.WebProjects />
        </Element>
        <Element name="Another projects">
          <this.AnotherProjects />
        </Element>
      </div>
    );
  }

  Unity() {
    return (
      <div>
        <this.BigCategoryHeader text="Unity projects" />
        <div class="d-flex flex-column align-items-center mw-50 mb-3">
          <Link className="m-2 btn btn-info" to="Harvest" smooth={true}>
            <h4>Harvest</h4>
          </Link>
          <Link className="m-2 btn btn-info" to="Memory" smooth={true}>
            <h4>Memory</h4>
          </Link>
        </div>
        <Element name="Harvest">
          <this.Harvest />
        </Element>
        <Element name="Memory">
          <this.Memory />
        </Element>
      </div>
    );
  }

  Harvest() {
    return (
      <div>
        <this.ConcreteProjectHeader text="Harvest" />
        <p className="text-justify">
          A mobile game in which the player controls a tractor that collects
          crops in a maze. The goal of the game is to go through the labyrinth
          levels, while collecting the required number of points. The player
          receives points when collecting crops. Different crops give different
          points. The player also has indicators of the amount of remaining
          gasoline and the state of the tractor. Gasoline and health can be
          restored by collecting canisters and repair kits.
        </p>
        <SampleCarousel slides={UHarvestSliderData} />
        <this.FullCodeGitHubLink href="https://github.com/golden-expiriensu/Harvest" />
      </div>
    );
  }

  Memory() {
    return (
      <div>
        <this.ConcreteProjectHeader text="Memory" />
        <p>
          A game in the genre of "find the match". The player can choose the
          number of cards and the skin of the deck. In the browser version, the
          menu button is blocked, and accordingly there is no choice of skins.
          The full version of the game with skins is stored in the GitHub.
        </p>
        <h3 className="text-center text-danger">
          Below is a stripped-down version of the game
        </h3>
        <MemoryGame />
        <this.FullCodeGitHubLink text="https://github.com/golden-expiriensu/memory" />
      </div>
    );
  }

  CSharp() {
    return (
      <div>
        <this.BigCategoryHeader text={"C# projects"} />
        <div class="d-flex flex-column align-items-center mw-50 mb-3">
          <Link className="m-2 btn btn-info" to="TxtParser" smooth={true}>
            <h4>Txt parser</h4>
          </Link>
          <Link className="m-2 btn btn-info" to="Figures" smooth={true}>
            <h4>Figures library</h4>
          </Link>
        </div>
        <Element name="TxtParser">
          <this.TxtParser />
        </Element>
        <Element name="Figures">
          <this.Figures />
        </Element>
      </div>
    );
  }

  TxtParser() {
    return (
      <div>
        <this.ConcreteProjectHeader text={"Txt parser"} />
        <p className="m-2">
          Converts txt file with records: Name, RequestsPerHours, HoursNumber,
          SomeInfo, to compressed txt file: Name, RequestsPerHours, HoursNumber,
          TotalRequestsNumber, SomeInfo. The program also sorts the names
          alphabetically in the finished file. Records with the same name
          regards as records of the same person. API consist of 1 method:
          ParseTxtFile, that recieves path to file, that will be converted, and
          returns a boolean whether the file was successfully converted.
        </p>
        <h4 className="m-2 p-2 text-center text-info">
          Check the example and main code blocks below:
        </h4>
        <this.TxtBeforeAfter />
        <SampleCarousel slides={SCTxtPSliderData} height="90vh" />
        <this.FullCodeGitHubLink href="https://github.com/golden-expiriensu/TxtParser" />
      </div>
    );
  }

  TxtBeforeAfter() {
    return (
      <ArcherContainer offset={20}>
        <div className="row mb-3">
          <div className="border rounded offset-lg-1 col-lg-3 col-md-5 col-xs-12 bg-dark text-light">
            <div className="d-md-block d-sm-none d-xs-none">
              <ArcherElement
                id="txtBefore"
                relations={[
                  {
                    targetId: "txtAfter",
                    targetAnchor: "left",
                    sourceAnchor: "right"
                  }
                ]}
              >
                <div className="p-1">
                  John 1800 3 "xyo"
                  <br />Karl 900 1 "idp"
                  <br />АнJackтон 3200 14 "rtr"
                  <br />John 100 9 "xyo"
                  <br />Karl 1400 11 "idp"
                  <br />Jack 4400 2 "rtr"
                  <br />Karl 800 9 "idp"
                </div>
              </ArcherElement>
            </div>
            <div className="p-1 d-block d-md-none">
              John 1800 3 "xyo"
              <br />Karl 900 1 "idp"
              <br />АнJackтон 3200 14 "rtr"
              <br />John 100 9 "xyo"
              <br />Karl 1400 11 "idp"
              <br />Jack 4400 2 "rtr"
              <br />Karl 800 9 "idp"
            </div>
          </div>
          <span className="d-block d-md-none mx-auto">
            Will be converted to
          </span>
          <div className="border rounded offset-lg-4 offset-md-2 col-lg-3 col-md-5 col-xs-12 bg-dark text-light">
            <ArcherElement id="txtAfter">
              <div className="p-1">
                Jack 7600 16 53600 "rtr"
                <br />John 1900 12 6300 "xyo"
                <br />Karl 3100 21 23500 "idp"
              </div>
            </ArcherElement>
          </div>
        </div>
      </ArcherContainer>
    );
  }

  Figures() {
    return (
      <div>
        <this.ConcreteProjectHeader text={"Figures library"} />
        <p>
          This mini-library was created only for the test, however, thanks to
          the strategy pattern, we got a library for calculating the area of
          geometric shapes, with the ease of adding new shapes (essentially new
          strategies).
        </p>
        <SampleCarousel slides={SCFiguresSliderData} height="90vh" />
        <this.FullCodeGitHubLink href="https://github.com/golden-expiriensu/Figures" />
      </div>
    );
  }

  WebProjects() {
    return (
      <div>
        <this.BigCategoryHeader text={"Web projects"} />
        <div class="d-flex flex-column align-items-center mw-50 mb-3">
          <Link className="m-2 btn btn-info" to="Ressa" smooth={true}>
            <h4>Ressa</h4>
          </Link>
          <Link className="m-2 btn btn-info" to="This" smooth={true}>
            <h4>This website too</h4>
          </Link>
        </div>
        <Element name="Ressa">
          <this.Ressa />
        </Element>
        <Element name="This">
          <this.ThisSite />
        </Element>
      </div>
    );
  }

  Ressa() {
    return (
      <div>
        <this.ConcreteProjectHeader text="Ressa website" />
        <p>
          Company engaged in the production of tracked tractors and their
          modifications.
        </p>
        <p>
          Ressa is made with a technology stack: PHP/HTML + JQuery/JS + SASS/CSS
          + Node.js
        </p>
        <SampleCarousel slides={WebRessaSliderData} height="90vh" />
        <div className="mt-3">
          <MiniTitleWithLink
            linkHref="http://zavodgm.ru/"
            linkText="View site"
            title=""
          />
        </div>
      </div>
    );
  }

  ThisSite() {
    return (
      <div>
        <this.ConcreteProjectHeader text="This website too" />
        <p>
          This site is a business card is also my project made on the ASP.NET
          framework with React library and bootstrap framework.
        </p>
        <MiniTitleWithLink
          linkHref="https://github.com/golden-expiriensu/BusinessCardWebsite"
          linkText="GitHub"
          title="Check out the code on"
        />
      </div>
    );
  }

  AnotherProjects() {
    return (
      <div>
        <this.ConcreteProjectHeader text={"Another projects: "} />
        <MiniTitleWithLink
          linkHref="https://github.com/golden-expiriensu/"
          linkText="My GitHub"
          title=""
        />
      </div>
    );
  }
}

export function NavBlock(props) {
  var title = props.isNavBar
    ? <button className="m-2 btn btn-primary" onClick={props.onclick}>
        <h3 className="text-center">Content:</h3>
      </button>
    : <h2 className="display-3 text-center">Content</h2>;

  return (
    <div className="d-flex flex-column p-2 mb-2">
      {title}
      <div className="d-flex flex-column mb-3">
        <Link className="m-2 btn btn-info" to="Unity" smooth={true}>
          <h4>Unity projects</h4>
        </Link>
        <Link className="m-2 btn btn-info" to="CSharp" smooth={true}>
          <h4>C# projects</h4>
        </Link>
        <Link className="m-2 btn btn-info" to="Web" smooth={true}>
          <h4>Web projects</h4>
        </Link>
        <Link className="m-2 btn btn-info" to="Another projects" smooth={true}>
          <h4>Another projects</h4>
        </Link>
      </div>
    </div>
  );
}
