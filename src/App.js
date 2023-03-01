import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BodyOutline from "./components/outlines/BodyOutline";
import NavOutline from "./components/outlines/NavOutline";
import FooterOutline from "./components/outlines/FooterOutline";
import Footer from "./components/Footer";

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
        <NavOutline>
          <Navbar />
        </NavOutline>
        <BodyOutline>
          <Outlet />
        </BodyOutline>
        <FooterOutline>
          <Footer />
        </FooterOutline>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
