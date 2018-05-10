import React from 'react'
import Img from 'gatsby-image'

import Navigation from './Navigation'
import Banner from './Banner'
import ScrollDown from './ScrollDown'

const Header = props => (
  <header id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
    <Img
      title="Header background"
      sizes={props.headerImage.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </header>
)

export default Header
