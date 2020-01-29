import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  width: 100%;
  .latest-posts {
    display: flex;
    justify-content: space-between;
  }
  .carousel-card {
    width: 100%;
    max-height: 400px;
    height: 27vw;
    max-width: 450px;
    background-position: center;
    background-size: cover;
  }
  .carousel-card-link {
    width: calc(33.33% - 1em);
    margin: 0em 0.5em;
  }
  h3 {
    margin-top: 4em;
    margin-bottom: 1em;
    font-size: 20px;
    font-weight: 700;
  }
  h4 {
    visibility: visible;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.6s;
    user-select: none;
    letter-spacing: 0.035em;
    vertical-align: baseline;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: #000;
    word-wrap: break-word;
    font-size: 24px;
    padding: 0.198em 0.4em 0.3em;
    line-height: 1.126em;
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background: #fff;
    position: relative;
    top: 17vw;
    width: 80%;
    margin: 0 10%;
    &:hover {
      color: #c35794;
    }
  }
  @media only screen and (max-width: 1200px) {
    h4 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 850px) {
    .latest-posts {
      flex-direction: column;
    }
    .carousel-card-link {
      margin: auto;
      width: calc(100% - 1em);
    }
    h4 {
      top: 80%;
    }
    h3 {
      text-align: center;
    }
    .carousel-card {
      max-width: 100%;
      height: 100vw;
      margin-bottom: 1em;
    }
  }
`;

class LatestPosts extends React.Component {
  render() {
    return (
      <Container>
        <h3>SEE THE LATEST POSTS</h3>
        <div className="latest-posts">
          {this.props.data.allSanityPost.edges.map(({ node }) => (
            <Link
              to={node.slug.current}
              key={node.title}
              className="carousel-card-link"
            >
              <div
                className="carousel-card"
                style={{
                  backgroundImage: `url(${node.mainImage.asset.fluid.src})`
                }}
              >
                <h4>{`This is the title of ${node.title}`}</h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSanityPost(limit: 3) {
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
    `}
    render={data => <LatestPosts data={data} />}
  />
);
