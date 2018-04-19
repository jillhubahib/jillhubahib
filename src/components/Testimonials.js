import React, { Component } from 'react';
import { connect } from "react-redux";
import Slider from "react-slick";
import Waypoint from "react-waypoint";
import { SET_CURRENT_NAV } from '../state/actions';

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

class Testimonials extends Component {
  handlesWaypointEnter = () => {
    this.props.dispatch({
      type: SET_CURRENT_NAV,
      payload: 'testimonials'
    })
  }

  render() {
    return (
      <Waypoint onEnter={this.handlesWaypointEnter}>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Recommendations from LinkedIn</span></h1>
              </div>
              <div className="ten columns">
                <ul>
                  <Slider {...settings}>
                    {this.props.testimonials.map(({node}) => (
                      <li key={node.givenBy} >
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
  }
}

export default connect((state) => (state))(Testimonials);
