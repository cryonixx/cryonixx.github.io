import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import background from "./assets/img/background.png";
import Window from "./components/Window";
import "./index.css";
import SplashText from "./components/SplashText";
import ToDo from "./components/ToDo";
import Updates from "./components/Updates";
import MusicEmbed from "./components/MusicEmbed";

const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div
            className={[
                "fixed",
                "top-0",
                "left-0",
                "w-screen",
                "h-screen",
                "z-[-1]",
                "bg-cover",
                "bg-center"
            ].join(" ")}
            style={bgStyle}
        >
            <Window
                size={[300, 500]}
                position={[50, 50]}
                frozen={false}
                title="Hello There :O"
            >
                <SplashText />
            </Window>

            <Window
                size={[300, 300]}
                position={[375, 50]}
                frozen={false}
                title="Shit that needs to be done >:("
            >
                <ToDo/>
            </Window>

            <Window
                size={[300, 200]}
                position={[375, 355]}
                frozen={false}
                title="What's been up? :>"
            >
                <Updates/>
            </Window>

            <Window
                size={[300, 200]}
                position={[700, 50]}
                frozen={false}
                title="Tunes I've been listening to d(-_-)b"
            >
                <MusicEmbed/>
            </Window>
        </div>
    </StrictMode>
);
