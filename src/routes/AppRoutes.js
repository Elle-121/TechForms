// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Profile_edit from "../pages/Profile/Profile_edit";
import Accounts from "../pages/Accounts/Accounts";
import Notifications from "../pages/Notifications/Notifications";
import FlightRequestForm from "../pages/FlightRequestForm/FlightRequestForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile_edit" element={<Profile_edit />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/flight-request-form" element={<FlightRequestForm />} />
    </Routes>
  );
}

export default AppRoutes;
