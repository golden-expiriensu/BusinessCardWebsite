import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 className="display-3 text-center mb-3 pb-3 border-bottom border-primary">Menkin Danil Olegovich</h1>
        <div className="mb-3 pb-3 border-bottom border-primary">
            <a href="tel:961-981-4428"><h2>Phone: +7 (961) 981-44-28</h2></a>
            <a href="mailto: gundari_dan@bk.ru">
              <img
                style={{ width: 100, height: 100 }}
                src={window.location.origin + "/Images/Email.png"}
                alt="Email"
              />
            </a>
        </div>
        <this.TomskOnMap />
      </div>
    );
  }

  TomskOnMap() {
    const center = [56.489454, 84.8685494];
    return (
      <div
        className="rounded border border-dark mb-2"
        style={{ height: "80vh", width: "100%" }}
      >
        <GoogleMapReact defaultCenter={center} zoom={10}>
          <Wrapper lat={center[0]} lng={center[1]} text="Tomsk" />
        </GoogleMapReact>
      </div>
    );
  }
}

function Wrapper() {
  return <div />;
}
