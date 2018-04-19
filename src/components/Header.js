import React, { Component } from 'react';
import Waypoint from "react-waypoint";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import { SET_CURRENT_NAV } from '../state/actions';

class Header extends Component {
  handlesWaypointEnter = () => {
    this.props.dispatch({
      type: SET_CURRENT_NAV,
      payload: "home"
    })
  }

  render() {
    return (
      <Waypoint onEnter={this.handlesWaypointEnter} >
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
