"use client"
import React, { useState } from 'react';

export const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAcordeon = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-8 bg-[var(--azul-oscuro)] text-5xl w-full shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
        <img src="/images/preguntasf.png" className="ml-16 w-[60%] md:w-[40%] 2xl:w-[30%]" alt="Preguntas frecuentes" />
      </div>

      <div className='block sm:hidden'>
      <div className=" flex flex-col justify-center items-center p-4 w-full max-w-4xl mx-auto">

        {/* Pregunta 1 */}
        <div className="w-full border-b mb-4">
          <button
             onClick={() => toggleAcordeon(0)}
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            ¿Qué es el Mercado de Salud?
            <span >{activeIndex === 0 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              Es la entidad que regula y permite a los clientes buscar y comparar planes de salud. En el mismo, las personas pueden verificar si califican para la cobertura, inscribirse en un plan y realizar cambios en su plan de salud.
            </div>
          </div>
        </div>

        {/* Pregunta 2 */}
        <div className="w-full border-b mb-4" onClick={() => toggleAcordeon(1)}>
          <button
            
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            ¿Quién es elegible para adquirir una póliza de seguros en el Mercado de Salud?
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              Ciudadanos, residentes permanentes y toda persona que se encuentre en el país bajo un estatus migratorio formal (<strong>asilo, visa de trabajo, parole, entre otros</strong>) son bienvenidos en un espacio que promueve la diversidad y el empoderamiento.
            </div>
          </div>
        </div>

        {/* Pregunta 3 */}
        <div className="w-full border-b mb-4" onClick={() => toggleAcordeon(2)}>
          <button
            
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            ¿Cuál será el costo mensual de mi seguro?
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              Existen varios factores que influyen en el precio final de tu poliza. Desde tus ingresos anuales, el tipo de seguro que busques y los beneficios que quieres obtener, hasta en que cuidad y estado residas.
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='hidden sm:block'>

<br /><br />

<div className="hidden md:block menu place-content-center items-center justify-center">
      <div className=" menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">¿Qué es el Mercado de Salud?


        <div className="dropdown text-[16px]">
          Es la entidad que regula y permite a los clientes buscar y comparar planes de salud. En el mismo, las personas pueden verificar si califican para la cobertura, inscribirse en un plan y realizar cambios en su plan de salud.
        </div>
      </div>

      <div className="menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">
        ¿Quién es elegible para adquirir una póliza de seguros en el Mercado de
        Salud?
        <div className="dropdown text-[16px]">
          Ciudadanos, residentes permanentes y toda persona que se encuentre en
          el país bajo un estatus migratorio formal (<strong
            >asilo, visa de trabajo, parole, entre otros</strong
          >) son bienvenidos en un espacio que promueve la diversidad y el
          empoderamiento.
        </div>
      </div>

      <div className="menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">
        ¿Cuál será el costo mensual de mi seguro?

        <div className="dropdown text-[16px]">
          Existen varios factores que influyen en el precio final de tu poliza. Desde tus ingresos anuales, el tipo de seguro que busques y los beneficios que quieres obtener, hasta en que cuidad y estado residas.
        </div>
      </div>
    </div>
      </div>
    </>
  );
};
