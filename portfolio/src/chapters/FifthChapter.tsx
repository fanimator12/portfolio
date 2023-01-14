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
                        textTransform: "none",
                        fontSize: { xs: "20px", md: "30px" },
                        padding: "60px"
                    }}
                >
                    Furthermore, I hold a great admiration for<br/>Japanese anime as an art form, especially for Studio Ghibli.
                </Typography>
            </div>
        </ParallaxLayer>
    );
}
export default FifthChapter;