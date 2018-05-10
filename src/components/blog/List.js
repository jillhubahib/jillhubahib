import React from 'react'
import ListItem from './ListItem'

const List = props => (
  <div className="row">
    {props.posts.map(({ node }) => {
      if (props.isTag) {
        return <ListItem key={node.name} {...node.blog[0]} />
      } else {
        return <ListItem key={node.id} {...node} />
      }
    })}
  </div>
)

export default List
