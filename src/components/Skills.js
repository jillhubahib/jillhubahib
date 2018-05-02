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
                <li key={node.name}>
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

const mapStateToProps = (state) => ({ skills: state.skills });

export default connect(mapStateToProps)(Skills);

export const query = graphql`
  fragment SkillFragment on ContentfulSkills {
    name
    level
  }
`;