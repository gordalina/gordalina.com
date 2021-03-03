/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent)

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "articles" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: fileNode.name.split("-").slice(3).join("-"),
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const isBuildingProd = [process.env.CONTEXT, process.env.NODE_ENV].includes("production")
  const filter = isBuildingProd ? `(filter: { frontmatter: { hide: { ne: true }}})` : ``
  const result = await graphql(`
    query {
      allMdx ${filter} {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // you'll call `createPage` for each result
  result.data.allMdx.edges.forEach(({ node }, index) => {
    const {
      fields: { slug },
    } = node

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `articles/${slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/ArticleTemplate.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { slug },
    })
  })
}
