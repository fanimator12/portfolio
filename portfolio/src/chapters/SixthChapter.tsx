import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function SixthChapter() {
    return (
        <ParallaxLayer
            offset={9}
            speed={0.5}
            style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                zIndex: 6,
                marginTop:"-8em"
            }}>
                <Typography
                    className="title"
                    color="rgba(255, 255, 255, 0.3)"
                    sx={{
                        float:"right",
                        textAlign: "right",
                        fontFamily: "Ghibli",
                        textTransform: "none",
                        fontSize: "32px",
                        paddingRight:"16em",
                        display: "inline-block",
                    }}
                >
                    If you would like to learn more{" "}
                    <a className="hover-underline-animation2" href="/about" style={{ color: "#fff", textDecoration: "none", fontWeight:"600"}}>
                        about
                    </a>{" "}me, <br />please feel free to read further.
                </Typography>
        </ParallaxLayer>
    );
}
export default SixthChapter;