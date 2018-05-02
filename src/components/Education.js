import React, { Component } from 'react';
import { connect } from "react-redux";

class Education extends Component {
  render() {
    return (
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        {this.props.education.map(({node}) => (
          <div
            key={node.school}
            className="nine columns main-col"
          >
            <div className="row item">
              <div className="twelve columns">
                <h3>
                  {node.school}
                </h3>
                <p className="info">
                  {node.course}
                  <span>&bull;</span>
                  <em className="date">{node.dateGraduated}</em>
                </p>
                <p
                  dangerouslySetInnerHTML={{__html: node.educationDetail.childMarkdownRemark.html}}
                  className="detail">
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ education: state.education });

export default connect(mapStateToProps)(Education);

export const query = graphql`
  fragment EducationFragment on ContentfulEducation {
    school
    course
    dateGraduated(formatString: "MMMM YYYY")
    educationDetail {
      childMarkdownRemark {
        html
      }
    }
  }
`;