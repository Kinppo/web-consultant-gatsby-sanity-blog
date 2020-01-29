import React from "react";
import Layout from "./DefaultLayout";
import { Link } from "gatsby";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 5em;
    margin-top: 300px;
  }
  a {
    color: inherit;
    margin-bottom: 2em;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

function PostCategory({ data }) {
  return (
    <Container>
      <Layout location="blogs">
        <div className="blogs">
          {data.allSanityPost.edges.map(({ node }) => (
            <Link to={node.slug.current} key={node.title}>
              <BlogCard
                title={node.title}
                img={node.mainImage}
                desc={node.description}
                date={node.publishedAt}
              />
            </Link>
          ))}
        </div>
      </Layout>
    </Container>
  );
}

export default PostCategory;

export const query = graphql`
  query($title: String) {
    allSanityPost(
      filter: { categories: { elemMatch: { title: { eq: $title } } } }
    ) {
      edges {
        node {
          title
          publishedAt
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          description
        }
      }
    }
  }
`;
