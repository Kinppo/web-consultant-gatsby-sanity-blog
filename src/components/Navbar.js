import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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
  h6 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 700;
  }
  .mega-menu-2 {
    justify-content: left;
    padding: 1em 9em 1em 1em;
    flex-direction: column;
    box-sizing: border-box;
    svg {
      fill: #fff;
    }
    span {
      position: absolute;
      padding-left: 1.5em;
      margin-top: 0.3em;
      transition: all 0.8s;
    }
    h6 {
      cursor: pointer;
      margin: 1em 0em;
      width: 100%;
      transition: all 0.6s;
      padding: 10px 15px;
      font-weight: 500;
      font-size: 14px;
      &:hover {
        span {
          padding-left: 2em;
        }
      }
      a {
        color: #fff;
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
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .second-row {
      display: none;
    }
    .hamburger {
      display: block;
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
export default function Navbar({ data, location }) {
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
        <div
          className="hamburger"
          onClick={() => openSideBar()}
          style={{ position: "absolute", right: "3em", top: "1em" }}
        >
          <Hamburger />
        </div>
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
          <h6 className="nav-li">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Github</span>
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                  <span>Linkden</span>
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
