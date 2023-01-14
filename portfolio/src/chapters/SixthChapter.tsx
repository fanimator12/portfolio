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
                zIndex: 1
            }}>
            <Typography
                className="title"
                sx={{
                    color: { xs: "rgba(255, 255, 255, 0.6)", md: "rgba(255, 255, 255, 0.3)" },
                    fontFamily: "Ghibli",
                    textTransform: "none",
                    fontSize: { xs: "20px", md: "30px" },
                    textAlign: "center",
                    display: "inline-block",
                    padding: "6",
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