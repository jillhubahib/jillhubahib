import React, { Component } from 'react';
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

class IndexPage extends Component {
  state = {
    currentPosition: 'home',
    darkenedNavigation: false
  }

  changePosition = (newPosition) => {
    this.setState({ currentPosition: newPosition });
  }

  changeNavigationToDark = (darken) => {
    this.setState({ darkenedNavigation: darken ? true : false })
  }

  render() {
    const node = this.props.data.allContentfulAboutMe.edges[0].node;
    const aboutMe = node.aboutMe.aboutMe;
    const banner = node.banner;
    const { currentPosition, darkenedNavigation } = this.state;

    return (
      <div>
        <Header data={banner}
          currentPosition={currentPosition}
          changePosition={this.changePosition}
          darkenedNavigation={darkenedNavigation}
          changeNavigationToDark={this.changeNavigationToDark}
        />
        <About data={aboutMe}
          changePosition={this.changePosition}
          changeNavigationToDark={this.changeNavigationToDark}
        />
        <Resume
          changePosition={this.changePosition}
          changeNavigationToDark={this.changeNavigationToDark}
        />
        <Portfolio
          changePosition={this.changePosition}
          changeNavigationToDark={this.changeNavigationToDark}
        />
        <Testimonials
          changePosition={this.changePosition}
          changeNavigationToDark={this.changeNavigationToDark}
        />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query AboutQuery {
    allContentfulAboutMe {
      edges {
        node {
          banner
          aboutMe {
            aboutMe
          }
        }
      }
    }
  }
`;
