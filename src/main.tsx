import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import background from "./assets/img/background.png";
import Window from "./components/Window";
import "./index.css";
import SplashText from "./components/SplashText";

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
                content={<SplashText />}
            />
        </div>
    </StrictMode>
);
