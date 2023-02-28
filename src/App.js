import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Outline from "./components/Outline";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <AuthContextProvider>
        <Navbar />
        <Outline>
          <Outlet />
        </Outline>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
