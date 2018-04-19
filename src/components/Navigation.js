import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component {
  render() {
    const { currentNav } = this.props;

    return (
      <nav id="nav-wrap" className="opaque" >
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={ currentNav === 'home' ? "current" : null } >
            <AnchorLink href="#home">
              Home
            </AnchorLink>
          </li>
          <li className={ currentNav === 'about' ? "current" : null }>
            <AnchorLink href="#about">
              About
            </AnchorLink>
          </li>
          <li className={ currentNav === 'resume' ? "current" : null } >
            <AnchorLink href="#resume">
              Resume
            </AnchorLink>
          </li>
          <li className={ currentNav === 'portfolio' ? "current" : null } >
            <AnchorLink href="#portfolio">
              Works
            </AnchorLink>
          </li>
          <li className={ currentNav === 'testimonials' ? "current" : null } >
            <AnchorLink href="#testimonials">
              Recommendations
            </AnchorLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect((state) => (state))(Navigation);
