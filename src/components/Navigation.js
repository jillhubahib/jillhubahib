import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navigation extends Component {
  render() {
    const { currentNav } = this.props

    return (
      <nav id="nav-wrap" className={currentNav === 'blog' ? 'opaque' : null}>
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={currentNav === '' ? 'current' : null}>
            <a className="smoothscroll" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#testimonials">
              Recommendations
            </a>
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
