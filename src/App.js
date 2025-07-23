import React from "react";
import AppRoutes from "./routes/AppRoutes";
import AppProviders from "./context/AppProviders";
import "./App.scss";

function App() {
  return (
    <React.StrictMode>  
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </React.StrictMode>
  );
}

export default App;
