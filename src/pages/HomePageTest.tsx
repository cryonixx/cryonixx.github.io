// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import background from "../assets/img/background.png";
import logo from "../assets/img/logo.png";
import cirno from "../assets/img/cirno_standing.png";
import cirnobanner from "../assets/img/cirno_banner.gif";
import snowmiku from "../assets/img/snow_miku.png";
import Window from "../components/Window";
import "../index.css";
import SplashText from "../components/SplashText";
// import ToDo from "../components/ToDo";
import Updates from "../components/Updates";
import MusicEmbed from "../components/MusicEmbed";
import Introduction from "../components/Introduction";
import Me from "../components/Me";
import NavigationMenu from "../components/NavigationMenu";
// import DiscordEmbed from "./components/DiscordEmbed";

const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
};

function HomePageTest() {
    return (
        <div
            className={[
                "fixed",
                "top-0",
                "left-0",
                "w-screen",
                "h-screen",
                "z-[-1]",
                "bg-cover",
                "bg-center",
                "padding-top-0",
                "margin-top-0",
            ].join(" ")}
            style={bgStyle}
        >
            <div className="overflow-auto w-full h-full relative z-0">
                <img
                    className="z-10 relative w-100 h-auto drop-shadow-[5px_5px_5px_#465577CC] left-175 top-1"
                    src={logo}
                ></img>
                <img
                    className="z-0 absolute w-75 h-auto drop-shadow-[5px_5px_5px_#465577CC] left-85 top-1"
                    src={snowmiku}
                ></img>
                <img
                    className="z-10 absolute w-35 h-auto drop-shadow-[5px_5px_5px_#465577CC] left-95 top-120 animate-bounce"
                    src={cirno}
                ></img>
                <img
                    className="z-10 absolute w-73 h-auto drop-shadow-[5px_5px_5px_#465577CC] left-195.5 top-180  border-4 border-white rounded"
                    src={cirnobanner}
                ></img>

                <Window
                    size={[600, 400]}
                    position={[475, 100]}
                    frozen={false}
                    title="Hello There :O"
                >
                    <SplashText />
                </Window>

                <Window
                    size={[300, 300]}
                    position={[475, 505]}
                    frozen={false}
                    title="Navigation ☜(°▽°)☛"
                >
                    <NavigationMenu />
                </Window>

                <Window
                    size={[290, 200]}
                    position={[785, 505]}
                    frozen={false}
                    title="What's been up? :> (NEW!!!!)"
                >
                    <Updates />
                </Window>

                <Window
                    size={[300, 300]}
                    position={[1045, 300]}
                    frozen={false}
                    title="Tunes I've been listening to d(-_-)b"
                >
                    <MusicEmbed />
                </Window>

                <Window
                    size={[600, 300]}
                    position={[475, 810]}
                    frozen={false}
                    title="About me :3"
                >
                    <Introduction />
                </Window>

                <Window
                    size={[300, 300]}
                    position={[450, 870]}
                    frozen={false}
                    title="Me.png"
                >
                    <Me />
                </Window>

                <img></img>
            </div>
        </div>
    );
}

export default HomePageTest;
