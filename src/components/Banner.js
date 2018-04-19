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
          <Textfit mode="single">
            <h1 className="responsive-headline">I'm {siteMetadata.author}.</h1>
          </Textfit>
          <h3>
            {this.props.banner} Let's
            <a className="smoothscroll" href="#about">
              {" "}
              start scrolling
            </a>{" "}
            and learn more
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
