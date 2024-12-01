"use client"

import { useState } from "react";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null); // Estado para controlar el tooltip activo

  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max top-10">
      <nav>
        <div className="flex items-center justify-center gap-3 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary relative`}
              onMouseEnter={() => setActiveTooltip(item.id)} // Activar tooltip al pasar el mouse
              onMouseLeave={() => setActiveTooltip(null)} // Desactivar tooltip al salir el mouse
            >
              <Link href={item.link}>
                {item.icon}
              </Link>
              {activeTooltip === item.id && (
                <div className="tooltip">{item.tooltip}</div> // Mostrar tooltip solo cuando el ítem es el activo
              )}
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
}

export default Navbar;
