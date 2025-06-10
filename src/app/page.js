import Image from "next/image";

import Menus from "./componentes/menus";
import AccordionSeguros from "./componentes/accordionseguros";
import { Banner2 } from "./componentes/banner2";

export default function Home() {
  return (
    <>
      <Menus />
      <div className="h-[20px]"></div>
      <div className="flex flex-row place-content-center items-center justify-center mont-regular text-[var(--azul-oscuro)]">
        <p align="center" className="w-[80%] md:w-[60%] leading-tight">
          <strong>Hispano Seguros</strong> nació con la misión de{" "}
          <strong>acompañar a la comunidad hispana</strong> en su camino por
          <strong> Estados Unidos</strong>. Somos un{" "}
          <strong>
            equipo cercano, empático y profesional, comprometido con tu
            bienestar.
          </strong>
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-[40%_40%] justify-center gap-4">
        <div className="p-4 rounded flex flex-col place-content-center justify-center items-center">
          <img src="/images/nuestros.png" className="w-[70%] md:w-full" />
          <div className="text-2xl ml-8 mont-bold text-white p-4 bg-[var(--azul-claro)] shadow-[8px_8px_10px_rgba(0,0,0,0.7)] transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[var(--azul-oscuro)]">
            Más Información
          </div>
        </div>
        <AccordionSeguros />
      </div>
      <Banner2 />
    </>
  );
}
