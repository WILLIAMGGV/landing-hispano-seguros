"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Menufixed from "./menufixed";

export default function Menus() {
  

  return (
    <>
      {/* Fondo curvo */}
      <div
        className="relative fondo-banner w-full h-[80vh] md:h-screen mont-bold flex flex-col place-content-center justify-center items-center banner-shape"
        style={{
          fontSize: "24px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[30%_50%] gap-4 w-full place-content-center items-center">
          {/* LOGO */}
          <div className="p-4 flex flex-row place-content-center justify-center items-center">
            <img
              src="/images/logo2.png"
              className="w-[200px] md:w-full"
              alt="Logo"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-row place-content-center items-center justify-center">
            <div className="p-4 flex flex-col place-content-start justify-start items-start">
              <span className="text-white text-[24px] md:text-[40px]">
                Más que Seguros
              </span>

              <span className="text-white text-[28px] md:text-[52px] mt-[-10px] md:mt-[-20px]">
                Somos tu{" "}
                <span
                  className="text-[var(--azul-claro)]"
                  style={{ textShadow: "4px 4px 6px #000000" }}
                >
                  APOYO
                </span>
              </span>

              <span className="text-white text-[32px] md:text-[60px] mt-[-10px] md:mt-[-30px] z-10 relative">
                En Estados Unidos
              </span>

              <span className="bg-[var(--azul-claro)] text-[10px] md:text-[14px] p-1 rounded-lg mt-[-10px] md:mt-[-20px] relative z-0">
                Conectamos contigo para proteger lo que más importa: tu Salud,
                tu familia y tu futuro.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[20px] md:mt-[-60px]">
          <img src="/images/flechaabajo.png" width="70px" className="w-[50px] md:w-[70px] animacion-arriba-abajo"  />
        </div>
      </div>
      {/* MENÚ fijo encima del fondo */}
      <Menufixed />
      {/* Espacio compensatorio para que no tape contenido debajo */}

      
      
    </>
  );
}
