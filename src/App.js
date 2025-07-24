import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.scss";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
