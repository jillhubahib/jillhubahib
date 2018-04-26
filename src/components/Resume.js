import React, { Component } from 'react';
import { connect } from "react-redux";
import Waypoint from "react-waypoint";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import { setCurrentNav } from '../state/actions';
class Resume extends Component {
  render() {
    return (
      <Waypoint
        onEnter={() => this.props.dispatch(setCurrentNav('resume')) }
        onLeave={() => this.props.dispatch(setCurrentNav('')) }
      >
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
