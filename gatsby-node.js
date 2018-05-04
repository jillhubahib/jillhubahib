const path = require('path')
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          siteSearchIndex {
            index
          }
          allContentfulBlog {
            edges {
              node {
                id
                title
                slug
                createdAt(formatString: "LL")
                readTimeInMinutes
                tags {
                  name
                }
                excerpt
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        createPaginatedPages({
          edges: result.data.allContentfulBlog.edges,
          createPage: createPage,
          pageTemplate: "src/templates/blog-index.js",
          pathPrefix: "blog",
          context: {
            searchIndex: result.data.siteSearchIndex.index
          }
        });
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: `/blog/${edge.node.slug}/`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            }
          })
        })
        return
      })
    )
  })
}