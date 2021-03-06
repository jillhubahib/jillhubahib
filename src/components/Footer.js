import React from 'react'
import SocialLinks from './SocialLinks'
import { FaChevronCircleUp } from 'react-icons/lib/fa'

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2018 CeeVee</li>
          <li>
            Design by{' '}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Data delivered by{' '}
            <a title="Styleshout" href="https://www.contentful.com/">
              Contentful
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
