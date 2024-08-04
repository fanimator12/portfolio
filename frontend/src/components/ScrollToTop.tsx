import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";

function ScrollToTop({ children }: any) {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {children}
      {showButton && <Button
        onClick={scrollToTop}
        className={`back-to-top ${showButton ? "visible" : ""}`}
        sx={{
          backgroundColor: "transparent",
          color: "white",
          cursor: "pointer",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "18px",
          display: "block",
          position: "fixed",
          bottom: "3em",
          right: "3em",
          zIndex: 99,
          "&:hover": {
            backgroundColor: "#ffffff10",
          },
        }}
      >
        <ArrowUpwardIcon />
      </Button>
}
    </>
  );
}

export default ScrollToTop;
