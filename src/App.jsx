import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, DashBoard, Contact } from "./Pages";
import { Layout } from "./Components";

const App = () => {
  const isLoggedIn = true;

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      ) : (
        <Route path="/" element={<HomePage />} />
      )}
      <Route path="*" element={<div className="text-black">404 page</div>} />
    </Routes>
  );
};

export default App;