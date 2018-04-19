import React from "react";
import Waypoint from 'react-waypoint';
import Slider from "react-slick";

const settings = {
  dots: true,
  dotsClass: 'testimonial-dots',
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1
};

const Testimonials = ({ changePosition, changeNavigationToDark, data }) => (
  <Waypoint
    onEnter={() => {
      changePosition('testimonials')
      changeNavigationToDark(true)
    }}
  >
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Recommendations from LinkedIn</span></h1>
          </div>
          <div className="ten columns">
            <ul>
              <Slider {...settings}>
                {data.edges.map(({node}) => (
                  <li>
                    <blockquote>
                      <p> {node.detail.detail} </p>
                      <cite> {node.givenBy}, {`${node.givenByPosition} @ ${node.givenByCompany}`} </cite>
                    </blockquote>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Waypoint>
);

export default Testimonials;
