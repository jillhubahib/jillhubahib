import React from 'react'
import styled from 'react-emotion'
import { string, array, number } from 'prop-types'
import { FaClockO, FaTags, FaBookmarkO } from 'react-icons/lib/fa'

const Wrapper = styled('ul')`
  font-size: 1.5rem;
  list-style: none;
  margin-left: 0;
  color: #999999;
  li {
    display: inline-block;
    padding-left: 0;
    margin-right: 1rem;
  }
`

const Tags = styled('li')`
  a {
    margin-right: 0.5rem;
    &::after {
      content: ',';
    }
    &:last-child:after {
      content: '';
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const Meta = ({ createdAt, tags, readTimeInMinutes }) => (
  <Wrapper>
    <li className="date">
      <FaClockO /> {createdAt}
    </li>
    {tags && (
      <Tags>
        <FaTags />{' '}
        {tags.map(tag => (
          <a key={tag.name} href="#">
            {tag.name}
          </a>
        ))}
      </Tags>
    )}
    <li>
      <FaBookmarkO /> {readTimeInMinutes} min read
    </li>
  </Wrapper>
)

Meta.propTypes = {
  createdAt: string.isRequired,
  tags: array.isRequired,
  readTimeInMinutes: number.isRequired,
}

export default Meta
