import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages";

const App = () => {
  const isLoggedIn = false;

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<div className="text-black">Showing website content</div>} />
      ) : (
        <Route path="/" element={<HomePage />} />
      )}
      <Route path="*" element={<div className="text-black">404 page</div>} />
    </Routes>
  );
};

export default App;