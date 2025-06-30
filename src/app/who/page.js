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
  return (
    <>
      <Banner />
      <div className="h-[20px]"></div>
      <div className="flex flex-col place-content-center items-center justify-center mont-regular text-[var(--azul-oscuro)]">
        <br />

        <p align="center" className="w-[90%] md:w-[80%] leading-tight text-2xl">
          <strong>
            Bienvenidos a Hispanoseguros LLC, tu aliado confiable en
          </strong>
        </p>
        <p align="center" className="w-[90%] md:w-[80%] leading-tight text-2xl">
          <strong>el complejo mundo de los seguros en Estados Unidos.</strong>
        </p>
        <p align="center" className="w-[90%] md:w-[60%] leading-tight  text-lg">
          Nos enorgullece ser una agencia comprometida con la comunidad hispana,
          brindando servicios especializados que reflejan nuestra firme
          dedicación a valores esenciales como la integridad, la seguridad, el
          profesionalismo, la diversidad y la empatía.
        </p>
      </div>
      <br />
      <Mision />
      <br />
      <Team />
      <Footer />
    </>
  );
}
