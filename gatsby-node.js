const path = require('path')
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    const blogIndexTemplate = path.resolve('src/templates/blog-index.js')
    graphql(`
      {
        siteSearchIndex {
          index
        }
        allContentfulBlog(
          limit: 2000
          sort: { fields: [createdAt], order: DESC }
        ) {
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
    `)
    .then((result) => {
      if (result.errors) {
        reject(result.errors)
      }
      createPaginatedPages({
        edges: result.data.allContentfulBlog.edges,
        createPage: createPage,
        pageTemplate: blogIndexTemplate,
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
    })
    .then(() => {
      graphql(`
        {
          allContentfulTags(
            sort: { order: DESC, fields: [createdAt] },
            limit: 1000
          ) {
            edges {
              node {
                name
                blog {
                  title
                  slug
                  createdAt(formatString: "LL")
                  readTimeInMinutes
                  excerpt
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulTags.edges.forEach((edge) => {
          createPage({
            path: `/tags/${edge.node.name}/`,
            component: blogIndexTemplate,
            context: {
              group: result.data.allContentfulTags.edges,
              tag: edge.node.name
            },
          })
        })

        resolve()
      })
    })
  })
}