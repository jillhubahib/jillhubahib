import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import Meta from './Meta'

const blogItem = css`
  padding-bottom: 1rem;
  padding-top: 2rem;
`

const ListItem = props => (
  <div className={`col-twelve ${blogItem}`}>
    <Link to={`/blog/${props.slug}`}>
      <h2>{props.title}</h2>
    </Link>
    <Meta {...props} />
    {props.excerpt && <div>{props.excerpt}</div>}
  </div>
)

export default ListItem
