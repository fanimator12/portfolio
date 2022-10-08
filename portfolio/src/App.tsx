import React, { useState, useEffect } from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import sky from "./photos/1.png";
import land from "./photos/2.png";
import mountains from "./photos/3.png";
import castle from "./photos/castlebody.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Canvas } from "@react-three/fiber";
import Sphere from "./sphere";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff">
      {"Copyright © "}
      <Link color="#fff" href="https://mui.com/">
        Franciska Torok
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  return (
    <div>
      {/* <div className="stars" /> */}
      {/* <div className="twinkling" /> */}
      <Parallax
        pages={2}
        style={{
          backgroundImage: `url(${sky})`,
          backgroundSize: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ParallaxLayer>
          <Box className="top-banner">
            <Typography color="#fff" paddingRight="40px">
              fanimator
            </Typography>
            <Typography color="#fff" paddingRight="40px">
              .about()
            </Typography>
            <Typography color="#fff" paddingRight="40px">
              .work()
            </Typography>
            <Typography color="#fff" paddingRight="40px">
              .contact()
            </Typography>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
        className="chapter"
        speed={0.5}
        style={{
          top: "400px",
        }}>
          <div className="title">
            <h1>Hi there!</h1>
          </div>

          <div className="title">
            <h1>I'm Fanimator!</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          style={{
            top: "200px",
          }}
        >
          <img id="castle" src={castle}/>
        </ParallaxLayer> 

        <ParallaxLayer
          className="chapter"
          speed={1.5}
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundSize: "100%",
            height: "100%",
            top: '40em'
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          className="chapter"
          speed={2.5}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "100%",
            height: "100%",
            position: 'absolute',
            marginTop: 'auto',
            bottom: '0',
          }}
        >
          <div id="shadow" />
        </ParallaxLayer>


        {/* <ParallaxLayer className="chapter" offset={3.5} speed={0.5} factor={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
              <Container maxWidth="sm">
                <Typography variant="body1"></Typography>
                <Copyright />
              </Container>
            </Box>
          </Box>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default App;
