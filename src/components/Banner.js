import React from "react";
import SocialLinks from "./SocialLinks";
import { siteMetadata } from "../../gatsby-config";

const Banner = ({data}) => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm {siteMetadata.author}.</h1>
      <h3>
        {data} Let's
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

export default Banner;
