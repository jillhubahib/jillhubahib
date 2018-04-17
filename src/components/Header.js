import React from "react";
import Waypoint from 'react-waypoint';

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = ({
data,
currentPosition,
changePosition,
darkenedNavigation,
changeNavigationToDark
}) => (
  <Waypoint
    onEnter={() => {
      changePosition('home')
      changeNavigationToDark(false)
    }}
  >
    <header id="home">
      <Navigation
        currentPosition={currentPosition}
        darkenedNavigation={darkenedNavigation}
      />
      <Banner data={data} />
      <ScrollDown />
    </header>
  </Waypoint>
);

export default Header;
