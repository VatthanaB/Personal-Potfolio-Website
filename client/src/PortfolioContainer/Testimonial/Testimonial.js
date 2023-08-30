import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Testimonial.css";

import dog from "../../../src/img/Testimonial/dog.jpg";
import plant from "../../../src/img/Testimonial/plant.jpg";
import cat from "../../../src/img/Testimonial/cat.jpg";
import hamster from "../../../src/img/Testimonial/hamster.jpg";

import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartspeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="row">
          <OwlCarousel
            className="owl-carousel"
            id="testimonial-carousel"
            {...options}
          >
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Meow-mazing! I never thought a website could be this
                    purrfect. I give it two paws up!
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars lis-unstyled">
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>

                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star-half-alt" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={cat} alt="client photo"></img>
                  <h5>Mr. Whiskers </h5>
                  <p>CFO Tiger&co</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Woofinitely the best website ever! I'd trade all my treats
                    for another visit.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars lis-unstyled">
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>

                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star-half-alt" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={dog} alt="client photo"></img>
                  <h5>Sir Barksalot</h5>
                  <p>CEO Woofy</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    As a non-tech-savvy fern, I'm leafing through the virtual
                    jungle thanks to this website. It's like plant Wi-Fi!
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars lis-unstyled">
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star-half-alt" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={plant} alt="client photo"></img>
                  <h5>Bob the Houseplant</h5>
                  <p>Full Time Plant</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Vatthana is a talented fullstack developer! Transformed our
                    vision into an amazing website. Fast, detail-oriented, and a
                    great communicator. Highly recommend!
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars lis-unstyled">
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star" />
                    </li>

                    <li>
                      <i className=" fa fa-star" />
                    </li>
                    <li>
                      <i className=" fa fa-star-half-alt" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={hamster} alt="client photo"></img>
                  <h5>Jane Doe</h5>
                  <p>CFO Some Company</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
