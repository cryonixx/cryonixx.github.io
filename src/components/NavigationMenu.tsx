import "../index.css";
import checkerpattern from "../assets/img/checkerpattern.svg";

function NavigationMenu() {
    return (
        <div className="relative h-full w-full">
            <header className="text-darker-powderblue font-jackey">
                <div className="flex items-center h-6">
                    <h2 className="text-2xl">Menu！！</h2>
                    <div
                        className="flex-1 h-full"
                        style={{
                            backgroundImage: `url(${checkerpattern})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "37px 36px",
                        }}
                    ></div>
                </div>
            </header>
            <nav className="mt-1 ml-3 text-xl overflow-hidden">
                <ul className="font-vt323 text-dark-powderblue flex flex-col gap-0.1 p-1">
                    <li>
                        <a href="#" className="hover:text-darker-powderblue">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-darker-powderblue">
                            Blog & Documentations
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-darker-powderblue">
                            My Creations
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-darker-powderblue transition duration-300 ease-in-out transform"
                        >
                            Links
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-darker-powderblue transition duration-300 ease-in-out transform"
                        >
                            Cool Stuff :0
                        </a>
                    </li>
                </ul>
            </nav>

            <footer
                className="flex-1 absolute bottom-0 left-0 w-full h-6"
                style={{
                    backgroundImage: `url(${checkerpattern})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "36px 36px",
                }}
            ></footer>
        </div>
    );
}

export default NavigationMenu;
