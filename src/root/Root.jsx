import React from "react";
import { Route, Routes } from "react-router";
import Generic from "../components/Generic";
import Home from "../components/Home";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" index element={<Home />} />
        <Route path="/search" element={<Generic />} />
        <Route path="/library" element={<Generic />} />
        <Route path="/create-playlist" element={<Generic />} />
        <Route path="/liked-songs" element={<Generic />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
