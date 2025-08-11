"use client"
import React from 'react'




const Team = ({idioma}) => {

  const data = [
  {
    "id": 1,
    "name": "Jonathan Barreto",
    "photo": "/images/team/lider.jpg",
    "title": idioma == 'es' ? ('Gerente Operaciones - Oficina Austin') : ('Operations Manager - Austin Office'),
    "description": idioma == 'es' ? ("Enfocado a los detalles, Jonathan es tu experto en seguros de auto y hogar, además de ser un especialista en seguros de salud, vida y Medicare. Se asegura que cada cliente comprenda su cobertura y se sienta completamente protegido. <strong>Si buscas tranquilidad y claridad para tu auto y hogar, contacta a Javier.</strong>") : ('Focused on details, Jonathan is your expert in auto and home insurance, in addition to being a specialist in health, life and Medicare insurance. Se asegura que cada cliente comprenda su cobertura y se sienta completamente protegido. <strong>If you are looking for peace of mind and clarity for your auto and home, contact Javier.</strong>'),
    "email": "jonathanbarreto@hispanoseguro.com",
    "phone": "(786) 820-5627",
  },
  {
    "id": 2,
    "name": "Johanna Rivero",
    "photo": "/images/team/johanna1.jpg",
    "title": idioma == 'es' ? ("Agente de Seguros") : ("Insurance Agent"),
    "description": idioma == 'es' ? ('Con una trayectoria sólida en el ámbito de los seguros de salud y vida, Johanna es un asesor confiable para familias y profesionales. Su compromiso con la excelencia aseguran que cada póliza se adapte perfectamente a tus requisitos. Para una protección integral en salud y vida, comunícate con Fernando.') : ('With a solid track record in health and life insurance, Johanna is a trusted advisor for families and professionals. Her commitment to excellence ensures that each policy is perfectly tailored to your requirements. For comprehensive health and life protection, contact Fernando.'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(512) 851-7728",
  },
  {
    "id": 3,
    "name": "Jose Humberto Ramirez",
    "photo": "/images/team/jose11.png",
    "title": "CMO",
    "description": idioma == 'es' ? ('Liderando nuestros esfuerzos para conectar con ustedes y compartir cómo Hispano Seguros puede proteger lo que más te importa. Especilista en seguros de Salud y Vida.') : ('Leading our efforts to connect with you and share how Hispano Seguros can protect what matters most to you. Specialist in Health and Life insurance.'),
    "email": "josehramirez@hispanoseguro.com",
    "phone": "210-760-7207",
  },
  {
    "id": 4,
    "name": "Mildred Lopez",
    "photo": "/images/team/mildred1.png",
    "title": "CEO",
    "description": idioma == 'es' ? ('Con mas de 9 años de experiencia en el mundo de los seguros. Fundadora de Hispano Seguros, enfocada de servir a nuestra comunidad Hispana en Estados Unidos.') : ('With more than 9 years of experience in the insurance world. Founder of Hispano Seguros, focused on serving our Hispanic community in the United States.'),
    "email": "mildredlopez@hispanoseguro.com",
    "phone": "(210) 876-3360",
  },
  {
    "id": 5,
    "name": "Carolina Baladi",
    "photo": "/images/team/carolina1.jpg",
    "title": idioma == 'es' ? ('Agente de Seguros') : ('Insurance Agent'),
    "description": idioma == 'es' ? ('Especialista en seguros de salud y vida. Su empatía y conocimiento técnico la convierten en una aliada invaluable para proteger lo que más te importa.<strong> ¡Habla hoy con Sofía para un futuro más seguro!</strong>') : ('Specialist in health and life insurance. Her empathy and expertise make her an invaluable ally in protecting what matters most to you. <strong>Talk to Sofia today for a more secure future.</strong>'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(573) 631-9390",
  },
  {
    "id": 6,
    "name": "Ninoska Colmenares",
    "photo": "/images/team/ninoska1.jpg",
    "title": idioma == 'es' ? ('Gerente General - Oficina Austin') : ('General Manager - Austin Office'),
    "description": idioma == 'es' ? ('Destacandose por su compromiso y su profundo conocimiento en Medicare, además de ser especialista en seguros de salud y vida. Ella te guiará a través de las complejidades de Medicare para asegurar que obtengas la cobertura que necesitas. Deja que Ninoska te ayude a navegar por Medicare y asegurar tu bienestar.') : ('She stands out for her commitment and in-depth knowledge of Medicare, in addition to being a specialist in health and life insurance. She will guide you through the complexities of Medicare to ensure you get the coverage you need. Let Ninoska help you navigate Medicare and ensure your well-being.'),
    "email": "ninoskacolmenares@hispanoseguro.com",
    "phone": "(786) 506-5217",
  },
  {
    "id": 7,
    "name": "Isari Pereira",
    "photo": "/images/team/isarys1.png",
    "title": idioma == 'es' ? ('Agente de Seguros') : ('Insurance Agent'),
    "description": idioma == 'es' ? ('Conocida por su energía y dedicación para encontrar las mejores opciones en Medicare, así como en seguros de salud y de vida. Siempre dispuesto a hacer un esfuerzo adicional para garantizar su cobertura y ayudarle a entender sus beneficios, ¡descubra cómo Ricardo puede simplificar sus decisiones sobre Medicare!') : ('Known for his energy and dedication to finding the best options in Medicare, as well as health and life insurance. Always willing to go the extra mile to ensure your coverage and help you understand your benefits, find out how Ricardo can simplify your Medicare decisions!'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(512) 679-1888",
  },
  {
    "id": 8,
    "name": "Omar Rivero",
    "photo": "/images/team/omar1.jpg",
    "title": idioma == 'es' ? ('Director General - Oficina Austin') : ('General Manager - Austin Office'),
    "description": idioma == 'es' ? ('Omar es un agente apasionado con más de 10 años de experiencia, especialista en seguros de salud, vida y anualidades. Su empatía y conocimiento técnico la convierten en un aliado invaluable para proteger lo que más te importa. ¡Habla hoy con Omar para un futuro más seguro!') : ('Omar is a passionate agent with over 10 years of experience, specializing in health, life and annuity insurance. Her empathy and technical knowledge make her an invaluable ally in protecting what matters most to you. Talk to Omar today for a more secure future!'),
    "email": "omarrivero@hispanoseguro.com",
    "phone": "(512) 966-8764",
  },
  {
    "id": 9,
    "name": "Brigitte Avila",
    "photo": "/images/team/brigitte1.jpg",
    "title": idioma == 'es' ? ('Agente de Seguros') : ('Insurance Agent'),
    "description": idioma == 'es' ? ('Mariana es una experta en seguros de salud y vida. Entiende las dinámicas cambiantes de la vida y ofrece soluciones flexibles que se adaptan a cada etapa. <strong>¡Descubre cómo Mariana puede simplificar tus decisiones de seguro de salud y vida!</strong>') : ('Mariana es una experta en seguros de salud y vida. She understands the changing dynamics of life and offers flexible solutions that adapt to every stage - <strong>find out how Mariana can simplify your health and life insurance decisions!</strong>'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(737) 707-5294",
  },
   {
    "id": 10,
    "name": "Carla Ramirez",
    "photo": "/images/team/carla1.png",
    "title": idioma == 'es' ? ('Agente de Seguros') : ('Insurance Agent'),
    "description": idioma == 'es' ? ('Tu experta en seguros de salud y vida. Su enfoque y conocimiento de nuestros productos la convierten en una aliada invaluable para proteger lo que más te importa. <strong>¡Habla hoy con Sofía para un futuro más seguro!</strong>') : ('Your health and life insurance expert. Her approach and knowledge of our products make her an invaluable ally in protecting what matters most to you. <strong>Talk to Sofia today for a more secure future.</strong>'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(210) 388-3044",
  },

   {
    "id": 11,
    "name": "Leonel Guevara",
    "photo": "/images/team/leo1.png",
    "title": idioma == 'es' ? ('COO') : ('COO'),
    "description": idioma == 'es' ? ('Detrás de un gran equipo, siempre hay alguien que conecta todas las piezas. Siendo el  el puente entre todos nuestros departamentos, garantizando que desde la idea inicial hasta que el producto llega a tus manos, todo funcione de forma coordinada. Es el motor que garantiza que podamos entregarte la mejor experiencia posible, día tras día.') : ('Behind every great team, there is always someone who connects all the pieces. Acting as the bridge between all our departments, ensuring that everything runs smoothly from the initial idea to the moment the product reaches your hands. They are the driving force that guarantees we can deliver the best possible experience, day after day.'),
    "email": "ayuda@hispanoseguro.com",
    "phone": "(210) 388-3044",
  },


]

  const [modal, setModal] = React.useState(false)
  const [id, setId] = React.useState(1)



const obtenerdata = (id, tipo) => {

  console.log(id)

  for (let i = 0; i < data.length; i++) {
      if(id==data[i].id){
        if(tipo == "name"){
          return data[i].name
        }
        if(tipo == "photo"){
          return data[i].photo
          }
          if(tipo == "title"){
            return data[i].title
            }
            if(tipo == "description"){
              return data[i].description
              }
              if(tipo == "email"){
                return data[i].email
                }
                if(tipo == "phone"){
                  return data[i].phone
                }
      }
  }


}


  return (<>
    <div className='flex flex-col mont-regular place-content-center items-center justify-center   leading-none'>
      <span className='text-[50px] md:text-[100px] 2xl:text-[100px] text-[var(--azul-oscuro)]'>{idioma == 'es' ? ('Conoce') : ('Meet')}</span>
      <span className='text-[40px] md:text-[70px] 2xl:text-[70px] text-[var(--azul-oscuro)] mt-[0px] md:mt-[-25px]'>{idioma == 'es' ? ('a nuestro equipo') : ('our team')}</span>
    </div>
    <br /><br />
    <div className='flex flex-col place-content-center items-center justify-center' >
    <div className='w-[100%] md:w-[85%] 2xl:w-[80%] bg-[#e9e9e9] rounded-4xl flex flex-col p-6 pt-12'>
    <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(3, 30%)", justifyContent: "center" }}>
  
  <div className="contenedor-imagen cursor-pointer bg-white" onClick={() => {
  setModal(true);
  setId(4);
  }}>
  <img src="/images/team/mildred1.png" className="imagen h-full" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Mildred Lopez</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer bg-white"  onClick={() => {
  setModal(true);
  setId(11);
  }}>
  <img src="/images/team/leo1.png" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Leonel Guevara</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer bg-white"   onClick={() => {
  setModal(true);
  setId(3);
  }}>
  <img src="/images/team/jose11.png" className="imagen h-full" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Jose Humberto Ramirez</span>
  </div>
</div>

</div>


<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(3, 30%)", justifyContent: "center" }}>
  
    <div className="contenedor-imagen cursor-pointer"  onClick={() => {
  setModal(true);
  setId(8);
  }}>
  <img src="/images/team/omar1.jpg" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Omar Rivero</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer"  onClick={() => {
  setModal(true);
  setId(6);
  }}>
  <img src="/images/team/ninoska1.jpg" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Ninoska Colmenares</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer bg-white"  onClick={() => {
  setModal(true);
  setId(1);
  }}>
  <img src="/images/team/lider.jpg" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Jonathan Barreto</span>
  </div>
</div>



</div>

<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(3, 30%)", justifyContent: "center" }}>
  

  <div className="contenedor-imagen cursor-pointer bg-white"  onClick={() => {
  setModal(true);
  setId(7);
  }}>
  <img src="/images/team/isarys1.png" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Isari Pereira</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer bg-white"  onClick={() => {
  setModal(true);
  setId(2);
  }}>
  <img src="/images/team/johanna1.jpg" className="imagen" />
  
  <div className="overlay"></div>
  
  <div className="etiqueta-nombre hidden hover:block">
    <span>Johanna Rivero</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer"  onClick={() => {
  setModal(true);
  setId(5);
  }}>
  <img src="/images/team/carolina1.jpg" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Carolina Baladi</span>
  </div>
</div>




</div>



<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(2, 30%)", justifyContent: "center" }}>
  
  <div className="contenedor-imagen cursor-pointer"  onClick={() => {
  setModal(true);
  setId(9);
  }}>
  <img src="/images/team/brigitte1.jpg" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Brigitte Avila</span>
  </div>
</div>

  <div className="contenedor-imagen cursor-pointer bg-white"  onClick={() => {
  setModal(true);
  setId(10);
  }}>
  <img src="/images/team/carla1.png" className="imagen" />
  <div className="overlay"></div>
  <div className="etiqueta-nombre hidden hover:block">
    <span>Carla Ramirez</span>
  </div>
</div>


</div>

    </div>
    </div>

{modal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    onClick={() => setModal(false)}
  >
    <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-lg shadow-lg sm:w-[60%] w-[80%] transform transition-all duration-300 opacity-0 scale-95 animate-fade-in">
      {/* Modal Header */}
      <button
          onClick={() => setModal(false)}
          className="absolute mt-[-20px] mr-[-20px] z-100 cursor-pointer top-0 right-0 text-white hover:text-gray-900 rounded-full bg-[var(--azul-oscuro)] p-2"
        >
          ✖
        </button>
      
      
      

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] w-full rounded-lg">
  
  {/* Columna 1 - Foto y contacto */}
  <div className="bg-[var(--azul-oscuro)] rounded-t-lg md:rounded-l-lg md:rounded-tr-none p-2">
    <div className="flex flex-col items-center ">
      <img src={obtenerdata(id, "photo")} width="100%" className="rounded-lg w-[50%] sm:w-full bg-white" />

      <div className="flex flex-row mt-4 items-center space-x-2">
        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
        </svg>
        <span className="mont-bold text-[var(--azul-claro)] text-[10px] sm:text-xs md:text-[14px] 2xl:text-[18px]">{obtenerdata(id, "phone")}</span>
      </div>

      <div className="flex flex-row items-center mt-0 sm:mt-4 space-x-2">
        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
          <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
        </svg>
        <span className="mont-bold text-[var(--azul-claro)] text-[10px] sm:text-xs md:text-[14px] 2xl:text-[18px]">{obtenerdata(id, "email")}</span>
      </div>
    </div>
  </div>

  {/* Columna 2 - Datos y descripción */}
  <div className="bg-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-4 relative">
    <div className="flex flex-col z-30">
      <span className="mont-bold text-lg sm:text-2xl md:text-[30px] 2xl:text-[34px] text-[var(--azul-oscuro)]">{obtenerdata(id, "name")}</span>
      <span className="mont-regular text-md sm:text-xl md:text-[24px] 2xl:text-[26px]  italic text-[var(--azul-claro)]">{obtenerdata(id, "title")}</span>
      <br />
      <p className="mont-regular text-sm sm:text-lg 2xl:text-2xl text-justify" dangerouslySetInnerHTML={{ __html: obtenerdata(id, "description") }}></p>
    </div>
    <img src="/images/logo4.png" style={{ opacity: "0.4" }} className="z-10 absolute bottom-0 right-0 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]" />
  </div>
</div>

    </div>
  </div>
)}


    </>
  )
}

export default Team
