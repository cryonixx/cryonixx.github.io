// import { useState } from "react";
// import { useRef } from "react";

function Window(this: any, props: {
    size: [number, number];
    position: [number, number];
    frozen: boolean;
    title: string;
    children: React.ReactNode;
}) {
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
                "bg-gradient-to-r from-[#97ADD7] via-[#DEE5F2] to-[#97ADD7]",
                "drop-shadow-[5px_5px_0px_rgba(0,0,0,0.5)]",
                "p-0.5",
                // "rounded",
                "shadow-[inset_0px_0px_10px_white]",
                "rounded"
                //to note: always make sure the commas don't have spaces between and there is 'px' at the end
                //^from stackoverflow^
                //preset colors work too; for hex, always add two additional digits for opacity
            ].join(" ")}
        >
            <div
                className={[
                    "p-1",
                    "relative",
                    "overflow-auto"
                    ].join(" ")}
                    >
                <p>{props.title}</p>
            </div>
            <div className="p-1">
                {props.children}
            </div>
        </div>

    );
}

export default Window;
