import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const Container = styled.div`
  .site-main {
    min-height: calc(100vh - 121px);
    margin-top: 60px;
    height: 100%;
    width: 100%;
  }
`;
const DefaultLayout = ({ data, children, location }) => {
  return (
    <Container>
      <Navbar location={location} />
      <main className="site-main">{children}</main>
      <Footer className="footer" />
    </Container>
  );
};

export default DefaultLayout;
