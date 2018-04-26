import React, { Component } from 'react';
import Waypoint from "react-waypoint";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import { setCurrentNav } from '../state/actions';

class Header extends Component {
  render() {
    return (
      <Waypoint
        onEnter={() => this.props.dispatch(setCurrentNav('home')) }
        onLeave={() => this.props.dispatch(setCurrentNav('')) }
      >
        <header id="home">
          <Navigation />
          <Banner />
          <ScrollDown />
        </header>
      </Waypoint>
    );
  }
}

export default connect()(Header);
