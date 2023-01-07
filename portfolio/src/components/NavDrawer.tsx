import { Box, Drawer } from "@mui/material";
import NavLink from "./NavLink";
import Header from "../models/Header";
import { getSections } from "./sections";

const NavDrawer = ({ handleDrawerToggle, mobileOpen }: Header) => {
const sections = getSections();

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "250px",
          backgroundColor: "#000",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        {sections.map((navItem: { title: string; url: string }) => (
          <NavLink key={navItem.title} title={navItem.title} url={navItem.url} />
        ))}
      </Box>
    </Drawer>
  );
};
export default NavDrawer;
