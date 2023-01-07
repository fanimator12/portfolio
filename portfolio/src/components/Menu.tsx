import { Box, Button } from "@mui/material";
import { getSections } from "./sections";

function Menu() {

    const sections = getSections();

    return (
        <Box className="top-banner">
            {sections.map((section) => (
                <Button sx={{ marginLeft: "40px", color: "#fff", textTransform: "lowercase" }}>
                    {section.title}
                </Button>
            ))}
        </Box>
    );
}
export default Menu;