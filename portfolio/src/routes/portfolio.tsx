import { Container, Button, List } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import { getCategories } from "../data/categories";
import DeepSpace from "../components/DeepSpace";

function Portfolio() {

  const categories = getCategories();

  useEffect(() => {
    document.title = "portfolio | fanimator";
  });

  return (
    <Parallax pages={1} className="parallax"
    >
      <DeepSpace />
      <Container
        sx={{
          display: { xs: "block" },
          paddingTop: "10em",
          height: "auto",
          paddingBottom: "5em"
        }}
      >
        {categories.map((category: { title: string; url: string }) => {
          return (
            <List>
              <Button
                sx={{
                  color: "#fff",
                  width: "auto",
                  border: "1px solid #0a0a0a",
                  textTransform: "none",
                  fontSize: "50px",
                  fontFamily: "ChakraPetch Bold",
                  transition: "0.5s",
                  borderRadius: "5px",
                  justifyContent: "flex-start",
                  "&:hover": {
                    border: "1px solid #7a7a7a",
                    color: "#fff",
                    borderRadius: "12px",
                    transition: "0.5s",
                  },
                  "& .MuiTypography": {
                    padding: "0 5px 0 5px",
                  }
                }}>
                <a href={category.url} style={{ textDecoration: "none", color: "#fff" }}>
                  {category.title}
                </a>
              </Button>
            </List>
          );
        })}
      </Container>
    </Parallax>
  );
}

export default Portfolio;