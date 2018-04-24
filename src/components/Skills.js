import React, { Component } from 'react';
import { connect } from "react-redux";

class Skills extends Component {
  state = {  }
  render() {
    return (
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {this.props.skills.map(({node}) => (
                <li>
                  <span className="bar-expand" style={ {width: `${node.level}%`} } />
                  <em>{node.name}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => (state))(Skills);
