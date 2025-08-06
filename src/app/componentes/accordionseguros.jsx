"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const seguros = [
  { titulo: "Seguro de Salud", descripcion: "Protege tu bienestar y el de tu familia con nuestros planes de seguro de salud diseñados pensando en ti. En Hispano Seguros, te ayudamos a encontrar la cobertura que se ajuste a tus necesidades y presupuesto, brindándote acceso a servicios médicos de calidad, desde visitas de rutina hasta atención especializada. Tu salud es nuestra prioridad." },
  { titulo: "Seguro de Vida", descripcion: "Asegura el futuro de tus seres queridos con un seguro de vida de Hispano Seguros. Ofrecemos diferentes opciones de cobertura para brindarte la tranquilidad de saber que tu familia estará protegida financieramente en caso de tu ausencia. Planifica hoy para un mañana seguro." },
  { titulo: "Seguro de Auto", descripcion: "Conduce con confianza sabiendo que estás protegido con el seguro de auto de Hispano Seguros. Te ofrecemos una variedad de coberturas para protegerte a ti, a tu vehículo y a otros en caso de accidente. Obtén una póliza que se adapte a tus necesidades y presupuesto, con la atención y el servicio que mereces." },
  { titulo: "Seguro Dental", descripcion: "Mantén una sonrisa saludable con nuestros planes de seguro dental. En Hispano Seguros, te ayudamos a acceder a servicios preventivos, básicos y mayores para cuidar tu salud bucal y la de tu familia. Invierte en tu bienestar con una cobertura dental accesible y completa." },
  { titulo: "Seguro de Visión", descripcion: "Cuida de tu salud visual con los planes de seguro de visión de Hispano Seguros. Te ofrecemos acceso a exámenes de la vista, lentes y otros servicios para mantener tus ojos sanos y tu visión clara. Invierte en tu bienestar visual con una cobertura diseñada para ti." },
  { titulo: "Seguro Internacional", descripcion: "Si viajas o tienes seres queridos en otros países, nuestro seguro internacional te brinda la protección que necesitas. En Hispano Seguros, te ofrecemos coberturas para gastos médicos, accidentes y otras eventualidades que puedan ocurrir fuera de los Estados Unidos. Viaja con tranquilidad y seguridad." },
  { titulo: "Seguro de Últimos Gastos", descripcion: "Planifica el futuro y alivia la carga financiera de tus seres queridos con nuestro seguro de últimos gastos. En Hispano Seguros, te ayudamos a cubrir los costos funerarios y otros gastos relacionados, brindando paz y tranquilidad a tu familia en un momento difícil." },
];

const segurosen = [
  { titulo: "Health Insurance", descripcion: "Protect you and your family's well-being with our health insurance plans designed with you in mind. At Hispano Seguros, we help you find the coverage that fits your needs and budget, giving you access to quality medical services, from routine visits to specialized care. Your health is our priority." },
  { titulo: "Life Insurance", descripcion: "Secure the future of your loved ones with life insurance from Hispano Seguros. We offer different coverage options to give you peace of mind knowing that your family will be financially protected in the event of your absence. Plan today for a secure tomorrow." },
  { titulo: "Auto Insurance", descripcion: "Drive with confidence knowing that you are protected with Hispano Seguros auto insurance. We offer a variety of coverages to protect you, your vehicle and others in case of an accident. Get a policy that fits your needs and budget, with the attention and service you deserve." },
  { titulo: "Dental Insurance", descripcion: "Maintain a healthy smile with our dental insurance plans. At Hispano Seguros, we help you access preventive, basic and major services to take care of your and your family's oral health. Invest in your well-being with affordable and complete dental coverage." },
  { titulo: "Vision Insurance", descripcion: "Take care of your visual health with Hispano Seguros vision insurance plans. We offer you access to eye exams, eyeglasses and other services to keep your eyes healthy and your vision clear. Invest in your visual well-being with coverage designed for you." },
  { titulo: "International Insurance", descripcion: "If you travel or have loved ones in other countries, our international insurance provides the protection you need. At Hispano Seguros, we offer coverage for medical expenses, accidents and other eventualities that may occur outside the United States. Travel with peace of mind and security." },
  { titulo: "Last Expense Insurance", descripcion: "Plan for the future and ease the financial burden of your loved ones with our last expense insurance. At Hispano Seguros, we help you cover funeral costs and other related expenses, bringing peace of mind to your family at a difficult time." },
];

export default function AccordionSeguros({idioma}) {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div className=" p-4 rounded w-[80%] mx-auto">
      {idioma == 'es' ? (<>{seguros.map((seguro, index) => (
        <div
  key={index}
  className=" shadow-[0_10px_25px_rgba(0,51,153,0.5)] rounded-2xl"
>
          <button
            onClick={() => toggle(index)}
            className="w-full text-center bg-[var(--azul-oscuro)] text-white mont-bold text-[18px] md:text-[22px] p-4 rounded-2xl shadow-2xl transition-all duration-300"
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
  className="bg-white text-center text-[14px] md:text-[16px] text-[var(--azul-oscuro)] p-4 mt-[-10px] rounded-xl"
  dangerouslySetInnerHTML={{ __html: seguro.descripcion }}
></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}</>) : (<>{segurosen.map((seguro, index) => (
        <div
  key={index}
  className=" shadow-[0_10px_25px_rgba(0,51,153,0.5)] rounded-2xl"
>
          <button
            onClick={() => toggle(index)}
            className="w-full text-center bg-[var(--azul-oscuro)] text-white mont-bold text-[18px] md:text-[22px] p-4 rounded-2xl shadow-2xl transition-all duration-300"
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
  className="bg-white text-center text-[14px] md:text-[16px] text-[var(--azul-oscuro)] p-4 mt-[-10px] rounded-xl"
  dangerouslySetInnerHTML={{ __html: seguro.descripcion }}
></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}</>)}
      
    </div>
  );
}
