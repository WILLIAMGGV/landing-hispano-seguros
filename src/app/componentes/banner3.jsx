"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Menufixed from "./menufixed";

export default function Banner3() {
  

  return (
    <>
      {/* Fondo curvo */}
      <div
        className="relative bg-[#e9e9e9] w-full h-[70vh] md:h-[70vh] 2xl:h-[45vh] mont-bold flex flex-col rounded-b-4xl   shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        style={{
          fontSize: "24px",
        }}
      >

        <div className="flex flex-row place-content-center items-center mt-[100px] p-12">


<div className="flex flex-col sm:flex-row place-content-center items-center justify-center">


           <div className="flex flex-col place-content-start mt-[-30px] sm:mt-[-50px]  leading-none">
            <span className="text-[#95a8d0] text-[40px] sm:text-[90px] ">Nuestros</span>
            <span className="text-[var(--azul-oscuro)] text-[50px] sm:text-[110px] mt-[-10px] sm:mt-[-20px]">Servicios</span>
        </div>

        <div className="ml-4 grid grid-cols-[repeat(1,80%)] sm:grid-cols-[repeat(3,33%)] w-[100%] place-content-center items-center justify-center">
  <div className=" flex flex-col place-content-center items-center justify-center">
    <img src="/images/services/op1.png" className="w-[30%] sm:w-full h-[60px] sm:h-[200px] p-2" />

<div className="text-[var(--azul-oscuro)] flex flex-col place-content-center items-center justify-center text-sm sm:text-2xl"><span>Planes </span> <span className="ml-2 sm:ml-0">Personalizados</span></div>

    
  </div>
  <div className="  flex flex-col place-content-center items-center justify-center">
    <img src="/images/services/op2.png" className="w-[30%] sm:w-full h-[60px] sm:h-[200px] p-2" />
    <div className="text-[var(--azul-oscuro)] flex flex-col place-content-center items-center justify-center text-sm sm:text-2xl"><span>Innovación en</span> <span className="ml-2 sm:ml-0">nuestros servicios</span></div>

  </div>
  <div className=" flex flex-col place-content-center items-center justify-center">
    <img src="/images/services/op3.png" className="w-[30%] sm:w-full h-[60px] sm:h-[200px] p-2" />
    <div className="text-[var(--azul-oscuro)] flex flex-col place-content-center items-center justify-center text-sm sm:text-2xl"><span>Servicios de</span> <span className="ml-2 sm:ml-0">alta calidad</span></div>

  </div>
</div>

</div>

        </div>
    
      </div>
      {/* MENÚ fijo encima del fondo */}
      <Menufixed />
      {/* Espacio compensatorio para que no tape contenido debajo */}

      
      
    </>
  );
}
