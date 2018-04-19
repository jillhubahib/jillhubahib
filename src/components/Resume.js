import React, { Component } from 'react';
import { connect } from "react-redux";
import Waypoint from "react-waypoint";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import { SET_CURRENT_NAV } from '../state/actions';
class Resume extends Component {
  handlesWaypointEnter = () => {
    this.props.dispatch({
      type: SET_CURRENT_NAV,
      payload: 'resume'
    })
  }

  render() {
    return (
      <Waypoint onEnter={this.handlesWaypointEnter}>
        <section id="resume">
          <Education />
          <Work />
          <Skills />
        </section>
      </Waypoint>
    );
  }
}

export default connect()(Resume);
