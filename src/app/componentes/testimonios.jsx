import React from 'react'

export const Testimonios = ({idioma}) => {
  return (
    <>
    <br />
    <div className='flex flex-row place-content-center items-center justify-center text-4xl md:text-7xl mont-regular text-[var(--azul-claro)]'>{idioma == 'es' ? ('Testimonios') : ('Testimonials')}</div>
   
   <br /> <div
        className="elfsight-app-a629945d-243b-4d82-8cfc-082bff7a1445"
        data-elfsight-app-lazy
      ></div>

      <div align="center" className='flex flex-row text-[var(--azul-oscuro)] place-content-center justify-center items-center mont-regular text-lg md:text-2xl'><span className='md:w-full w-[80%]'>{idioma == 'es' ? ('Si estás en Estados Unidos y andas haciéndote estas preguntas') : ('If you are in the United States and you are asking yourself the following questions')}</span></div>
      <div align="center" className='flex flex-row text-[var(--azul-oscuro)] place-content-center justify-center items-center mont-regular text-xl md:text-4xl'><span>{idioma == 'es' ? ('¡CUENTA CON NUESTRA AYUDA!') : ('COUNT ON OUR HELP!')}</span></div>
      </>
  )
}
