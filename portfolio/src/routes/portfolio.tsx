import { Container, Button, List } from "@mui/material";
import { useEffect } from "react";
import Background2 from "../components/Background2";
import { getCategories } from "../data/categories";

function Portfolio() {

  const categories = getCategories();

  useEffect(() => {
    document.title = "portfolio | fanimator";
  });

  return (
    <>
      <Background2 />
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
            <>
              <List>
                <Button
                  sx={{
                    zIndex: 5,
                    color: "#fff",
                    width: "auto",
                    border: "1px solid transparent",
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
            </>
          );
        })}

      </Container>
    </>
  );
}

export default Portfolio;