const path = require('path')
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog {
            edges {
              node {
                id
                title
                slug
                createdAt
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
          pageLength: 2, // This is optional and defaults to 10 if not used
          pathPrefix: "blog", // This is optional and defaults to an empty string if not used
          context: {} // This is optional and defaults to an empty object if not used
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