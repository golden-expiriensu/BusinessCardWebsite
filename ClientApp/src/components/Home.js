import React, { Component } from 'react';
import SampleCarousel from './SampleCarousel';
import { SliderData } from "./CarouselData/HomeCarousel"

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <SampleCarousel slides={SliderData} height="90vh" />
      </div>
    );
  }
}
