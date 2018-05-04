import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../components/blog/Layout'
import Pagination from '../components/blog/Pagination'
import List from '../components/blog/List'

import { setCurrentNav } from '../state/actions'

class BlogIndex extends Component {
  componentWillMount() {
    this.props.dispatch(setCurrentNav('blog'))
  }

  render() {
    const { group } = this.props.pathContext

    return (
      <Layout>
        <List posts={group} />
        <Pagination {...this.props.pathContext} />
      </Layout>
    )
  }
}

export default connect()(BlogIndex)
