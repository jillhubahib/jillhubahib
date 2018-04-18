import React from "react";

const Education = ({data}) => {
  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      {data.edges.map(({node}) => (
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
              <p className="detail">
                {node.educationDetail.educationDetail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education;
