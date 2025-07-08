// src/routes/AppRoutes.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Accounts from "../pages/Accounts/Accounts";
import Notifications from "../pages/Notifications/Notifications";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/Login/ResetPassword"
import FlightRequestForm from "../pages/FlightRequestForm/FlightRequestForm";
import Review from "../pages/Review/Review";
import TwoFactorAuth from "../pages/Login/TwoFactorAuth";
import ErrorPage from "../pages/errorPage";


const router = createBrowserRouter([ // A JSON formatted route list
  {
    path: "/",
    Component: Home,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "reset-password",
    Component: ResetPassword,
  },
  {
    path: "two-factor-auth",
    Component: TwoFactorAuth,
  },
  {
    path: "profile",
    Component: Profile,
  },
  {
    path: "accounts",
    Component: Accounts,
  },
  {
    path: "notifications",
    Component: Notifications,
  },
  {
    path: "flight-request-form",
    Component: FlightRequestForm,
  },
  {
    path: "review",
    Component: Review,
  },
]);


function AppRoutes() { // TODO: Change Home Route
  return (
    <RouterProvider router={router}/>
    // <Routes>
    //   <Route path="login" element={<Login />} errorElement={<ErrorPage/>} />
    //   <Route path="reset-password" element={<ResetPassword />} />
    //   <Route path="two-factor-auth" element={<TwoFactorAuth />} />

    //   <Route path="/" element={<Home />} />
    //   <Route path="/profile" element={<Profile />} />
    //   <Route path="/accounts" element={<Accounts />} />
    //   <Route path="/notifications" element={<Notifications />} />
      
    //   <Route path="/flight-request-form" element={<FlightRequestForm />} />
    //   <Route path="/review" element={<Review />} />
    // </Routes>
  );
}

export default AppRoutes;
