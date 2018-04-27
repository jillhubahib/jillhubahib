import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SET_BANNER,
  SET_ABOUT_ME,
  SET_EDUCATION,
  SET_WORK_HISTORY,
  SET_SKILLS,
  SET_TESTIMONIALS,
  SET_WORKS
} from '../state/actions'

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

class IndexPage extends Component {
  componentWillMount() {
    // contentful -> redux
    const aboutMeNode = this.props.data.allContentfulAboutMe.edges[0].node;
    const aboutMe = aboutMeNode.aboutMe;
    const banner = aboutMeNode.banner;

    this.props.dispatch({ type: SET_BANNER, payload: banner })
    this.props.dispatch({ type: SET_ABOUT_ME, payload: aboutMe })
    this.props.dispatch({
      type: SET_EDUCATION,
      payload: this.props.data.allContentfulEducation.edges
    })
    this.props.dispatch({
      type: SET_WORK_HISTORY,
      payload: this.props.data.allContentfulExperiences.edges
    })
    this.props.dispatch({
      type: SET_SKILLS,
      payload: this.props.data.allContentfulSkills.edges
    })
    this.props.dispatch({
      type: SET_TESTIMONIALS,
      payload: this.props.data.allContentfulRecommendation.edges
    })
    this.props.dispatch({
      type: SET_WORKS,
      payload: this.props.data.allContentfulPortfolio.edges
    })
  }

  render() {
    return (
      <div>
        <Header headerImage={this.props.data.headerImage} />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials bgImage={this.props.data.testimonialsImage} />
        <Footer />
      </div>
    );
  }
}

export default connect()(IndexPage);

export const query = graphql`
  query IndexQuery {
    allContentfulAboutMe {
      edges {
        node {
          ...AboutMeFragment
        }
      }
    }
    allContentfulEducation {
      edges {
        node {
          ...EducationFragment
        }
      }
    }
    allContentfulExperiences (sort: { fields: [startDate], order: DESC }){
      edges {
        node {
          ...WorkFragment
        }
      }
    }
    allContentfulRecommendation {
      edges {
        node {
          ...TestimonialFragment
        }
      }
    }
    allContentfulSkills (sort: { fields: [createdAt] }){
      edges {
        node {
          ...SkillFragment
        }
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          ...PortfolioFragment
        }
      }
    }
    headerImage: imageSharp(id: { regex: "/header-background.jpg/" }) {
      sizes(maxWidth: 3600) {
        ...GatsbyImageSharpSizes
      }
    }
    testimonialsImage: imageSharp(id: { regex: "/testimonials-bg.jpg/" }) {
      sizes(maxWidth: 2264) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
