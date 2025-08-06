"use client"
import React, {useEffect} from 'react'

const Services = ({idioma}) => {


useEffect(() => {
    const doScrollAdjustment = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Ejecutar al cargar la página
    doScrollAdjustment();

    // Ejecutar cuando cambia el hash (navegación interna)
    window.addEventListener('hashchange', doScrollAdjustment);

    return () => window.removeEventListener('hashchange', doScrollAdjustment);
  }, []);



  return (<>
  <div className='flex flex-row place-content-center items-center'>
    <div id="salud" className="w-[100%] md:w-[80%] m-4 md:m-10 mt-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full gap-6 items-center">
    
    {/* Imagen */}
    <div className="w-full">
      <img
        src="/images/services/service1.webp"
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
        {idioma == 'es' ? ('Seguro de Salud') : ('Health Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Protege tu bienestar y el de tu familia con nuestros planes de seguro de salud diseñados pensando en ti. En Hispano Seguros, te ayudamos a encontrar la cobertura que se ajuste a tus necesidades y presupuesto, brindándote acceso a servicios médicos de calidad, desde visitas de rutina hasta atención especializada. Tu salud es nuestra prioridad.') : ("Protect you and your family's well-being with our health insurance plans designed with you in mind. At Hispano Seguros, we help you find the coverage that fits your needs and budget, giving you access to quality medical services, from routine visits to specialized care. Your health is our priority.")}
        
        
        <div className='ml-4'>
         <ul className="list-disc list-inside">
  <li>{idioma == 'es' ? ('Seguros vía ACA') : ('Insurance via ACA')}</li>
  <li>{idioma == 'es' ? ('Planes de Indemnización') : ('Indemnity Plans')}</li>
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
        src="/images/services/familia.webp"
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
        {idioma == 'es' ? ('Seguro de Vida') : ('Life Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Asegura el futuro de tus seres queridos con un seguro de vida de Hispano Seguros. Ofrecemos diferentes opciones de cobertura para brindarte la tranquilidad de saber que tu familia estará protegida financieramente en caso de tu ausencia. Planifica hoy para un mañana seguro.') : ('Secure the future of your loved ones with life insurance from Hispano Seguros. We offer different coverage options to give you peace of mind knowing that your family will be financially protected in the event of your absence. Plan today for a secure tomorrow.')}
        <div className='ml-4'>
         <ul className="list-disc list-inside">
  <li>IULs</li>
  <li>{idioma == 'es' ? ('Termino') : ('Term')}</li>
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
        src="/images/services/auto.webp"
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
        {idioma == 'es' ? ('Seguro de Auto') : ('Auto Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
       {idioma == 'es' ? ('Conduce con confianza sabiendo que estás protegido con el seguro de auto de Hispano Seguros. Te ofrecemos una variedad de coberturas para protegerte a ti, a tu vehículo y a otros en caso de accidente. Obtén una póliza que se adapte a tus necesidades y presupuesto, con la atención y el servicio que mereces.') : ('Drive with confidence knowing that you are protected with Hispano Seguros auto insurance. We offer a variety of coverages to protect you, your vehicle and others in case of an accident. Get a policy that fits your needs and budget, with the attention and service you deserve.')}
      
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
        src="/images/services/dental.webp"
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
        {idioma == 'es' ? ('Seguro Dental') : ('Dental Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Mantén una sonrisa saludable con nuestros planes de seguro dental. En Hispano Seguros, te ayudamos a acceder a servicios preventivos, básicos y mayores para cuidar tu salud bucal y la de tu familia. Invierte en tu bienestar con una cobertura dental accesible y completa.') : ("Maintain a healthy smile with our dental insurance plans. At Hispano Seguros, we help you access preventive, basic and major services to take care of your and your family's oral health. Invest in your well-being with affordable and complete dental coverage.")}
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
        src="/images/services/vision.webp"
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
        {idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Cuida de tu salud visual con los planes de seguro de visión de Hispano Seguros. Te ofrecemos acceso a exámenes de la vista, lentes y otros servicios para mantener tus ojos sanos y tu visión clara. Invierte en tu bienestar visual con una cobertura diseñada para ti.') : ('Take care of your visual health with Hispano Seguros vision insurance plans. We offer you access to eye exams, eyeglasses and other services to keep your eyes healthy and your vision clear. Invest in your visual well-being with coverage designed for you.')}
      
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
        src="/images/services/internacional.webp"
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
        {idioma == 'es' ? ('Seguro Internacional') : ('International Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] mt-[-20px] z-10 text-[var(--azul-oscuro)] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Si viajas o tienes seres queridos en otros países, nuestro seguro internacional te brinda la protección que necesitas. En Hispano Seguros, te ofrecemos coberturas para gastos médicos, accidentes y otras eventualidades que puedan ocurrir fuera de los Estados Unidos. Viaja con tranquilidad y seguridad.') : ('If you travel or have loved ones in other countries, our international insurance provides the protection you need. At Hispano Seguros, we offer coverage for medical expenses, accidents and other eventualities that may occur outside the United States. Travel with peace of mind and security.')}
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
        src="/images/services/gastos.webp"
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
        {idioma == 'es' ? ('Seguro de Últimos Gastos') : ('Final Expense Insurance')}
      </div>

      <div
        className="bg-[#e9e9e9] z-10 text-[var(--azul-oscuro)] mt-[-20px] p-3 md:p-4 text-sm md:text-lg w-full md:w-[95%] mont-regular rounded-2xl"
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.7)"
        }}
      >
        {idioma == 'es' ? ('Planifica el futuro y alivia la carga financiera de tus seres queridos con nuestro seguro de últimos gastos. En Hispano Seguros, te ayudamos a cubrir los costos funerarios y otros gastos relacionados, brindando paz y tranquilidad a tu familia en un momento difícil.') : ('Plan for the future and ease the financial burden of your loved ones with our last expense insurance. At Hispano Seguros, we help you cover funeral costs and other related expenses, bringing peace of mind to your family at a difficult time.')}
      
      </div>

    </div>
  </div>
</div>
</div>

</>
  )
}

export default Services
