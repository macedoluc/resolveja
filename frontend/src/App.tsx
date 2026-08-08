import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function isLoginRoute() {
  return window.location.hash.startsWith("#login");
}

function App() {
  const [showLogin, setShowLogin] = useState(isLoginRoute);

  useEffect(() => {
    const handleHashChange = () => setShowLogin(isLoginRoute());

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (showLogin) {
    return <LoginPage />;
  }

  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
