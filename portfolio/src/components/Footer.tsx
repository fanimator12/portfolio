import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                display: { xs: "flex" },
            }}
            className="copyright-box"
        >
            <Typography
                color="#7a7a7a"
                sx={{
                    float: "right",
                    fontSize: "12px",
                    fontFamily: "ChakraPetch Light"
                }}>
                Created with: ReactJS, Vite.js, Typescript, Material UI
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/" style={{ color: "#7a7a7a", textDecoration: "none" }}>fanimator. All Rights Reserved.</a>
            </Typography>
        </Box>
    );
}
export default Footer;