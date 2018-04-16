import React from "react";
import {
  FaGithub,
  FaGooglePlus,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/jillhubahib">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://facebook.com/jillhubahib">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/jillhubahib">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/jillhubahib">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/u/1/+HoneyJillHubahib">
        <FaGooglePlus />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
