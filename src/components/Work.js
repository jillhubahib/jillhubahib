import React from "react";

const Work = ({data}) => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>
    <div className="nine columns main-col">
      {data.edges.map(({node}) => (
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

export default Work;
