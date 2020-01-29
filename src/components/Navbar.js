import React, { useState } from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 20;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    margin: 0;
    padding: 0;
  }
  .nav-row {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: auto;
  }
  .logo {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 220px;
    height: 80px;
  }
  .nav-li {
    display: inline-block;
    font-size: 14px;
    padding: 0 1em;
  }
  a {
    color: #fff;
    &:hover {
      text-decoration: none;
      color: #000;
    }
  }
  .link {
    color: #333;
    transition: all 0.6s;
    padding: 10px 15px;
    &:hover {
      text-decoration: none;
      color: #fff;
      background: #390b3c;
    }
  }
  .mega-menu {
    background: #390b3c;
    opacity: 0;
    transform: translateY(-5%);
    position: absolute;
    justify-content: space-evenly;
    display: none;
  }
  .droppable {
    position: static;
  }
  .droppable:hover .mega-menu {
    display: flex;
    transition: all 0.5s;
    transform: translateY(0%);
    opacity: 1;
  }
  .droppable:hover .mega-menu-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .mega-menu-1 {
    width: 100%;
    left: 0;
    padding: 5em 5em 3em 5em;
    grid-column-gap: 1em;
  }
  h6 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 700;
  }
  .mega-menu-2 {
    justify-content: left;
    padding: 1em 2em 1em 1em;
    flex-direction: column;
    h6 {
      cursor: pointer;
      margin: 1em 0em;
      width: 100%;
      transition: all 0.6s;
      padding: 10px 15px;
      a {
        color: #fff;
      }
      &:hover {
        a {
          color: #000;
        }
        text-decoration: none;
        color: #000;
        background: #fff;
      }
    }
  }
  p {
    height: 20px;
    margin: 20px 0px;
    text-transform: uppercase;
    color: #333;
  }
  img {
    width: 320px;
    height: 240px;
    transition: all 1s;
  }
  .carousel-card {
    height: 340px;
    width: 100%;
    background-position: center;
    background-size: cover;
    overflow: hidden;
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
    color: #000;
    word-wrap: break-word;
    font-size: 18px;
    padding: 0.198em 0.4em 0.3em;
    line-height: 1.126em;
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background: #fff;
    position: relative;
    top: 260px;
    width: 80%;
    margin: 0 10%;
    &:hover {
      color: #c35794;
    }
  }
  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  @media only screen and (max-width: 768px) {
    .second-row {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) {
    .carousel-card-link:last-child {
      display: none;
    }
    .droppable:hover .mega-menu-1 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
function Navbar({ data, location }) {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const openSideBar = () => {
    toggleSideBar(true);
  };
  return (
    <div>
      <Container>
        <div className="nav-row">
          <img
            src={require("../images/logo.png")}
            alt="logo"
            className="logo"
          />
        </div>
        <h6
          onClick={() => openSideBar()}
          style={{ position: "absolute", right: "5em", marginTop: "2.8em" }}
        >
          <Hamburger />
        </h6>
        <div className="nav-row second-row">
          <h6 className="nav-li">
            <p>
              <Link
                className="link"
                to="/"
                style={
                  location === "/"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Home
              </Link>
            </p>
          </h6>
          <h6 className="droppable nav-li">
            <p>
              <Link
                className="link"
                to="./blogs"
                style={
                  location === "blogs"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Blogs
              </Link>
            </p>
            <div className="mega-menu mega-menu-1">
              {data.allSanityPost.edges.map(({ node }) => (
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
          </h6>
          <h6 className="nav-li">
            <p>
              <Link
                to="./about"
                className="link"
                style={
                  location === "about"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                ABOUT
              </Link>
            </p>
          </h6>
          <h6 className="nav-li">
            <p>
              <Link
                to="./contact"
                className="link"
                style={
                  location === "contact"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Contact
              </Link>
            </p>
          </h6>
          <h6 className="droppable nav-li">
            <p>
              <a
                href=" "
                onClick={() => {
                  return false;
                }}
                className="link"
              >
                Follow
              </a>
            </p>
            <div className="mega-menu mega-menu-2">
              <h6>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkden
                </a>
              </h6>
            </div>
          </h6>
        </div>
      </Container>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
}

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allSanityPost(limit: 4) {
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
    render={data => <Navbar data={data} location={location} />}
  />
);
