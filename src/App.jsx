import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Tes from './pages/tes';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;