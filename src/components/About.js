import React from "react";
import Waypoint from 'react-waypoint';
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = ({data, changePosition, changeNavigationToDark}) => (
  <Waypoint
    onEnter={() => {
      changePosition('about')
      changeNavigationToDark(false)
    }}
  >
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            {data}
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Honey Jill Hubahib</span>
                <br />
                <span>
                  Cebu City
                  <br /> Cebu, Philippines
                </span>
                <br />
                <span>jillhubahib@gmail.com</span>
              </p>
            </div>
            <div className="columns download" style={{display: 'none'}}>
              <p>
                <a href="#" className="button">
                  <FaCloudDownload /> Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Waypoint>
);

export default About;
