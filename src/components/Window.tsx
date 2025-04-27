// import { useState } from "react";
// import { useRef } from "react";
import "../index.css";

function Window(
    this: any,
    props: {
        size: [number, number];
        position: [number, number];
        frozen: boolean;
        title: string;
        children: React.ReactNode;
    }
) {
    // const [position, setPosition] = useState({x: props.position[0], y:props.position[1]})
    // const [cursorPosition, setOffset] = useState({x: 0, y:0});
    // const [isClicked, setClicked] = useState(false);

    const windowStyle = {
        left: `${props.position[0]}px`,
        top: `${props.position[1]}px`,
        width: `${props.size[0]}px`,
        height: `${props.size[1]}px`,
    };

    return (
        <div
            style={windowStyle}
            className={[
                "absolute",
                "bg-gradient-to-r",
                "from-mid-powderblue",
                "via-light-powderblue",
                "to-mid-powderblue",
                "border-4",
                "border-l-white",
                "border-t-white",
                "border-b-dark-powderblue",
                "border-r-dark-powderblue",
                "drop-shadow-[5px_5px_5px_#465577CC]",
                "p-1",
                "shadow-[inset_0px_0px_10px_white]",
                "rounded",
                "overflow-hidden",
                //to note: always make sure the commas don't have spaces between and there is 'px' at the end
                //^from stackoverflow^
                //preset colors work too; for hex, always add two additional digits for opacity
            ].join(" ")}
        >
            <div
                className={[
                    "p-1.5",
                    "h-1/5",
                    "max-h-10",
                    "font-vt323",
                    "text-darker-powderblue",
                ].join(" ")}
            >
                <p>{props.title}</p>
            </div>

            <div
                className={[
                    "rounded",
                    "p-4",
                    "bg-white",
                    "shadow-[inset_0px_0px_10px_#97ADD7CC]",
                    "border-2",
                    "border-mid-powderblue",
                    "overflow-scroll",
                    "h-[calc(100%-3rem)]",
                    "font-vt323",
                    "text-dark-powderblue",
                ].join(" ")}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Window;
