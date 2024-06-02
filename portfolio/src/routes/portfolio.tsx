import {
  Container,
  Button,
  List,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PortfolioBackground from "../components/PortfolioBackground";
import { Category, getCategories } from "../data/categories";

function Portfolio() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [backgroundLoading, setBackgroundLoading] = useState<boolean>(true);

  const fetchCategories = async () => {
    const categoriesData = await getCategories();
    setCategories(categoriesData);
  };

  useEffect(() => {
    const initLoad = () => {
      handleBackgroundLoad();
      fetchCategories();
      setLoading(false);
    };

    initLoad();
    document.title = "portfolio | fanimator";
  }, []);

  const handleBackgroundLoad = () => {
    setBackgroundLoading(false);
  };

  return (
    <>
      {loading || backgroundLoading ? (
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
      ) : (
        <>
          <PortfolioBackground
            loading={backgroundLoading}
            onBackgroundLoad={handleBackgroundLoad}
          />
          {categories.length > 0 ? (
            <Container
              sx={{
                display: { xs: "block" },
                paddingTop: "10em",
                height: "auto",
                paddingBottom: "5em",
              }}
            >
              {categories.map((category: Category) => (
                <List key={category.title}>
                  <Button
                    sx={{
                      zIndex: 5,
                      color: "#fff",
                      width: "auto",
                      border: "1px solid transparent",
                      textTransform: "none",
                      fontSize: { xs: "35px", md: "50px" },
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
                      },
                    }}
                  >
                    <a
                      href={category.url}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      {category.title}
                    </a>
                  </Button>
                </List>
              ))}
            </Container>
          ) : (
            <Typography
              color="#fff"
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
              Oops! <br /> Nothing's here.
            </Typography>
          )}
        </>
      )}
    </>
  );
}

export default Portfolio;
