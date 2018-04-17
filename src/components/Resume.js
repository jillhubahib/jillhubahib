import React from "react";
import Waypoint from 'react-waypoint';

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = ({ changePosition, changeNavigationToDark }) => (
  <Waypoint
    onEnter={() => {
      changePosition('resume')
      changeNavigationToDark(true)
    }}
  >
    <section id="resume">
      <Education />
      <Work />
      <Skills />
    </section>
  </Waypoint>
);

export default Resume;
