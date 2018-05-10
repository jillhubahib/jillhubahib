import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'

import Layout from '../components/blog/Layout'
import Pagination from '../components/blog/Pagination'
import List from '../components/blog/List'

import { setCurrentNav } from '../state/actions'

const TagHeader = styled('h2')`
  padding-top: 2rem;
`

class BlogIndex extends Component {
  componentWillMount() {
    this.props.dispatch(setCurrentNav('blog'))
  }

  render() {
    const { group, tag } = this.props.pathContext
    const posts = tag ? group.filter(({ node }) => node.name === tag) : group

    return (
      <Layout>
        {tag && (
          <div className="row">
            <div className="col-twelve">
              <TagHeader>
                {posts.length} post with tag '{tag}'
              </TagHeader>
            </div>
          </div>
        )}
        <List posts={posts} isTag={tag} />
        {!(tag || false) && <Pagination {...this.props.pathContext} />}
      </Layout>
    )
  }
}

export default connect()(BlogIndex)
