import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import About from "../routes/about";
import Home from "../routes/home";
import Projects from "../routes/projects";
import Services from "../routes/services";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >Oops! <br></br> There's nothing here.</main>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppRouter;