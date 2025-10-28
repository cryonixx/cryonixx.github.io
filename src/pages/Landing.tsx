import { Link } from "react-router";
import background from "../assets/img/background.png";
import Window from "../components/Window";
import "../index.css";

const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
};

function Landing() {
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
                <Window
                    size={[600, 400]}
                    position={[475, 100]}
                    frozen={false}
                    title="A warm welcome to a place so chilly!! (˶ˆᗜˆ˵)"
                >
                    <div className="flex items-center flex-col">
                        <h1 className="text-darker-powderblue font-jackey text-center text-4xl">
                            ようこそ！!
                        </h1>
                        <p className="text-center">
                            <i>Before you enter...</i>
                        </p>

                        <p className="text-center text-xl">
                            <br></br>
                            This site was primarily coded on a 1920 × 1080
                            display monitor with Firefox; therefore, it may not
                            display properly in different resolutions. This site
                            is also best viewed with a computer, and is NOT
                            mobile friendly. You can still access the site using
                            mobile, however, it will be janky and do so at your
                            own risk.
                        </p>

                        <p className="text-center text-xl">
                            <br></br>
                            There will be changes here and there, and this will
                            be perpetually under construction. I created this
                            website for personal use in mind, therefore, is
                            incredibly informal; however, if you wish to see my
                            works and intend to connect with me for business
                            purposes, feel free to visit{" "}
                            <Link
                                to={"/404"}
                                className="text-darker-powderblue"
                            >
                                my portfolio site
                            </Link>{" "}
                            instead where I provide a more comprehensive and
                            professional view of my skills and such.<br></br>
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
                                    "text-darker-powderblue",
                                ].join(" ")}
                            >
                                Enter the silly place!{" "}
                            </button>
                        </Link>
                    </div>
                </Window>
            </div>
        </div>
    );
}

export default Landing;
