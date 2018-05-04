import React, { Component } from 'react'
import { shape, string, object, number, array } from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import Layout from '../components/blog/Layout'
import Meta from '../components/blog/Meta'
import { rhythm } from '../utils/typography'

const ContentWrapper = styled('section')`
  margin-top: 6.6rem;
`

const PrimaryContent = styled('div')`
  padding-left: 6rem;
  padding-right: 6rem;
`

const ContentMedia = styled('div')`
  position: relative;
  margin-bottom: 4.8rem;
`

const Title = styled('h1')`
  font-size: 3.3rem;
  line-height: 1.364;
  margin-bottom: 0.9rem;
`

class BlogPost extends Component {
  render() {
    const {
      title,
      thumbnail,
      content,
      createdAt,
      tags,
      readTimeInMinutes,
    } = this.props.data.contentfulBlog

    return (
      <Layout>
        <ContentWrapper>
          <div className="row">
            <div className="col-twelve">
              <article>
                {thumbnail && (
                  <ContentMedia>
                    <Img sizes={thumbnail.sizes} />
                  </ContentMedia>
                )}
                <PrimaryContent>
                  <Title>{title}</Title>
                  <Meta {...this.props.data.contentfulBlog} />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.childMarkdownRemark.html,
                    }}
                  />
                </PrimaryContent>
              </article>
            </div>
          </div>
        </ContentWrapper>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: shape({
    contentfulBlog: shape({
      title: string.isRequired,
      thumbnail: object.isRequired,
      content: object.isRequired,
      createdAt: string.isRequired,
      tags: array.isRequired,
      readTimeInMinutes: number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPost

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      thumbnail {
        sizes(maxWidth: 1200) {
          ...GatsbyContentfulSizes
        }
      }
      createdAt(formatString: "LL")
      readTimeInMinutes
      tags {
        name
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
