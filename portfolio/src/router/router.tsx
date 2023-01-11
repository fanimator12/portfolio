import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import About from "../routes/about";
import Home from "../routes/home";
import Photography from "../routes/photography";
import Portfolio from "../routes/portfolio";
import ProjectPage from "../routes/projectPage";
import Services from "../routes/services";
import Software from "../routes/software";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="software-projects" element={<Software />} />
          <Route path="software-projects/:projectId" element={<ProjectPage />} />
          <Route path="photography" element={<Photography/>} />
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