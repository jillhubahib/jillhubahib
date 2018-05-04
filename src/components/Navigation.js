import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navigation extends Component {
  render() {
    const { currentNav } = this.props

    return (
      <nav id="nav-wrap" className="opaque">
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={currentNav === 'home' ? 'current' : null}>
            <a href="/#home">Home</a>
          </li>
          <li className={currentNav === 'about' ? 'current' : null}>
            <a href="/#about">About</a>
          </li>
          <li className={currentNav === 'resume' ? 'current' : null}>
            <a href="/#resume">Resume</a>
          </li>
          <li className={currentNav === 'portfolio' ? 'current' : null}>
            <a href="/#portfolio">Works</a>
          </li>
          <li className={currentNav === 'testimonials' ? 'current' : null}>
            <a href="/#testimonials">Recommendations</a>
          </li>
          <li className={currentNav === 'blog' ? 'current' : null}>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({ currentNav: state.currentNav })

export default connect(mapStateToProps)(Navigation)
