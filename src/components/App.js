import React from "react";
// import {
//   BrowserRouter,
//   BrowserRouter as Routes,
//   Route,
//   Router,
// } from "react-router-dom";
import { HashRouter as Routes, Route, Router } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
      <Route path="/" >
        <Home />
      </Route>
      {/* <Route path="/:id" element={<Detail />}> */}
      <Route path="/:id">
        <Detail />
      </Route>
    </Routes>

    // <Router>
    //   <Route path="/" exact component={Home}></Route>
    //   <Route path="/:id" component={Detail}></Route>
    // </Router>
  );
}
