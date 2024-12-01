"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-auto w-full h-full bg-darkBg/60">
      <div className="z-50 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <div className="flex pt-20 justify-center items-center">
          <Image
            src="/home-4.png"
            priority
            width="200"
            height="200"
            alt="Profile pic"
            className="w-auto h-auto image-hover-opacity"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="pt-20mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes ImaginarlO,
            <TypeAnimation
              sequence={[
                "puedes programarlO",
                1000,
                "puedes optimizarlO",
                1000,
                "puedes implementarlO",
                1000,
                "puedes desarrollarlO",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Soy Formador Online y Desarrollador Full Stack, apasionado por
            combinar diseño y desarrollo para construir experiencias digitales
            intuitivas, accesibles y con un impacto duradero.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
              <Link
                href="/portfolio"
                className="btn-5 px-10 py-4 text-md w-fit relative overflow-hidden cursor-pointer"
              >
                <span>Ver proyectos</span>
              </Link>
              <Link
                href="/contact"
                className="btn-5 px-10 py-4 text-md w-fit relative overflow-hidden cursor-pointer"
              >
                <span>Contacta conmigo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
