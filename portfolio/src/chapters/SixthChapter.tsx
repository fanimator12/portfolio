import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function SixthChapter() {
    return (
        <ParallaxLayer
            offset={9}
            speed={0.5}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                zIndex: 6,
            }}>
            <Typography
                className="title"
                sx={{
                    color: { xs: "rgba(255, 255, 255, 0.6)", md: "rgba(255, 255, 255, 0.3)" },
                    fontFamily: "Ghibli",
                    textTransform: "none",
                    fontSize: { xs: "20px", md: "30px" },
                    textAlign: { md: "center", xl: "right" },
                    display: "inline-block",
                    paddingBottom: "10em",
                    paddingLeft: {sm:0, md:"2em",xl:"15em"}
                }}
            >
                If you would like to learn more{" "}
                <a className="hover-underline-animation2" href="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}>
                    about
                </a>{" "}me, <br />please feel free to read further.
            </Typography>
        </ParallaxLayer>
    );
}
export default SixthChapter;