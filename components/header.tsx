import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-30 inline-block w-full top-10 md:top-10 px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href={"/"}>
                        <h1 className="my-3 text-6xl font-bold text-center md:text-left">
                            <span className="text-3d-primary">ZaBa</span>
                            <span className="text-3d-secondary">DeV</span>
                        </h1>
                    </Link>

                    {/* Contenedor de los íconos de redes sociales */}
                    <div className="fixed right-0 top-20 flex flex-col items-end gap-4 md:top-10 md:right-4 md:flex-row md:items-center md:justify-end md:fixed">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary md:text-xl text-lg"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
