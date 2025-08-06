"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Menus from "../componentes/menus";
import AccordionSeguros from "../componentes/accordionseguros";
import { Banner2 } from "../componentes/banner2";
import { Testimonios } from "../componentes/testimonios";
import { Preguntas } from "../componentes/preguntas";
import { Formcontact } from "../componentes/formcontact";
import { Footer } from "../componentes/footer";
import Banner from "../componentes/banner";
import Mision from "../componentes/mision";
import Team from "../componentes/team";

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
      <Banner idioma={idioma} />
      <div className="h-[20px]"></div>
      <div className="flex flex-col place-content-center items-center justify-center mont-regular text-[var(--azul-oscuro)]">
        <br />

        <p
          align="center"
          className="w-[90%] md:w-[80%] leading-tight text-xl 2xl:text-2xl"
        >
          <strong>
            {idioma == "es"
              ? "Bienvenidos a Hispanoseguros LLC, tu aliado confiable en el complejo mundo de los seguros en Estados Unidos."
              : "Welcome to Hispanoseguros LLC, your reliable ally in the complex world of insurance in the United States."}
          </strong>
        </p>
      </div>
      <br />
      <Mision idioma={idioma} />
      <br />
      <Team idioma={idioma} />
      <br />
      <div className="pt-[0px] sm:pt-[50px] ml-[3%] mr-[3%] md:ml-[10%] md:mr-[10%] flex flex-col place-content-center justify-center items-center">
        <Formcontact idioma={idioma} />
      </div>
      <Footer idioma={idioma} setidioma={setidioma} />
    </>
  );
}
