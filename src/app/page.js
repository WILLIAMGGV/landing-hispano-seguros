import Image from "next/image";

import Menus from "./componentes/menus";
import AccordionSeguros from "./componentes/accordionseguros";

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
      <div className="grid grid-cols-[40%_40%] justify-center gap-4">
        <div className="bg-gray-200 p-4 rounded">
          <p>Columna 1</p>
        </div>
        <AccordionSeguros />
      </div>
    </>
  );
}
