import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

export function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
