"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const seguros = [
  { titulo: "Seguro de Salud", descripcion: "Cubre gastos médicos y hospitalarios para ti y tu familia." },
  { titulo: "Seguro de Vida", descripcion: "Proporciona protección financiera a tus seres queridos." },
  { titulo: "Seguro de Auto", descripcion: "Conduce con confianza sabiendo que estás protegido con el seguro de auto de <strong>Hispano Seguros.</strong> <br /> Te ofrecemos una variedad de coberturas para protegerte a ti, a tu <strong>vehículo y a otros en caso de accidente...</strong>" },
  { titulo: "Seguro Dental", descripcion: "Cubre tratamientos dentales preventivos y correctivos." },
  { titulo: "Seguro de Visión", descripcion: "Cubre consultas oftalmológicas y anteojos." },
  { titulo: "Seguro Internacional", descripcion: "Asistencia médica en el extranjero." },
  { titulo: "Seguro de Últimos Gastos", descripcion: "Apoyo económico para cubrir servicios funerarios." },
];

export default function AccordionSeguros() {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div className=" p-4 rounded w-[80%] mx-auto">
      {seguros.map((seguro, index) => (
        <div
  key={index}
  className=" shadow-[0_10px_25px_rgba(0,51,153,0.5)] rounded-2xl"
>
          <button
            onClick={() => toggle(index)}
            className="w-full text-center bg-[var(--azul-oscuro)] text-white mont-bold text-[22px] p-4 rounded-2xl shadow-2xl transition-all duration-300"
          >
            {seguro.titulo}
          </button>
          <AnimatePresence initial={false}>
            {activo === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
  className="bg-white text-center text-[var(--azul-oscuro)] p-4 mt-[-10px] rounded-xl"
  dangerouslySetInnerHTML={{ __html: seguro.descripcion }}
></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
