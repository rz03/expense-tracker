import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { PrivateRoute } from "./Components/PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};
