import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Textfit } from "react-textfit";
import SocialLinks from "./SocialLinks";
import { siteMetadata } from "../../gatsby-config";

class Banner extends Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <Textfit mode="single">
              I'm {siteMetadata.author}.
            </Textfit>
          </h1>
          <h3>
            {this.props.banner} Learn more
            <a className="smoothscroll" href="#about">
              {" "}
              about me
            </a>.
          </h3>
          <hr />
          <SocialLinks />
        </div>
      </div>
    );
  }
}

export default connect((state) => (state))(Banner);
