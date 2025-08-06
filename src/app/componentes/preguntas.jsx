"use client"
import React, { useState } from 'react';

export const Preguntas = ({idioma}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAcordeon = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-8 bg-[var(--azul-oscuro)] text-5xl w-full shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
        <img src={idioma == "es"
            ? "/images/preguntasf.png"
            : "/images/question.png"} className="ml-16 w-[60%] md:w-[40%] 2xl:w-[30%]" alt="Preguntas frecuentes" />
      </div>

      <div className='block sm:hidden'>
      <div className=" flex flex-col justify-center items-center p-4 w-full max-w-4xl mx-auto">

        {/* Pregunta 1 */}
        <div className="w-full border-b mb-4">
          <button
             onClick={() => toggleAcordeon(0)}
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            {idioma == 'es' ? ('¿Qué es el Mercado de Salud?') : ('What is the Healthcare Marketplace?')}
            <span >{activeIndex === 0 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              {idioma == 'es' ? ('Es la entidad que regula y permite a los clientes buscar y comparar planes de salud. En el mismo, las personas pueden verificar si califican para la cobertura, inscribirse en un plan y realizar cambios en su plan de salud.') : ('It is the entity that regulates and allows customers to shop and compare health plans. There, individuals can check if they qualify for coverage, enroll in a plan, and make changes to their health plan.')}
            </div>
          </div>
        </div>

        {/* Pregunta 2 */}
        <div className="w-full border-b mb-4" onClick={() => toggleAcordeon(1)}>
          <button
            
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            {idioma == 'es' ? ('¿Quién es elegible para adquirir una póliza de seguros en el Mercado de Salud?') : ('Who is eligible to purchase an insurance policy in the Health Marketplace?')}
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              {idioma == 'es' ? ('Ciudadanos, residentes permanentes y toda persona que se encuentre en el país bajo un estatus migratorio formal') : ('Citizens, permanent residents and any person who is in the country under a formal immigration status.')} (<strong>{idioma == 'es' ? ('asilo, visa de trabajo, parole, entre otros') : ('asylum, work visa, parole, among others.')}</strong>) {idioma == 'es' ? ('son bienvenidos en un espacio que promueve la diversidad y el empoderamiento.') : ('are welcome in a space that promotes diversity and empowerment.')}
            </div>
          </div>
        </div>

        {/* Pregunta 3 */}
        <div className="w-full border-b mb-4" onClick={() => toggleAcordeon(2)}>
          <button
            
            className="w-full flex justify-between items-center text-lg mont-regular p-4"
          >
            {idioma == 'es' ? ('¿Cuál será el costo mensual de mi seguro?') : ('What will my monthly insurance cost be?')}
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-[16px]">
              {idioma == 'es' ? ('Existen varios factores que influyen en el precio final de tu poliza. Desde tus ingresos anuales, el tipo de seguro que busques y los beneficios que quieres obtener, hasta en que cuidad y estado residas.') : ('There are several factors that influence the final price of your policy. From your annual income, the type of insurance you are looking for and the benefits you want to obtain, to the city and state you live in.')}
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='hidden sm:block'>

<br /><br />

<div className="hidden md:block menu place-content-center items-center justify-center">
      <div className=" menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">{idioma == 'es' ? ('¿Qué es el Mercado de Salud?') : ('What is the Healthcare Marketplace?')}


        <div className="dropdown text-[16px]">
          {idioma == 'es' ? ('Es la entidad que regula y permite a los clientes buscar y comparar planes de salud. En el mismo, las personas pueden verificar si califican para la cobertura, inscribirse en un plan y realizar cambios en su plan de salud.') : ('It is the entity that regulates and allows customers to shop and compare health plans. There, individuals can check if they qualify for coverage, enroll in a plan, and make changes to their health plan.')}
        </div>
      </div>

      <div className="menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">
        {idioma == 'es' ? ('¿Quién es elegible para adquirir una póliza de seguros en el Mercado de Salud?') : ('Who is eligible to purchase an insurance policy in the Health Marketplace?')}
        <div className="dropdown text-[16px]">
          {idioma == 'es' ? (' Ciudadanos, residentes permanentes y toda persona que se encuentre en el país bajo un estatus migratorio formal') : (' Citizens, permanent residents and any person who is in the country under a formal immigration status.')}
          (<strong>{idioma == 'es' ? ('asilo, visa de trabajo, parole, entre otros') : ('asylum, work visa, parole, among others.')}</strong>) {idioma == 'es' ? ('son bienvenidos en un espacio que promueve la diversidad y el empoderamiento.') : ('are welcome in a space that promotes diversity and empowerment.')}
          
        </div>
      </div>

      <div className="menu-item flex flex-row place-content-center items-center justify-center text-xl mont-regular">
        {idioma == 'es' ? ('¿Cuál será el costo mensual de mi seguro?') : ('What will my monthly insurance cost be?')}

        <div className="dropdown text-[16px]">
          {idioma == 'es' ? ('Existen varios factores que influyen en el precio final de tu poliza. Desde tus ingresos anuales, el tipo de seguro que busques y los beneficios que quieres obtener, hasta en que cuidad y estado residas.') : ('There are several factors that influence the final price of your policy. From your annual income, the type of insurance you are looking for and the benefits you want to obtain, to the city and state you live in.')}
        </div>
      </div>
    </div>
      </div>
    </>
  );
};
