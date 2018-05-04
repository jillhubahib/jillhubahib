import React, { Component } from 'react'
import styled from 'react-emotion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const Wrapper = styled('div')`
  min-height: 500px;
  background: #fff;
  padding-top: 48px;
`

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper>{this.props.children}</Wrapper>
        <Footer />
      </div>
    )
  }
}

export default Layout
