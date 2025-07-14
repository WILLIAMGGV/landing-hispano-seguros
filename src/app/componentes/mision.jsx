import React from 'react'

const Mision = () => {
  return (
    <div className="flex flex-row justify-center items-center">
  <div className="flex flex-col md:flex-row justify-center w-[90%] p-6 gap-6">

    <div className="flex flex-col bg-[var(--azul-oscuro)] rounded-2xl p-2 md:p-4 w-full md:w-[45%] 2xl:w-[40%] place-content-start items-center justify-start">
      <span className="text-white text-[30px] md:text-[80px] mont-regular">Misión</span>
      <span className="mont-regular m-4 text-white text-center text-[12px] md:text-[18px]">
        En Hispano Seguros nos dedicamos a brindar servicios de seguros con un enfoque especializado y humano para la comunidad
        hispana en los Estados Unidos. Trabajamos
        con empatía, profesionalismo y transparencia,
        comunicándonos en su idioma, entendiendo
        sus prioridades y ofreciendo soluciones claras,
        seguras y oportunas que protejan lo que más valoran: su familia, su salud y su futuro.
      </span>
    </div>

    <div className="flex flex-col bg-[var(--azul-oscuro)] rounded-2xl p-2 md:p-4 w-full md:w-[45%] place-content-start items-center justify-start">
      <span className="text-white text-[30px] md:text-[80px] mont-regular">Visión</span>
      <span className="mont-regular m-4 text-white text-center text-[12px] md:text-[18px]">
        Ser la agencia de seguros líder y más confiable para la comunidad hispana en
        los Estados Unidos, reconocida por su
        cercanía, compromiso y capacidad de
        brindar protección integral a familias y
        negocios, con soluciones innovadoras y
        adaptadas a sus verdaderas necesidades.
      </span>
    </div>

  </div>
</div>

  )
}

export default Mision
