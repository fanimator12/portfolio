import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function LanguagesChapter() {
    return (
        <>
            <ParallaxLayer
                offset={4}
                speed={0.5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: "20em"
                }}>
                <div>
                    <Typography
                        className="title"
                        color="#fff"
                        sx={{
                            fontFamily: "Ghibli",
                            textTransform: "none",
                            fontSize: { xs: "20px", md: "30px" },
                            padding: "60px"
                        }}
                    >
                        I am proficient in 3 languages:<br />Hungarian, Romanian and English
                    </Typography>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={5}
                speed={0.5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: "20em"
                }}>
                <div>
                    <Typography
                        className="title"
                        color="#fff"
                        sx={{
                            fontFamily: "Ghibli",
                            textTransform: "none",
                            fontSize: { xs: "20px", md: "30px" },
                            padding: "60px"
                        }}
                    >
                        What's more,<br/>I also have a background in studying French and Danish,
                    </Typography>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={5.9}
                speed={0.5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: "20em"
                }}>
                <div>
                    <Typography
                        className="title"
                        color="#fff"
                        sx={{
                            fontFamily: "Ghibli",
                            textTransform: "none",
                            fontSize: { xs: "20px", md: "30px" },
                            padding: "60px"
                        }}
                    >
                        and am currently working to expand my language proficiency to include Portuguese.
                    </Typography>
                </div>
            </ParallaxLayer>
        </>

    );
}
export default LanguagesChapter;