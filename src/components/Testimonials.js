import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import Waypoint from 'react-waypoint'
import Img from 'gatsby-image'
import { setCurrentNav } from '../state/actions'

const settings = {
  dots: true,
  dotsClass: 'testimonial-dots',
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
}

class Testimonials extends Component {
  render() {
    return (
      <Waypoint
        onEnter={() => this.props.dispatch(setCurrentNav('testimonials'))}
        onLeave={() => this.props.dispatch(setCurrentNav(''))}
      >
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Recommendations from LinkedIn</span>
                </h1>
              </div>
              <div className="ten columns">
                <ul>
                  <Slider {...settings}>
                    {this.props.testimonials.map(({ node }) => (
                      <li key={node.givenBy}>
                        <blockquote>
                          <p> {node.detail.detail} </p>
                          <cite>
                            {' '}
                            {node.givenBy},{' '}
                            {`${node.givenByPosition} @ ${node.givenByCompany}`}{' '}
                          </cite>
                        </blockquote>
                      </li>
                    ))}
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
          <Img
            title="Header background"
            sizes={this.props.bgImage.sizes}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </section>
      </Waypoint>
    )
  }
}
const mapStateToProps = state => ({ testimonials: state.testimonials })

export default connect(mapStateToProps)(Testimonials)

export const query = graphql`
  fragment TestimonialFragment on ContentfulRecommendation {
    detail {
      detail
    }
    givenBy
    givenByPosition
    givenByCompany
  }
`
