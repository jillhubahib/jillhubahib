import React from 'react'
import Link from 'gatsby-link'
import Meta from './Meta'
import { css } from 'react-emotion'

const blogItem = css`
  padding-bottom: 1rem;
  padding-top: 2rem;
`

const List = props => (
  <div className="row">
    {props.posts.map(({ node }) => (
      <div key={node.id} className={`col-twelve ${blogItem}`}>
        <Link to={`/blog/${node.slug}`}>
          <h2>{node.title}</h2>
        </Link>
        <Meta {...node} />
        {node.excerpt && <div>{node.excerpt}</div>}
      </div>
    ))}
  </div>
)

export default List
