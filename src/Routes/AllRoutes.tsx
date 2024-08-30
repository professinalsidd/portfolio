import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../container/screens/Home/HomeScreen";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
