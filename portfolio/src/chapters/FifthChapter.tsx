import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function FifthChapter() {
    return (
        <ParallaxLayer
            offset={8}
            speed={0.5}
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center"
            }}>
            <div>
                <Typography
                    className="title"
                    color="#fff"
                    sx={{
                        fontFamily: "Ghibli",
                        textTransform: "lowercase",
                        fontSize: "50px",
                        padding: "60px"
                    }}
                >
                    Lastly, I admire Ghibli Studio and anime in general
                </Typography>
            </div>
        </ParallaxLayer>
    );
}
export default FifthChapter;