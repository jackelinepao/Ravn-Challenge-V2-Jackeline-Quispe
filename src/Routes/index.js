import React from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "../views/HomePage";
import PersonDetailPage from "../views/PersonDetailPage";
import PersonPage from "../views/PersonPage/Peoples";

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/person" element={<PersonPage />} />
    <Route path="/person/:id" element={<PersonDetailPage />} />
  </Routes>
);

export default createRoutes;