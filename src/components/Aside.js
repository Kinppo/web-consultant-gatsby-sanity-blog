import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Container = styled.div`
  box-sizing: border-box;
  padding: 0em 1em 2em 1em;
  .aside-img {
    width: 100%;
    height: 100%;
    max-width: 360px;
    max-height: 400px;
    border-radius: 3px;
    object-fit: cover;
  }
  .tags {
    word-break: break-all;
    padding: 0em 1.3em;
    text-align: center;
  }
  .tags a {
    border-radius: 4px;
    padding: 4px 0px;
    display: inline-block;
  }
  .tags p {
    border: 1px solid #621367;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0.2em;
  }
  .tags p:hover {
    background-color: transparent !important;
  }
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5em;
  }
  .categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0em 1em;
    margin: 6em 0em;
    p {
      padding: 1em 0em;
      font-weight: 600;
      font-size: 14px;
      color: #444;
      font-weight: 600;
      text-align: center;
      background: #f2f2f2;
      border-radius: 3px;
      margin: 0.3em 2.5em 0.3em 2.5em;
    }
  }
  svg {
    fill: #1983f0;
    margin-bottom: 1em;
  }
  h4 {
    color: #0f7be9;
    font-size: 16px;
    margin-top: 1em;
  }
  .text {
    text-align: justify;
    font-weight: 500;
    color: #444;
  }
  .testimony-text {
    padding: 0em 1em;
  }
  a {
    margin-bottom: 0em !important;
  }
  .box-quote {
    box-sizing: border-box;
    background-image: url(${require("../images/box.png")});
    background-size: cover;
    background-position: center;
    padding: 5.5em 4em 3em 4em;
    margin: 4em 1em;
    p {
      font-size: 22px;
      color: #83d0e4;
      text-align: center;
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 1345px) {
    .box-quote {
      padding: 5.5em 2em 3em 2em;
      p {
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 1120px) {
    .box-quote {
      padding: 5.5em 2em 3em 2em;
      p {
        font-size: 16px;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .box-quote {
      padding: 3.5em 2em 1em 2em;
      p {
        font-size: 16px;
      }
    }
  }
  @media only screen and (max-width: 940px) {
    .box-quote {
      padding: 3.5em 1.5em 1em 1.5em;
      margin: 4em 0em;
      p {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    max-width: 400px;
    margin: auto;
    .aside-img {
      height: 100vw;
    }
    .box-quote {
      padding: 5.5em 4em 3em 4em;
      margin: 4em 1em;
      p {
        font-size: 22px;
      }
    }
  }
  @media only screen and (max-width: 390px) {
    .box-quote {
      margin: 4em 0em;
      padding: 5.5em 2em 3em 2em;
    }
    p {
      font-size: 18px;
    }
  }
`;
function Aside() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "men.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Img fluid={data.file.childImageSharp.fluid} className="aside-img" />
      <div className="testimony-text">
        <h4>John Doe</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        </svg>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
      <div className="box-quote">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div className="categories">
        <h5>categories</h5>
        <Link to="/education">
          <p>Education</p>
        </Link>
        <Link to="/sience">
          <p>Sience</p>
        </Link>
        <Link to="/nature">
          <p>Nature</p>
        </Link>
        <Link to="/personal-life">
          <p>Personal Life</p>
        </Link>
        <Link to="/technology">
          <p>Technology</p>
        </Link>
      </div>
      <div className="tags">
        <h5>tags</h5>
        <Link to="/php">
          <p>php</p>
        </Link>
        <Link to="/python">
          <p>Python</p>
        </Link>
        <Link to="/swift">
          <p>Swift</p>
        </Link>
        <Link to="/java">
          <p>Java</p>
        </Link>
        <Link to="/wordpress">
          <p>wordpress</p>
        </Link>
        <Link to="/android">
          <p>Android</p>
        </Link>
        <Link to="/javascript">
          <p>Javascript</p>
        </Link>
      </div>
    </Container>
  );
}

export default Aside;
