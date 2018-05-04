import React, { Component } from "react";
import Link from "gatsby-link";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const BlogIndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pathContext;
  const previousUrl = index - 1 === 1 ? `/${pathPrefix}` : `/${pathPrefix}/${(index - 1).toString()}`;
  const nextUrl = `/${pathPrefix}/${(index + 1).toString()}`;

  return (
    <div>
      <h4>{group.length} Posts</h4>

      {group.map(({ node }) => (
        <div key={node.id}>
          <div>{node.createdAt}</div>
          <Link to={`/blog/${node.slug}`}>
            {node.title}
          </Link>
          <div>{node.excerpt}</div>
        </div>
      ))}
      <div>
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div>
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
};

export default BlogIndexPage;