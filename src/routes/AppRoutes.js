// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Accounts from "../pages/Accounts/Accounts";
import Notifications from "../pages/Notifications/Notifications";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/Login/ResetPassword"
import FlightRequestForm from "../pages/FlightRequestForm/FlightRequestForm";
import Review from "../pages/Review/Review";
import TwoFactorAuth from "../pages/Login/TwoFactorAuth";

function AppRoutes() { // TODO: Change Home Route
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="two-factor-auth" element={<TwoFactorAuth />} />

      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/flight-request-form" element={<FlightRequestForm />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default AppRoutes;
