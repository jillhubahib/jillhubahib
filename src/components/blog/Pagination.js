import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import { string, number } from 'prop-types'

const NavLink = props => {
  if (!props.test) {
    return (
      <Link className="page-numbers" to={props.url}>
        {props.text}
      </Link>
    )
  } else {
    return <span className="page-numbers inactive">{props.text}</span>
  }
}

const paginationWrapper = css`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Pagination = props => {
  const { index, pageCount, pathPrefix } = props
  const previousUrl =
    index - 1 === 1
      ? `/${pathPrefix}`
      : `/${pathPrefix}/${(index - 1).toString()}`
  const nextUrl = `/${pathPrefix}/${(index + 1).toString()}`

  return (
    <div className="row">
      <nav className={`pagination ${paginationWrapper}`}>
        <NavLink test={index === 1} url={previousUrl} text="Prev" />
        <NavLink test={index === pageCount} url={nextUrl} text="Next" />
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  index: number.isRequired,
  pageCount: number.isRequired,
  pathPrefix: string.isRequired,
}

export default Pagination
