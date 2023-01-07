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
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.title = "home | fanimator";
    });

    return (
        <Parallax pages={9} className="parallax">
            <DeepSpace />
            <Background />
            <Introduction />
            <FirstChapter />
            <Mountains />
            <Castle />
            <Land />
            <ScrollBackButton />
            <Outlet />
        </Parallax>
    );
}
export default Home;