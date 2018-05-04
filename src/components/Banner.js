import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textfit } from 'react-textfit'
import SocialLinks from './SocialLinks'
import { siteMetadata } from '../../gatsby-config'

class Banner extends Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <Textfit mode="multi">
            <h1>I'm {siteMetadata.author}.</h1>
            <h3>
              {this.props.banner} Learn more
              <a className="smoothscroll" href="#about">
                {' '}
                about me
              </a>.
            </h3>
          </Textfit>
          <hr />
          <SocialLinks />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ banner: state.banner })

export default connect(mapStateToProps)(Banner)
