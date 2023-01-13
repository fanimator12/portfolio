import { Container, Button, List, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Background2 from "../components/Background2";
import { getCategories } from "../data/categories";

function Portfolio() {

  const categories = getCategories();
  const [loading, setLoading] = useState(true);

  function componentDidMount() {
    setTimeout(function () {
      setLoading(false)
    }.bind(loading), 1000)
  }

  const initLoad = async () => {
    if (categories != null) {
      await getCategories();
      componentDidMount();
    }
  };

  useEffect(() => {
    initLoad();
    document.title = "portfolio | fanimator";
  });

  return (
    <>
      {loading ? (
        <LinearProgress
          color="secondary"
          sx={{
            borderRadius: "5px",
            width: "60px",
            height: "2px",
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
          }}
        />
      ) :
        categories !== undefined ? (
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
                          fontSize: { xs: "40px", md: "50px" },
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
        ) : (
          <Typography
            color="#fff"
            className="reveal"
            sx={{
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
            }}
          >
            Oops! <br></br> Nothing's here.
          </Typography>
        )}
    </>
  );
}

export default Portfolio;