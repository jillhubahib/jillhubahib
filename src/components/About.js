import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FaCloudDownload } from 'react-icons/lib/fa'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://avatars3.githubusercontent.com/u/491875?s=460&v=4"
              alt="Jill Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            {this.props.aboutMe.childMarkdownRemark && (
              <p
                dangerouslySetInnerHTML={{
                  __html: this.props.aboutMe.childMarkdownRemark.html,
                }}
              />
            )}
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Honey Jill Hubahib</span>
                  <br />
                  <span>
                    Cebu City
                    <br /> Cebu, Philippines
                  </span>
                  <br />
                  <span>jillhubahib@gmail.com</span>
                </p>
              </div>
              <div className="columns download" style={{ display: 'none' }}>
                <p>
                  <a href="#" className="button">
                    <FaCloudDownload /> Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({ aboutMe: state.aboutMe })

export default connect(mapStateToProps)(About)

export const query = graphql`
  fragment AboutMeFragment on ContentfulAboutMe {
    banner
    aboutMe {
      childMarkdownRemark {
        html
      }
    }
  }
`
