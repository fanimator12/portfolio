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
                textAlign: "center",
                alignItems: "center",
                flexDirection: "row",
                zIndex: 6,
            }}>
                <Typography
                    className="title"
                    color="#fff"
                    sx={{
                        fontFamily: "Ghibli",
                        textTransform: "lowercase",
                        fontSize: "50px",
                        padding: "60px",
                        display: "inline-block",
                    }}
                >
                    wanna know more?<br /> read{" "}
                    <a className="hover-underline-animation2" href="/about" style={{ color: "#fff", textDecoration: "none", fontWeight:"600" }}>
                        about
                    </a>{" "}me!
                </Typography>
        </ParallaxLayer>
    );
}
export default SixthChapter;