import { Container, ImageList, ImageListItem, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { srcset } from "../components/srcset";
import { getPhotos } from "../data/photos";

function Photography() {

    const photos = getPhotos();

    const [loading, setLoading] = useState(true);

    function componentDidMount() {
        setTimeout(function () {
            setLoading(false)
        }.bind(loading), 1000)
    }

    const initLoad = async () => {
        if (photos != null) {
            await getPhotos();
            componentDidMount();
        }
    };

    useEffect(() => {
        initLoad();
        document.title = "photography | fanimator";
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
                photos !== undefined ? (
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
                        Oops! <br></br> Nothing's here.
                    </Typography>
                )}
        </>
    );
}
export default Photography;