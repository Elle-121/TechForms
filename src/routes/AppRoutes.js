// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Accounts from "../pages/Accounts/Accounts";
import Notifications from "../pages/Notifications/Notifications";
import FlightRequestForm from "../pages/FlightRequestForm/FlightRequestForm";
import Review from "../pages/Review/Review";

function AppRoutes() {
  return (
    <Routes>
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
