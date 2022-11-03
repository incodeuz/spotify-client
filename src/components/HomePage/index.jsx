import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import { Container, Wrapper } from "./style";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Outlet />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default HomePage;
