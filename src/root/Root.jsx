import React from "react";
import { Route, Routes } from "react-router";
import Generic from "../components/Generic";
import Home from "../components/Home";
import HomePage from "../components/HomePage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/home" index element={<Home />} />
        <Route path="/search" element={<Generic />} />
        <Route path="/library" element={<Generic />} />
        <Route path="/create-playlist" element={<Generic />} />
        <Route path="/liked-songs" element={<Generic />} />
      </Route>
    </Routes>
  );
};

export default Root;
