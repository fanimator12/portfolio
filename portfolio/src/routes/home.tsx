import { Outlet } from "react-router-dom";
import Castle from "../components/Castle";
import Background from "../components/Background";
import DeepSpace from "../components/DeepSpace";
import Introduction from "../chapters/Introduction";
import Mountains from "../components/Mountains";
import Land from "../components/Land";
import FirstChapter from "../chapters/FirstChapter";
import ScrollBackButton from "../components/ScrollBackButton";
import { Parallax } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import { Container, LinearProgress } from "@mui/material";
import SecondChapter from "../chapters/SecondChapter";
import Galaxy1 from "../components/Galaxy1";
import Nebula2 from "../components/Nebula2";
import Webb1 from "../components/Webb1";
import Nebula from "../components/Nebula";
import Blackhole from "../components/Blackhole";
import Supernova from "../components/Supernova";
import Galaxy2 from "../components/Galaxy2";
import SpaceStation from "../components/SpaceStation";
import OrionSpaceShuttle from "../components/OrionSpaceShuttle";
import JamesWebb from "../components/JamesWebb";
import PhotoCarousel from "../components/PhotoCarousel";
import ThirdChapter from "../chapters/ThirdChapter";
import ForthChapter from "../chapters/ForthChapter";
import FifthChapter from "../chapters/FifthChapter";
import SixthChapter from "../chapters/SixthChapter";

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
                    </Container>
                    <Background />
                    <Galaxy1 />
                    <Webb1 />
                    <OrionSpaceShuttle />
                    <Introduction />
                    <Blackhole />
                    <FirstChapter />
                    <Nebula2 />
                    <Nebula />
                    <Galaxy2 />
                    <SecondChapter />
                    <Supernova />
                    <JamesWebb />
                    <SpaceStation />
                    <ThirdChapter />
                    <ForthChapter />
                    <PhotoCarousel />
                    <FifthChapter />
                    <SixthChapter />
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