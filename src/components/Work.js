import React, { Component } from 'react';
import { connect } from "react-redux";
import Waypoint from "react-waypoint";

class Work extends Component {
  render() {
    return (
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {this.props.workHistory.map(({node}) => (
            <div className="row item" key={node.company}>
              <div className="twelve columns">
                <h3>
                  <a className="company-name" href={node.companyLink}>
                    {node.company}
                  </a>
                </h3>
                <p className="info">
                  {node.jobTitle}
                  <span>&bull;</span>
                  <em className="date">{node.startDate} - {node.endDate}</em>
                  <span>&bull;</span>
                  <em className="duration"> {node.duration} </em>
                </p>
                <p
                  dangerouslySetInnerHTML={{__html: node.jobDescription.childMarkdownRemark.html}}
                  className="job-description"
                >
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ workHistory: state.workHistory });

export default connect(mapStateToProps)(Work);

export const query = graphql`
  fragment WorkFragment on ContentfulExperiences {
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
`;