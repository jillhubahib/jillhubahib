import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SET_BANNER,
  SET_ABOUT_ME,
  SET_EDUCATION,
  SET_WORK_HISTORY,
  SET_TESTIMONIALS
} from '../state/actions'

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

class IndexPage extends Component {
  componentDidMount() {
    // contentful -> redux
    const aboutMeNode = this.props.data.allContentfulAboutMe.edges[0].node;
    const aboutMe = aboutMeNode.aboutMe.aboutMe;
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
      type: SET_TESTIMONIALS,
      payload: this.props.data.allContentfulRecommendation.edges
    })
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default connect()(IndexPage);

export const query = graphql`
  query Query {
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
    allContentfulEducation {
      edges {
        node {
          school
          course
          dateGraduated(formatString: "MMMM YYYY")
          educationDetail {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulExperiences (sort: { fields: [startDate], order: DESC }){
      edges {
        node {
          company
          companyLink
          jobTitle
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          duration
          jobDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulRecommendation {
      edges {
        node {
          detail {
            detail
          }
          givenBy
          givenByPosition
          givenByCompany
        }
      }
    }
  }
`;
