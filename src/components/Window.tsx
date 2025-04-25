// import { useState } from "react";

// import { useRef } from "react";

function Window(this: any, props: {
    size: [number, number];
    position: [number, number];
    frozen: boolean;
    title: string;
    content: React.ReactNode;
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

    const titleBarStyle = {
        border: '0.2 px solid #97ADD7',
        backgroundColor: 'white',
        padding: '0.25rem', // Equivalent to Tailwind's p-1
        borderRadius: '0.04rem', // Equivalent to Tailwind's rounded-sm
        boxShadow: 'inset 0 2px 4px 0 rgb(97 126 184)', // The inset shadow style
        backgroundImage: 'linear-gradient(to top, #DEE5F2, #97ADD7, #DEE5F2)',
      };

    return (
            <div
            style={windowStyle}
            className={[
                "absolute",
                "border-[#617EB8]",
                "bg-[#e2e7f2]",
                "border",
                "drop-shadow-md",
                "shadow-[inset_0px_2px_4px_rgba(0,0,0,0.2)]",
                "p-0.5",
                "rounded-sm"
            ].join(" ")}
        >
            <div
                // className={[
                //     "border-[#97ADD7]",
                //     "border-2",
                //     "bg-white",
                //     // "bg-gradient-to-t from-[#DEE5F2] via-[#97ADD7] to-[#DEE5F2]",
                //     "inset-shadow-[#617EB8]",
                //     "p-1",
                //     "rounded-sm",
                //     "relative"
                //     ].join(" ")}
                style={titleBarStyle}
                    >
                <p>{props.title}</p>
            </div>
            <div className="p-1">
                {props.content}
            </div>
        </div>

    );
}

export default Window;
