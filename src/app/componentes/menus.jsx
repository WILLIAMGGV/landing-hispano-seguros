"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Menufixed from "./menufixed";

export default function Menus({idioma}) {
  

  return (
    <>
      {/* Fondo curvo */}
      <div
        className="relative fondo-banner w-full h-[80vh] md:h-screen mont-bold flex flex-col place-content-center justify-center items-center banner-shape"
        style={{
          fontSize: "24px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[50%] gap-4 w-full place-content-center items-center">
          {/* LOGO */}
          

          {/* Texto */}
          <div className="mt-[280px] md:mt-[200px] 2xl:mt-[280px] flex flex-row place-content-center items-center justify-center">
            <div className="p-4 flex flex-col place-content-start justify-start items-start">
              <span className="text-white text-[24px] md:text-[40px] 2xl:text-[55px]">
                {idioma == 'es' ? ('Más que Seguros') : ('More than Insurance')}
              </span>

              <span className="text-white text-[28px] md:text-[52px] 2xl:text-[67px] mt-[-10px] md:mt-[-20px]">
                {idioma == 'es' ? ('Somos tu') : ('We are your')}{" "}
                <span
                  className="text-[var(--azul-claro)]"
                  style={{ textShadow: "4px 4px 6px #000000" }}
                >
                  {idioma == 'es' ? ('APOYO') : ('SUPPORT')}
                </span>
              </span>

              <span className="text-white text-[32px] md:text-[60px] 2xl:text-[75px] mt-[-10px] md:mt-[-30px] z-10 relative">
                {idioma == 'es' ? ('En Estados Unidos') : ('In the United States')}
              </span>

              <span className="bg-[var(--azul-claro)] text-[10px] md:text-[14px] 2xl:text-[18px] p-1 rounded-lg mt-[-10px] md:mt-[-20px] relative z-0">
                {idioma == 'es' ? ('Conectamos contigo para proteger lo que más importa: tu Salud, tu familia y tu futuro.') : ('We connect with you to protect what matters most: your health, your family and your future.')}
                
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[80px] md:mt-[60px]">
          <img src="/images/flechaabajo.png" width="70px" className="w-[50px] md:w-[70px] animacion-arriba-abajo"  />
        </div>
      </div>
      {/* MENÚ fijo encima del fondo */}
      <Menufixed idioma={idioma} />
      {/* Espacio compensatorio para que no tape contenido debajo */}

      
      
    </>
  );
}
