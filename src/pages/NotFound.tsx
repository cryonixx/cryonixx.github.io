import { Link } from "react-router";
import background from "../assets/img/background.png";
import Window from "../components/Window";
import cirnoconfused from "../assets/img/cirno_confused909.gif";
import "../index.css";

const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
};

function NotFound() {
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
            <div className="overflow-auto w-full h-full relative z-0 flex justify-center">
                <Window
                    size={[600, 460]}
                    position={[475, 100]}
                    frozen={false}
                    title="Uh Oh !! (ᗒᗣᗕ)"
                >
                    <div
                    className="flex items-center flex-col">
                        <h1 className="text-darker-powderblue font-jackey text-center text-4xl">
                            あ-!
                        </h1>
                        <p className="text-center">
                            <i>Where are you?</i>
                        </p>
                        <img
                            className="w-auto h-50 border-4 border-mid-powderblue rounded mx-auto"
                            src={cirnoconfused}>
                        </img>
                        <p className="text-center text-xl">
                            Page is either non-existent (like my dad), or you encountered an error. Either way; you're in the wrong place!! :(
                        </p>
                        <Link to="/home">
                        <button
                            className={[
                                "rounded",
                                "bg-gradient-to-r",
                                "from-mid-powderblue",
                                "via-light-powderblue",
                                "to-mid-powderblue",
                                "border-4",
                                "border-l-white",
                                "border-t-white",
                                "border-b-dark-powderblue",
                                "border-r-dark-powderblue",
                                "drop-shadow-[2px_2px_2px_#465577BB]",
                                "p-1",
                                "text-darker-powderblue"
                            ].join(" ")}
                        >
                           Go back{" "}
                        </button>
                        </Link>
                    </div>
                </Window>
            </div>
        </div>
    );
}

export default NotFound;
