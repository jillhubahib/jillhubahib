import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = ({data}) => (
  <header id="home">
    <Navigation />
    <Banner data={data} />
    <ScrollDown />
  </header>
);

export default Header;
