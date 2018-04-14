import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = ({data}) => {
  const node = data.allContentfulAboutMe.edges[0].node;
  const aboutMe = node.aboutMe.aboutMe;
  const banner = node.banner;

  return (
    <div>
      <Header data={banner} />
      <About data={aboutMe} />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

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
