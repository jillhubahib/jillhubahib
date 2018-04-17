import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = ({ currentPosition, outOfHeader, darkenedNavigation }) => (
  <nav id="nav-wrap" className={ darkenedNavigation ? 'opaque' : null } >
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className={ currentPosition === 'home' ? 'current' : null } >
        <AnchorLink href="#home">
          Home
        </AnchorLink>
      </li>
      <li className={ currentPosition === 'about' ? 'current' : null } >
        <AnchorLink href="#about">
          About
        </AnchorLink>
      </li>
      <li className={ currentPosition === 'resume' ? 'current' : null } >
        <AnchorLink href="#resume">
          Resume
        </AnchorLink>
      </li>
      <li className={ currentPosition === 'portfolio' ? 'current' : null }>
        <AnchorLink href="#portfolio">
          Works
        </AnchorLink>
      </li>
      <li className={ currentPosition === 'testimonials' ? 'current' : null }  >
        <AnchorLink href="#testimonials">
          Recommendations
        </AnchorLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
