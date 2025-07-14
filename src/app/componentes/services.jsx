import React from 'react'

const Services = () => {
  return (<>
  <div className='flex flex-row place-content-center items-center'>
    <div id="salud" className="w-[100%] md:w-[80%] m-4 md:m-10 mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full gap-6 items-center">
    
    {/* Imagen */}
    <div className="w-full">
      <img
        src="/images/services/service1.png"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Salud"
      />
    </div>

    {/* Texto */}
    
    <div className=" flex flex-col items-start justify-center space-y-4 md:ml-10">
      
      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro de Salud
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Protege tu bienestar y el de tu familia con nuestros planes de seguro de salud diseñados pensando en ti. En Hispano Seguros, te ayudamos a encontrar la cobertura que se ajuste a tus necesidades y presupuesto, brindándote acceso a servicios médicos de calidad, desde visitas de rutina hasta atención especializada. Tu salud es nuestra prioridad.
        
        <div className='ml-4'>
         <ul className="list-disc list-inside">
  <li>Seguros vía ACA</li>
  <li>Planes de Indemnización</li>
</ul>
        </div>
      
      </div>

    </div>
    </div>
  </div>
</div>


<div className='flex flex-row place-content-center items-center'>
<div id="vida" className="w-[100%] md:w-[80%] m-4 md:m-10 flex flex-col place-content-center items-center justify-center mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[60%_40%] w-full gap-6 items-center">

    {/* Imagen - va primero en mobile */}
    <div className="order-1 md:order-2 w-full md:w-[90%]">
      <img
        src="/images/services/familia.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Vida"
      />
    </div>

    {/* Texto - segundo en mobile, primero en desktop */}
    <div className="flex flex-col items-start justify-center space-y-4 order-2 md:order-1">

      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro de Vida
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Asegura el futuro de tus seres queridos con un seguro de vida de Hispano Seguros. Ofrecemos diferentes opciones de cobertura para brindarte la tranquilidad de saber que tu familia estará protegida financieramente en caso de tu ausencia. Planifica hoy para un mañana seguro.
        <div className='ml-4'>
         <ul className="list-disc list-inside">
  <li>IULs</li>
  <li>Termino</li>
</ul>
        </div>
      </div>

    </div>
  </div>
</div>
</div>

<div className='flex flex-row place-content-center items-center'>
  <div id="auto" className="w-[100%] md:w-[80%] m-4 md:m-10 mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full gap-6 items-center">
    
    {/* Imagen */}
    <div className="w-full">
      <img
        src="/images/services/auto.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Salud"
      />
    </div>

    {/* Texto */}
    <div className="flex flex-col items-start justify-center space-y-4 md:ml-10">
      
      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro de Auto
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
       Conduce con confianza sabiendo que estás protegido con el seguro de auto de Hispano Seguros. Te ofrecemos una variedad de coberturas para protegerte a ti, a tu vehículo y a otros en caso de accidente. Obtén una póliza que se adapte a tus necesidades y presupuesto, con la atención y el servicio que mereces.
      
      </div>

    </div>
  </div>
</div>
</div>


<div className='flex flex-row place-content-center items-center'>
<div id="dental" className="w-[100%] md:w-[80%] m-4 md:m-10 flex flex-col place-content-center items-center justify-center mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[60%_40%] w-full gap-6 items-center">

    {/* Imagen - va primero en mobile */}
    <div className="order-1 md:order-2 w-full md:w-[90%]">
      <img
        src="/images/services/dental.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Vida"
      />
    </div>

    {/* Texto - segundo en mobile, primero en desktop */}
    <div className="flex flex-col items-start justify-center space-y-4 order-2 md:order-1">

      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro Dental
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Mantén una sonrisa saludable con nuestros planes de seguro dental. En Hispano Seguros, te ayudamos a acceder a servicios preventivos, básicos y mayores para cuidar tu salud bucal y la de tu familia. Invierte en tu bienestar con una cobertura dental accesible y completa.
      </div>

    </div>
  </div>
</div>
</div>

<div className='flex flex-row place-content-center items-center'>
<div id="vision" className="w-[100%] md:w-[80%] m-4 md:m-10 mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full gap-6 items-center">
    
    {/* Imagen */}
    <div className="w-full">
      <img
        src="/images/services/vision.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Salud"
      />
    </div>

    {/* Texto */}
    <div className="flex flex-col items-start justify-center space-y-4 md:ml-10">
      
      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro de Visión
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Cuida de tu salud visual con los planes de seguro de visión de Hispano Seguros. Te ofrecemos acceso a exámenes de la vista, lentes y otros servicios para mantener tus ojos sanos y tu visión clara. Invierte en tu bienestar visual con una cobertura diseñada para ti.
      
      </div>

    </div>
  </div>
</div>
</div>

<div className='flex flex-row place-content-center items-center'>
<div id="internacional" className="w-[100%] md:w-[80%] m-4 md:m-10 flex flex-col place-content-center items-center justify-center mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[60%_40%] w-full gap-6 items-center">

    {/* Imagen - va primero en mobile */}
    <div className="order-1 md:order-2 w-full md:w-[90%]">
      <img
        src="/images/services/internacional.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Vida"
      />
    </div>

    {/* Texto - segundo en mobile, primero en desktop */}
    <div className="flex flex-col items-start justify-center space-y-4 order-2 md:order-1">

      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro Internacional
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Si viajas o tienes seres queridos en otros países, nuestro seguro internacional te brinda la protección que necesitas. En Hispano Seguros, te ofrecemos coberturas para gastos médicos, accidentes y otras eventualidades que puedan ocurrir fuera de los Estados Unidos. Viaja con tranquilidad y seguridad.
      </div>

    </div>
  </div>
</div>
</div>

<div className='flex flex-row place-content-center items-center'>
<div id="gastos" className="w-[100%] md:w-[80%] m-4 md:m-10 mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full gap-6 items-center">
    
    {/* Imagen */}
    <div className="w-[100%] md:w-[80%]">
      <img
        src="/images/services/gastos.jpg"
        className="rounded-4xl w-full h-auto"
        alt="Seguro de Ultimos Gastos"
      />
    </div>

    {/* Texto */}
    <div className="flex flex-col items-start justify-center space-y-4 md:ml-10">
      
      <div
        className="bg-[var(--azul-oscuro)] z-20 text-white p-3 md:p-4 text-md md:text-2xl mont-bold rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Seguro de Últimos Gastos
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        Planifica el futuro y alivia la carga financiera de tus seres queridos con nuestro seguro de últimos gastos. En Hispano Seguros, te ayudamos a cubrir los costos funerarios y otros gastos relacionados, brindando paz y tranquilidad a tu familia en un momento difícil.
      
      </div>

    </div>
  </div>
</div>
</div>

</>
  )
}

export default Services
