import MenuIcon from "@mui/icons-material/Menu";
import { Grid, AppBar, Link, Toolbar, Button, IconButton, Box } from '@mui/material';
import NavDrawer from './NavDrawer';
import HeaderProps from '../models/Header';
import NavLink from './NavLink';
import { getSections } from './sections';

function Header({ handleDrawerToggle, mobileOpen }: HeaderProps) {

  const sections = getSections();

  return (
      <AppBar
      position="fixed"
        sx={{
          background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
          boxShadow: 0,
          paddingTop: "0.5em",
        }}
      >
        <Toolbar>
          <Grid container display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Grid
              container
              justifyContent="flex-start"
              sx={{ padding: "1em 0 0 1em" }}
            >
              <Grid item>
                <Button
                  sx={{
                    transition: "none",
                    color: "transparent",
                    "& .MuiTypography-root": {
                      fontSize: "20px",
                      textTransform: "lowercase",
                      fontFamily: "ChakraPetch Regular"
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Link sx={{ color: "#fff" }} href="/" underline="none">
                    fanimator
                  </Link>
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="flex-end"
              sx={{ marginTop: "-55px" }}
            >
              <Grid item>
                <Box>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      display: { sm: "none" },
                      paddingTop: "0.8em",
                      marginLeft: "0.5em",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  {mobileOpen ? (
                    <NavDrawer
                      handleDrawerToggle={handleDrawerToggle}
                      mobileOpen={mobileOpen}
                    />
                  ) : (
                    ""
                  )}
                </Box>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    marginLeft: "10px",
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      transition: "none",
                      color: "transparent",
                      "& .MuiTypography-root": {
                        fontSize: "40px",
                        textTransform: "lowercase",
                        fontFamily: "ChakraPetch Regular"
                      },
                      "& .MuiListItemButton-root:hover" :{
                        backgroundColor: "transparent",
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {sections.map((section: { title: string; url: string }) => (
                      <NavLink key={section.title} title={section.title} url={section.url} />
                    ))}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
}

export default Header;