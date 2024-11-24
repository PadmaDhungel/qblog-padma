import { useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
