import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, DashBoard, Contact, SplashScreen } from "./Pages";
import { Layout } from "./Components";
import { useAuthStateReady } from "./hooks/useAuthStateReady";
import { useUser } from "./hooks/useUser";

const App = () => {
  const user = useUser();
  const isAuthStateReady = useAuthStateReady();

  if (!isAuthStateReady) return <SplashScreen />;

  return (
    <Routes>
      {user ? (
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
