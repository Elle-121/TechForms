import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.scss";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} /> {/*remove during deployment*/}
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
