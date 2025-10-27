import background from "../assets/img/patchpins/denim_bg.png";
import backpatch from "../assets/img/patchpins/accessories/starpatch.png";
import heartpatch from "../assets/img/patchpins/accessories/heartpatch.png";
import drumpatch from "../assets/img/patchpins/accessories/drumpatch.png";
import guitarpin from "../assets/img/patchpins/accessories/guitarpin.png";
import ptv from "../assets/img/patchpins/bands/ptv.png";
import sio1 from "../assets/img/patchpins/bands/sio_pin.png";
import sio2 from "../assets/img/patchpins/bands/sio_logo.png";
import getscared from "../assets/img/patchpins/bands/getscared.png";
import metallica from "../assets/img/patchpins/bands/metallica.png";
import tdg from "../assets/img/patchpins/bands/threedaysgrace.png";
import oor from "../assets/img/patchpins/bands/oneokrock.png";
import mfs from "../assets/img/patchpins/bands/mfs.png";
import coldrain from "../assets/img/patchpins/bands/coldrain.png";
import "../index.css";
import { Link } from "react-router";

const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
};
function Bands() {
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
            <div className="overflow-hidden w-full h-full relative z-2 m-5">
                <img
                    className="absolute w-55 h-auto rotate-365 drop-shadow-[5px_5px_5px_#171716CC] left-1 top-1 z-[-1]"
                    src={heartpatch}
                ></img>
                <h1 className="rotate-358 font-embroidery text-9xl text-center text-white z-2">
                    bands i really like
                </h1>
                <p className="text-center text-white z-2 rotate-0.5">
                    Basically bands whose songs I listen to at an unhealthy
                    amount. I am very broke and cannot afford to buy actual
                    pins/patches/badges so....
                </p>
                <img
                    className="absolute w-20 h-auto rotate-45 drop-shadow-[5px_5px_5px_#171716CC] left-20 top-1"
                    src={guitarpin}
                ></img>
                <img
                    className="absolute w-65 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-315 top-1 z-[-1]"
                    src={drumpatch}
                ></img>
                <img
                    className="absolute w-40 h-auto rotate-2 drop-shadow-[5px_5px_5px_#171716CC] left-80 top-45 hover:rotate-355"
                    src={ptv}
                    title="Pierce the Veil. My most recently discovered band, and quickly became my most played band. My favorite and most played song from them is Today I saw the Whole World."
                ></img>
                <img
                    className="absolute w-35 h-auto rotate-10 drop-shadow-[5px_5px_5px_#171716CC] left-100 top-90 hover:rotate-355"
                    src={getscared}
                ></img>
                <img
                    className="absolute w-35 h-auto drop-shadow-[5px_5px_5px_#171716CC] left-165 top-75 hover:rotate-360 transition"
                    src={sio1}
                    title="Yet another Set it Off pin. I added this because it apparently spins and that just sounded so fun :D"
                ></img>
                <img
                    className="absolute w-85 h-auto rotate-5 drop-shadow-[5px_5px_5px_#171716CC] left-165 top-125 hover:rotate-355"
                    src={sio2}
                    title="Set It Off"
                ></img>
                <img
                    className="absolute w-80 h-auto rotate-1 drop-shadow-[5px_5px_5px_#171716CC] left-145 top-50 hover:rotate-355"
                    src={metallica}
                ></img>
                <img
                    className="absolute w-75 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-15 top-85 hover:rotate-355"
                    src={tdg}
                ></img>
                <img
                    className="absolute w-25 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-245 top-50 hover:rotate-355"
                    src={oor}
                ></img>
                <img
                    className="absolute w-75 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-60 top-135 hover:rotate-355"
                    src={mfs}
                ></img>
                <img
                    className="absolute w-45 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-235 top-80 hover:rotate-355"
                    src={coldrain}
                ></img>
                <img
                    className="sticky w-95 h-auto rotate-350 drop-shadow-[5px_5px_5px_#171716CC] left-300 top-95 hover:rotate-335"
                    src={backpatch}
                ></img>
                <Link to="/">
                    <button className="absolute rotate-350 text-white hover:scale-1.5 hover:rotate-335 left-320 top-120 font-embroidery text-4xl">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Bands;
