import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import { useEffect } from "react";
import { getPhotos } from "../components/photos";

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function Photography() {

    const photos = getPhotos();

    useEffect(() => {
        document.title = "photography | fanimator";
    });

    return (
        <Container sx={{ paddingTop: "5em", width: "auto", height: "auto", overflowY: 'hidden' }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "auto",
                }}
            >
                <ImageList variant="masonry" gap={80} cols={2}>
                    {photos.map((photo) => {
                        return (
                        <ImageListItem key={photo.img} cols={2}>
                            <img
                                {...srcset(photo.img, 250, 200, 2)}
                                alt={photo.title}
                            />
                        </ImageListItem>
                        );
                    })}
                </ImageList>
            </Container>
        </Container>
    );
}
export default Photography;