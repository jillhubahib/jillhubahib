import React, { Component } from 'react';
import { connect } from "react-redux";
import Waypoint from "react-waypoint";
import { SET_CURRENT_NAV } from '../state/actions';
class Work extends Component {
  handlesWaypointEnter = () => {
    this.props.dispatch({
      type: SET_CURRENT_NAV,
      payload: 'work'
    })
  }

  render() {
    return (
      <Waypoint onEnter={this.handlesWaypointEnter}>
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
      </Waypoint>
    );
  }
}

export default connect((state) => (state))(Work);
