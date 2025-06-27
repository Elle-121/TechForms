// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Accounts from "../pages/Accounts/Accounts";
import Notifications from "../pages/Notifications/Notifications";
import Login from "../pages/Login/Login";

function AppRoutes() { // TODO: Change Home Route
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default AppRoutes;
