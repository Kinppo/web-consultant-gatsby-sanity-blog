import React from "react";
import Carousel from "../components/MyCarousel";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import LatestPosts from "../components/LatestPosts";
import Aside from "../components/Aside";
import ImageSection from "../components/ImageSection";
import Seo from "../components/seo"

const Container = styled.div`
  width: 100%;
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: auto;
    margin-bottom: 5em;
    margin-top: 0em;
  }
  a {
    color: inherit;
    margin-bottom: 2em;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
  .row {
    max-width: 1400px;
    margin: auto;
    margin-top: 10em;
    display: grid;
    grid-gap: 1%;
    grid-template-columns: 70% 29%;
  }
  @media only screen and (max-width: 720px) {
    .row {
      display: block;
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Container>
      <Seo title="home"/>
      <Layout location="/">
        <Carousel />
        <LatestPosts />
        <div className="row">
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
          <Aside />
        </div>
        <ImageSection />
      </Layout>
    </Container>
  );
};
export default IndexPage;

export const query = graphql`
  query {
    allSanityPost(limit: 9) {
      edges {
        node {
          title
          publishedAt
          description
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
          categories {
            title
          }
        }
      }
    }
  }
`;
