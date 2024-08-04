import "./App.css";
import AppRouter from "./router/router";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen} />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
