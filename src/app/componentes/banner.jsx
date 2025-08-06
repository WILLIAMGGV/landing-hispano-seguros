"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Menufixed from "./menufixed";

export default function Banner({idioma}) {
  

  return (
    <>
      {/* Fondo curvo */}
      <div
        className="relative fondo-banner2 w-full h-[80vh] md:h-screen mont-bold flex flex-col place-content-center justify-center items-center  shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        style={{
          fontSize: "24px",
        }}
      >

        <div className="flex flex-col place-content-center items-center  leading-none">
            <span className="text-[var(--azul-oscuro)] text-[40px] sm:text-[90px] mt-[30%]">{idioma == 'es' ? ('Sobre') : ('About')}</span>
            <span className="text-[var(--azul-oscuro)] text-[60px] sm:text-[150px] mt-[-10px]">{idioma == 'es' ? ('Nosotros') : ('Us')}</span>
        </div>
    
      </div>
      {/* MENÚ fijo encima del fondo */}
      <Menufixed idioma={idioma}/>
      {/* Espacio compensatorio para que no tape contenido debajo */}

      
      
    </>
  );
}
