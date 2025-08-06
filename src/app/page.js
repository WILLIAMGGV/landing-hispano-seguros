"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";

import Menus from "./componentes/menus";
import AccordionSeguros from "./componentes/accordionseguros";
import { Banner2 } from "./componentes/banner2";
import { Testimonios } from "./componentes/testimonios";
import { Preguntas } from "./componentes/preguntas";
import { Formcontact } from "./componentes/formcontact";
import { Footer } from "./componentes/footer";

export default function Home() {
  const [idioma, setidioma] = useState(null);

  useEffect(() => {
    if (idioma == null) {
      if (localStorage.getItem("idioma")) {
        console.log("EXISTE");
        setidioma(localStorage.getItem("idioma"));
      } else {
        setidioma("es");
        localStorage.setItem("idioma", "es");
      }
    }
  }, []);

  useEffect(() => {
    console.log(idioma);
    if (idioma == "es") {
      localStorage.setItem("idioma", "es");
    } else {
      localStorage.setItem("idioma", "en");
    }
  }, [idioma]);

  return (
    <>
      <Menus idioma={idioma} />
      <div className="h-[20px]"></div>
      <div className="flex flex-row place-content-center items-center justify-center mont-regular text-[var(--azul-oscuro)]">
        <p
          align="center"
          className="w-[80%] md:text-[24px] 2xl:text-[26px] md:w-[80%] 2xl:w-[80%] leading-tight"
        >
          <strong>Hispano Seguros</strong>{" "}
          {idioma == "es"
            ? "nació con la misión de"
            : "was born with the mission of"}{" "}
          <strong>
            {idioma == "es"
              ? "acompañar a la comunidad hispana"
              : "accompanying the Hispanic community"}
          </strong>{" "}
          {idioma == "es" ? "en su camino por" : "on its way through"}
          <strong>
            {" "}
            {idioma == "es" ? "Estados Unidos" : "United States"}
          </strong>
          . {idioma == "es" ? "Somos un" : "We are a"}{" "}
          <strong>
            {idioma == "es"
              ? "equipo cercano, empático y profesional, comprometido con tu bienestar."
              : "close, empathetic and professional team, committed to your wellbeing"}
          </strong>
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-[40%_40%] justify-center gap-4">
        <div className="p-4 rounded flex flex-col place-content-center justify-center items-center">
          <img
            src={
              idioma == "es" ? "/images/nuestros.png" : "/images/services.png"
            }
            className="w-[50%] md:w-[80%] 2xl:w-[80%]"
          />
          <a href="/services">
            <div className="text-lg md:text-2xl ml-8 mont-bold text-white p-4 bg-[var(--azul-claro)] shadow-[8px_8px_10px_rgba(0,0,0,0.7)] transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[var(--azul-oscuro)]">
              {idioma == "es" ? "Más Información" : "More Information"}
            </div>
          </a>
        </div>
        <AccordionSeguros idioma={idioma} />
      </div>
      <Banner2 idioma={idioma} />
      <br />
      <Testimonios idioma={idioma} />
      <br />
      <Preguntas idioma={idioma} />
      <div
        id="contact"
        className="pt-[0px] sm:pt-[50px] ml-[3%] mr-[3%] md:ml-[10%] md:mr-[10%] flex flex-col place-content-center justify-center items-center"
      >
        <Formcontact idioma={idioma} />
      </div>
      <Footer idioma={idioma} setidioma={setidioma} />
    </>
  );
}
