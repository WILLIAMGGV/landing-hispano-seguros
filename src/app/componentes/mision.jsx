import React from 'react'

const Mision = ({idioma}) => {
  return (
    <div className="flex flex-row justify-center items-center">
  <div className="flex flex-col md:flex-row justify-center w-[90%] p-6 gap-6">

    <div className="flex flex-col bg-[var(--azul-oscuro)] rounded-2xl p-2 md:p-4 w-full md:w-[45%] 2xl:w-[40%] place-content-start items-center justify-start">
      <span className="text-white text-[30px] md:text-[80px] mont-regular">{idioma == 'es' ? ('Misión') : ('Mission')}</span>
      <span className="mont-regular m-4 text-white text-center text-[12px] md:text-[18px]">
        {idioma == 'es' ? ('En Hispano Seguros nos dedicamos a brindar servicios de seguros con un enfoque especializado y humano para la comunidad hispana en los Estados Unidos. Trabajamos con empatía, profesionalismo y transparencia, comunicándonos en su idioma, entendiendo sus prioridades y ofreciendo soluciones claras, seguras y oportunas que protejan lo que más valoran: su familia, su salud y su futuro.') : ('At Hispano Seguros we are dedicated to providing insurance services with a specialized and human approach to the Hispanic community in the United States. We work with empathy, professionalism and transparency, communicating in their language, understanding their priorities and offering clear, safe and timely solutions that protect what they value most: their family, their health and their future.')}
        
      </span>
    </div>

    <div className="flex flex-col bg-[var(--azul-oscuro)] rounded-2xl p-2 md:p-4 w-full md:w-[45%] place-content-start items-center justify-start">
      <span className="text-white text-[30px] md:text-[80px] mont-regular">{idioma == 'es' ? ('Visión') : ('Vision')}</span>
      <span className="mont-regular m-4 text-white text-center text-[12px] md:text-[18px]">
        {idioma == 'es' ? ('Ser la agencia de seguros líder y más confiable para la comunidad hispana en los Estados Unidos, reconocida por su cercanía, compromiso y capacidad de brindar protección integral a familias y negocios, con soluciones innovadoras y adaptadas a sus verdaderas necesidades.') : ('To be the leading and most trusted insurance agency for the Hispanic community in the United States, recognized for its proximity, commitment and ability to provide comprehensive protection to families and businesses, with innovative solutions tailored to their real needs.')}
        
      </span>
    </div>

  </div>
</div>

  )
}

export default Mision
