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
import { Formcontact2 } from "../componentes/formcontact2";
import Banner3 from "../componentes/banner3";
import Services from "../componentes/services";

export default function Home() {
  return (
    <>
      <Banner3 />
      <div className="h-[20px]"></div>

      <br />
      <Services />

      <Footer />
    </>
  );
}
