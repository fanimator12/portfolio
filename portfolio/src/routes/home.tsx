import { Outlet } from "react-router-dom";
import Castle from "../components/Castle";
import Background from "../components/Background";
import DeepSpace from "../components/DeepSpace";
import Introduction from "../chapters/Introduction";
import Mountains from "../components/Mountains";
import Land from "../components/Land";
import FirstChapter from "../chapters/FirstChapter";
import ScrollBackButton from "../components/ScrollBackButton";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import galaxy1 from "../photos/galaxy1.png";
import nebula from "../photos/nebula.png";
import nebula2 from "../photos/nebula2.png";
import orionSpaceShuttle from "../photos/orion-space-shuttle.png";
import jamesWebb from "../photos/james-webb.png";
import blackhole from "../photos/blackhole.png";
import { Container, LinearProgress } from "@mui/material";

function Home() {

    const [loading, setLoading] = useState(true);

    function componentDidMount() {
        setTimeout(function () {
            setLoading(false)
        }.bind(loading), 1000)
    }

    const initLoad = async () => {
        await componentDidMount();
    }

    useEffect(() => {
        initLoad();
        document.title = "home | fanimator";
    });

    return (
        <>
            {loading ? (
                <LinearProgress
                    color="secondary"
                    sx={{
                        borderRadius: "5px",
                        width: "60px",
                        height: "2px",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                />
            ) : (
                <Parallax pages={10} className="parallax">
                    <DeepSpace />
                    <Container
                        sx={{
                            display: { xs: "block" },
                            padding: "20px",
                        }}
                    >
                        <ParallaxLayer
                            offset={0.15}
                            speed={1}
                        >
                            <img src={galaxy1}
                                style={{
                                    float: "right",
                                    width: "30em",
                                }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={2}
                            style={{
                                zIndex: 50
                            }}
                        >
                            <img src={orionSpaceShuttle}
                                style={{
                                    padding: "10em",
                                    justifyContent: "center",
                                    width: "22em",
                                }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1.4}
                            speed={2.3}
                            style={{
                                zIndex: 50
                            }}

                        >
                            <img src={jamesWebb}
                                style={{
                                    float: "right",
                                    padding: "10em",
                                    justifyContent: "center",
                                    transform: "rotate(330deg)",
                                    width: "30em",
                                }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            speed={1}
                        >
                            <img src={nebula}
                                style={{
                                    float: "left",
                                    padding: "10em",
                                    width: "25em",
                                }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2}
                            speed={1.2}
                        >
                            <img src={blackhole}
                                style={{
                                    width: "40em",
                                    transform: "rotate(10deg)",
                                }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.9}
                            speed={1}
                        >
                            <img src={nebula2}
                                style={{
                                    padding: "10em",
                                    float: "right",
                                    width: "20em",
                                }} />
                        </ParallaxLayer>
                    </Container>
                    <Background />
                    <Introduction />
                    <FirstChapter />
                    <Mountains />
                    <Castle />
                    <Land />
                    <ScrollBackButton />
                    <Outlet />
                </Parallax>
            )}
        </>
    );
}
export default Home;