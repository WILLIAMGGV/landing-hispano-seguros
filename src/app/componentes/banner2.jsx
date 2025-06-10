"use client"
import React from 'react'
import CountUp from 'react-countup';

export const Banner2 = () => {
  return (
   <div className="mt-8 relative">
  {/* Imagen de fondo */}
  <img src="/images/banner2.jpg" className="w-full h-[800px] md:h-auto opacity-80" />

  {/* Capa gris encima */}
  <div className="absolute top-0 left-0 w-full h-[1000px] md:h-full bg-gray-300 opacity-70 z-10"></div>

  {/* Contenido frontal */}
  <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col place-content-center items-center justify-center px-4">
    <div className="text-[36px] md:text-[80px] mont-bold text-black text-center leading-tight">
      ¿Por qué elegirnos?
    </div>

    <p className="w-full md:w-[60%] text-base md:text-xl mont-regular text-center mt-4">
      Ofrecemos soluciones reales pensadas para ti, con un servicio hecho por hispanos para hispanos, basado en una trifecta perfecta de valores: <br />
      <span className="mont-black">confianza, empatía y educación.</span>
    </p>

    {/* Métricas */}
    <div className="bg-[rgba(0,0,0,0.7)] rounded-2xl mt-6 md:mt-10 h-auto md:h-[200px] w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-[30%_30%_30%] gap-6 w-full">
        {/* Columna 1 */}
        <div className="p-4 text-center rounded-2xl bg-[rgba(29,55,90,0.4)] text-white">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <img src="/images/icono3.png" width="40px" className="md:w-[50px]" />
            <span className="mont-bold text-[42px] md:text-[62px] ml-2"><CountUp start={1} end={10} duration={2} />+</span>
          </div>
          <div className="mt-[-10px] md:mt-[-20px] text-[18px] md:text-[22px] mont-bold text-center md:text-left">
            Años de Experiencia
          </div>
        </div>

        {/* Columna 2 */}
        <div className="p-4 text-center rounded-2xl bg-[rgba(29,55,90,0.4)] text-white">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <img src="/images/icono2.png" width="40px" className="md:w-[50px]" />
            <span className="mont-bold text-[42px] md:text-[62px] ml-2"><CountUp start={1} end={20} duration={3} />+</span>
          </div>
          <div className="mt-[-10px] md:mt-[-20px] text-[18px] md:text-[22px] mont-bold text-center md:text-left">
            Atención en estados
          </div>
        </div>

        {/* Columna 3 */}
        <div className="p-4 text-center rounded-2xl bg-[rgba(29,55,90,0.4)] text-white">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <img src="/images/icono1.png" width="40px" className="md:w-[50px]" />
            <span className="mont-bold text-[42px] md:text-[62px] ml-2"><CountUp start={1} end={4000} duration={5} />+</span>
          </div>
          <div className="mt-[-10px] md:mt-[-20px] text-[18px] md:text-[22px] mont-bold text-center md:text-left">
            Clientes felices
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
