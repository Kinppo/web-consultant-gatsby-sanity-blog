const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
      allSanityTag {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const post = result.data.allSanityPost.edges.map(({ node }) => node);
  post.forEach(post => {
    actions.createPage({
      path: post.slug.current,
      component: path.resolve("src/templates/post.js"),
      context: {
        slug: post.slug.current,
        cat: post.categories[0].title
      }
    });
  });

  const category = result.data.allSanityCategory.edges.map(({ node }) => node);
  category.forEach(category => {
    actions.createPage({
      path: category.slug.current,
      component: path.resolve("src/templates/postCategory.js"),
      context: {
        title: category.title
      }
    });
  });

  const tag = result.data.allSanityTag.edges.map(({ node }) => node);
  tag.forEach(tag => {
    actions.createPage({
      path: tag.slug.current,
      component: path.resolve("src/templates/postTag.js"),
      context: {
        title: tag.title
      }
    });
  });
};
