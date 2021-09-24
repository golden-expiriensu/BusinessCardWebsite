import React, { Component } from "react";
import SampleCarousel from "./SampleCarousel";
import { SliderData } from "./CarouselData/SC/TxtP";
import { Link, Element } from "react-scroll";

export class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="d-flex flex-column p-2 mb-2 text-center">
          <h2 className="display-3">Content:</h2>
          <div class="d-flex flex-column align-items-center mw-50 mb-3">
            <Link className="m-2 btn btn-info" to="CSharp" smooth={true}>
              <h4>C# project</h4>
            </Link>
            <Link className="m-2 btn btn-info" to="Web" smooth={true}>
              <h4>Web project</h4>
            </Link>
          </div>
        </div>
        <Element name="CSharp">
          <this.CSharp />
        </Element>
        <Element name="Web">
          <h1 className="m-2 text-center display-1 border-top">Web projects</h1>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt officia asperiores a voluptas blanditiis tenetur ab accusamus
            autem totam quod dicta facilis ipsam alias animi iure nulla
            similique, aliquam sit excepturi quibusdam accusantium explicabo,
            repudiandae saepe? Soluta minus, vero magni voluptas excepturi modi
            ducimus blanditiis illum qui! Quasi iste praesentium earum
            architecto, animi nulla porro, quia delectus inventore eum fugit
            fugiat eos quo ratione nam error perspiciatis doloribus, laboriosam
            harum impedit libero. Id suscipit dolorem tenetur consequuntur
            laudantium nisi ratione veritatis dolores fugiat non iusto impedit
            quae distinctio debitis illum perferendis dignissimos quaerat
            pariatur optio enim, recusandae a quam? Adipisci amet suscipit ut
            iure cum eaque fugit odio voluptates. Pariatur delectus amet ipsam
            corporis nisi provident molestiae dolores, saepe eaque temporibus
            quaerat possimus natus, distinctio alias quia molestias, repellat
            autem exercitationem! Ex consequuntur tenetur ea, enim, similique
            fuga voluptate libero temporibus laborum inventore magni dignissimos
            modi dolore quia! Inventore magnam ut eos perspiciatis pariatur
            incidunt officiis id ad, quidem dolor quae, aliquam alias eum nobis
            a qui? Perspiciatis nihil quisquam adipisci quas placeat facere
            optio provident totam tenetur possimus, harum est dignissimos
            voluptatum odio sit quae odit? Hic enim omnis, explicabo, iusto
            ducimus quia ab ea nemo totam, architecto vel. Ipsum maiores unde
            saepe dolore maxime suscipit, minima accusamus at dolor quod quos
            nesciunt culpa ullam commodi impedit, iusto nobis ipsam. Repellat
            veritatis recusandae delectus impedit! Est vitae quisquam saepe
            dignissimos corrupti doloremque quaerat architecto, natus, iusto
            ratione nesciunt! Non assumenda explicabo laborum? In qui repellat
            magnam cumque tempore atque non, fuga iste odio eius, expedita
            similique reprehenderit neque nobis sapiente vero, harum quia fugiat
            rem voluptatibus aut? Odio beatae aliquid, possimus corporis sunt
            quod odit suscipit at expedita enim exercitationem rem. Reiciendis
            voluptatem porro inventore provident! Dolores numquam ut pariatur,
            quae iusto eligendi explicabo quia consectetur? Ut quisquam minus
            natus aut maxime atque quasi quo officiis numquam distinctio
            quibusdam ad, nam minima? Iste, nesciunt saepe error earum corrupti
            incidunt quod impedit quibusdam eius, accusamus enim! Similique quae
            facilis veniam voluptas numquam mollitia, quas minus deserunt culpa
            iusto blanditiis dolorem! Eum labore deleniti consequuntur
            reprehenderit nobis quidem quo magni, atque ducimus corrupti,
            nesciunt quia doloremque veniam dignissimos velit dolore sapiente
            suscipit obcaecati ratione. Velit ipsum voluptatum neque vero enim
            repellendus sint porro inventore ducimus perferendis laudantium ad
            autem nihil necessitatibus fugit vitae doloribus quo aperiam, quod
            animi numquam. Repudiandae aspernatur exercitationem nesciunt nemo
            aliquam molestiae temporibus, facere esse illo.
          </div>
        </Element>
      </div>
    );
  }

  CSharp() {
    return (
      <div className="lead">
        <h1 className="m-2 mb-3 text-center p-2 display-1 border-top">C# projects</h1>
        <div class="d-flex flex-column align-items-center mw-50 mb-3">
          <Link className="m-2 btn btn-info" to="TxtParser" smooth={true}>
            <h4>Txt parser</h4>
          </Link>
          <Link className="m-2 btn btn-info" to="Web" smooth={true}>
            <h4>Web project</h4>
          </Link>
        </div>
        <Element name="TxtParser">
          <h2 className="m-2 text-center display-4 border-top">Txt parser</h2>
          <p className="m-2">
            Converts txt file with records: Name, RequestsPerHours, HoursNumber,
            SomeInfo, to compressed txt file: Name, RequestsPerHours,
            HoursNumber, TotalRequestsNumber, SomeInfo. Records with the same
            name regards as records of the same person.
          </p>
          <h5 className="m-2 p-2 text-center">
            Check the example and main code blocks below:
          </h5>
          <div class="row mb-2 border-top border-bottom">
            <p className="p-1 border rounded offset-md-1 col-md-3 col-sm-4 col-xs-12">
              John 1800 3 "xyo"
              <br />Karl 900 1 "idp"
              <br />АнJackтон 3200 14 "rtr"
              <br />John 100 9 "xyo"
              <br />Karl 1400 11 "idp"
              <br />Jack 4400 2 "rtr"
              <br />Karl 800 9 "idp"
            </p>
            <p className="align-self-center p-2 col-md-4 col-sm-4 col-xs-12 text-center">
              Will be converted to
            </p>
            <p className="p-1 border rounded col-md-3 col-sm-4 col-xs-12">
              Jack 7600 16 53600 "rtr"
              <br />Karl 3100 21 23500 "idp"
              <br />John 1900 12 6300 "xyo"
            </p>
          </div>
          <SampleCarousel slides={SliderData} height="90vh" />
          <div className="p-3 text-center">
            <h2>Full code: <a href="https://github.com/golden-expiriensu/TxtParser">GitHub</a></h2>
          </div>
        </Element>
      </div>
    );
  }
}
