"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Menufixed = ({idioma}) => {

    const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 ml-0 mr-0 md:ml-[40px] md:mr-[40px] flex flex-col place-content-center items-center justify-center">
        {/* LOGO */}
        <div
          className="absolute top-0 left-0 z-10 bg-white h-[90px] w-[250px] pl-2 pr-2 pt-0"
          style={{
            clipPath: "polygon(0 0, 65% 0, 100% 100%, 0% 100%)",
          }}
        >
          <a href="/"><img src="/images/logo.png" width="200px" /></a>
        </div>

        {/* Barra superior */}
        <div className="bg-[var(--azul-claro)] w-full h-[30px] flex justify-end items-center pr-8">
          {/* Dirección - solo visible en escritorio */}
          <img
            src="/images/map.png"
            width="20px"
            className="ml-2 hidden md:block"
          />
          <span className="mont-regular text-[16px] text-white p-2 hidden md:block">
            85 NE Loop 410 Suite 624, San Antonio, TX 78216
          </span>

          {/* Correo - solo visible en escritorio */}
          <img
            src="/images/mail.png"
            width="20px"
            className="ml-2 hidden md:block"
          />
          <span className="mont-regular text-[16px] text-white p-2 hidden md:block">
            ayuda@hispanoseguro.com
          </span>

          {/* Íconos sociales - siempre visibles */}
          <img src="/images/facebook.png" width="20px" className="ml-2" />
          <img src="/images/instagram.png" width="20px" className="ml-2" />
        </div>

        {/* Menú Desktop */}
        {/* Menú Desktop con submenú */}
        <div className="hidden sm:flex bg-[var(--azul-oscuro)] h-[60px] w-full mont-regular text-white text-2xl items-center justify-center relative">
          <a href="/"><span className="mx-4 cursor-pointer">{idioma == 'es' ? ('Inicio') : ('Home')}</span></a>
          <a href="/who"><span className="mx-4 cursor-pointer">{idioma == 'es' ? ('Sobre Nosotros') : ('About Us')}</span></a>

          {/* Grupo con hover para submenú */}
          <div className="relative group mx-4 cursor-pointer flex items-center gap-1">
            <a href="/services"><span className="cursor-pointer">{idioma == 'es' ? ('Nuestros Servicios') : ('Our Services')}</span></a>
            <ChevronDown
              size={20}
              className="transition-transform duration-300 group-hover:rotate-180"
            />

            {/* Submenú desplegable */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white text-[var(--azul-oscuro)] text-base rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-20">
              <div className="flex flex-col py-2 px-4 space-y-2">
                <a href="/services#salud"><span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro de Salud') : ('Health Insurance')}
                </span></a>
                <a href="/services#vida"><span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro de Vida') : ('Life Insurance')}
                </span></a>
                <a href="/services#auto"><span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro de Auto') : ('Auto Insurance')}
                </span>
                </a>
                <a href="/services#dental"><span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro Dental') : ('Dental Insurance')}
                </span>
                </a>
                <a href="/services#vision">
                <span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}
                </span></a>
                <a href="/services#internacional">
                <span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro Internacional') : ('International Insurance')}
                </span></a>
                <a href="/services#gastos">
                <span className="hover:text-[var(--azul-claro)] cursor-pointer">
                  {idioma == 'es' ? ('Seguro de Últimos Gastos') : ('Final Expense Insurance')}
                </span></a>
              </div>
            </div>
          </div>
          <a href="https://redmaplerealtydemo.ourproshop.com/" target="_blank" rel="noopener noreferrer"  >
          <span className="mx-4 cursor-pointer">{idioma == 'es' ? ('Tienda') : ('Shop')}</span></a>
          <a href="/#contact">
          <span className="mx-4 cursor-pointer">{idioma == 'es' ? ('Contacto') : ('Contact')}</span></a>
        </div>

        {/* Menú Mobile */}
        <div className="sm:hidden bg-[var(--azul-oscuro)] w-full p-4 flex justify-between items-center text-white">
          <span className="font-[var(--mont-bold)] text-xl">Menú</span>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`sm:hidden bg-[var(--azul-oscuro)] w-full flex flex-col items-center text-white text-lg py-4 space-y-2 transition-all duration-300 transform ${
            open
              ? "block translate-y-0 scale-100"
              : "hidden -translate-y-5 scale-95 pointer-events-none"
          }`}
        >
          <a href="/"><span onClick={() => { setOpen(false);
            window.location.href = "/";
          }}>{idioma == 'es' ? ('Inicio') : ('Home')}</span></a>
          <a href="/who"><span onClick={() => { setOpen(false);
            window.location.href = "/who";
          }}>{idioma == 'es' ? ('Sobre Nosotros') : ('About Us')}</span></a>

          {/* Toggle de submenú */}
          <div className="w-full flex flex-col items-center">
            <button
              className="text-white flex items-center gap-2"
              onClick={() => setSubOpen(!subOpen)}
            >
              {idioma == 'es' ? ('Nuestros Servicios') : ('Our Services')}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  subOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                subOpen ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
              } flex flex-col items-center space-y-1 mt-2`}
            >
              <a href="/services#salud"><span className="text-sm" onClick={() => {
               
                setOpen(false);
              }}>
                {idioma == 'es' ? ('Seguro de Salud') : ('Health Insurance')}
              </span></a>
              <a href="/services#vida"><span className="text-sm" onClick={() => setOpen(false)}>
                {idioma == 'es' ? ('Seguro de Vida') : ('Life Insurance')}
              </span></a>
              <a href="/services#auto"><span className="text-sm" onClick={() => setOpen(false)}>
                {idioma == 'es' ? ('Seguro de Auto') : ('Auto Insurance')}
              </span></a>
              
              <a href="/services#dental"><span className="text-sm" onClick={() => setOpen(false)}>
               {idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}
              </span></a>
              <a href="/services#vision">
              <span className="text-sm" onClick={() => setOpen(false)}>
                {idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}
              </span>
              </a>
              <a href="/services#internacional">
              <span className="text-sm" onClick={() => setOpen(false)}>
                {idioma == 'es' ? ('Seguro Internacional') : ('International Insurance')}
              </span>
              </a>
              <a href="/services#gastos">
              <span className="text-sm" onClick={() => setOpen(false)}>
                {idioma == 'es' ? ('Seguro de Últimos Gastos') : ('Final Expense Insurance')}
              </span></a>
            </div>
          </div>
           <a href="https://redmaplerealtydemo.ourproshop.com/">
          <span onClick={() => setOpen(false)}>{idioma == 'es' ? ('Tienda') : ('Shop')}</span>
          </a>
   <a href="/#contact">
          <span onClick={() => setOpen(false)}>{idioma == 'es' ? ('Contacto') : ('Contact')}</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Menufixed
