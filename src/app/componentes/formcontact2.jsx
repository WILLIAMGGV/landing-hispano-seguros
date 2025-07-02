import React from 'react'

export const Formcontact2 = () => {
  return (<>

    <div className='mt-[80px] flex flex-col place-content-center items-center justify-center ml-[3%] md:ml-[10%] md:mr-[10%] mr-[3%] bg-[#e0e1dd] w-full'>
        <div className='flex flex-col ml-[3%] mr-[3%] md:ml-[10%] md:mr-[10%] text-[#1b263b]'>
  <span className='text-4xl md:text-7xl mont-black mt-6 md:mt-16'>Para más información</span>
  <span className='text-lg md:text-2xl mont-regular mt-2'>Déjanos tus consultas y nos comunicaremos contigo a la brevedad.</span>

  <input
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl  p-3 mt-2 pl-4"
    type="text"
    placeholder="Nombre"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />

  <input
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4"
    type="text"
    placeholder="Correo"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />

  <select
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  >
    <option defaultValue="0">Selecciona un servicio</option>
    <option value="salud">Seguro de Salud</option>
  <option value="vida">Seguro de Vida</option>
  <option value="auto">Seguro de Auto</option>
  <option value="dental">Seguro Dental</option>
  <option value="vision">Seguro de Visión</option>
  <option value="internacional">Seguro Internacional</option>
  <option value="ultimos-gastos">Seguro de Últimos Gastos</option>
  </select>

  <input
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4"
    type="text"
    placeholder="Código Postal"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />

  <input
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4"
    type="text"
    placeholder="Como deseas que nos comuniquemos contigo"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />
  <br />
  <br />
  <br />
</div>



    </div>

     <div className='flex flex-col place-content-center justify-center items-center'>
        <div   style={{ boxShadow: '5px 5px 6px rgba(0, 0, 0, 0.7)' }} className='bg-[#e0e1dd] hover:bg-[#1b263b] rounded-[6px] p-4 mont-bold hover:text-white cursor-pointer text-[var(--azul-oscuro)] text-xl md:text-3xl mt-3 w-[150px] md:w-[200px] text-center'>
            Enviar
        </div>
    </div>
    <br />
   
    </>
  )
}
