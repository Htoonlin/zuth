import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalTextProvider } from "./globals/global-text-provider";
import MasterLayout from "./layout/master-layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import UserProfile from "./pages/user-profile";
import ResetPassword from "./pages/reset-password";
import ChangePassword from "./pages/change-password";
import ForgotPassword from "./pages/forgot-password";
import NotFound from "./pages/not-found";
function App() {
  return (
    <>
      <GlobalTextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MasterLayout>
                  <Dashboard />
                </MasterLayout>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/user-profile"
              element={
                <MasterLayout>
                  <UserProfile />
                </MasterLayout>
              }
            />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalTextProvider>
    </>
  );
}

export default App;
