"use client"
import { Listbox } from '@headlessui/react'

import React, {useState} from 'react'

const languages = [
  { name: 'Español', value: 'es', icon: '/images/es.png' },
  { name: 'Inglés', value: 'en', icon: '/images/us.png' },
]

export const Footer = () => {
    const [selected, setSelected] = useState(languages[0])

  return (
    <div className='bg-[#1b263b] w-full'>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8">
    
    {/* Logo */}
    <div className="p-4 flex justify-center sm:justify-start">
      <img src="/images/logo3.png" alt="Logo" className="w-[250px]" />
    </div>

    {/* Enlaces de navegación */}
    <div className="p-4 text-white text-base mont-regular">
      <div className='flex flex-col items-start space-y-2'>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Inicio</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Sobre Nosotros</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Nuestros servicios</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Contacto</span>
      </div>
    </div>

    {/* Enlaces legales */}
    <div className="p-4 text-white text-base mont-regular">
      <div className='flex flex-col items-start space-y-2'>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Términos y condiciones</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Políticas de privacidad</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Aviso de privacidad</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">Trabaja con nosotros</span>
      </div>
    </div>

    {/* Selector de idioma + Redes sociales */}
    <div className="p-4 flex flex-col items-center sm:items-start">
      
      {/* Selector */}
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="bg-[#e0e1dd] p-3 rounded w-[200px] shadow-md">
          <div className="flex items-center justify-center gap-2 text-[var(--azul-oscuro)] mont-regular text-md">
            <img src={selected.icon} className="w-5 h-5 rounded-full" alt="" />
            {selected.name}
          </div>
        </Listbox.Button>
        <Listbox.Options className="bg-white rounded shadow mt-1 w-[200px]">
          {languages.map((lang) => (
            <Listbox.Option key={lang.value} value={lang} className="cursor-pointer hover:bg-gray-100 p-2">
              <div className="flex items-center gap-2 text-[var(--azul-oscuro)] mont-regular text-md">
                <img src={lang.icon} className="w-5 h-5 rounded-full" alt="" />
                {lang.name}
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      {/* Redes Sociales */}
      <div className='flex justify-center sm:justify-start items-center mt-4 space-x-3'>
        <img src="/images/facebook.png" alt="Facebook" width="50px" className="hover:scale-110 transition-transform cursor-pointer" />
        <img src="/images/whatsapp.png" alt="WhatsApp" width="50px" className="hover:scale-110 transition-transform cursor-pointer" />
        <img src="/images/instagram.png" alt="Instagram" width="50px" className="hover:scale-110 transition-transform cursor-pointer" />
      </div>

    </div>
    
  </div>
  <div className='bg-[var(--azul-claro)] w-full'>
    <div className='flex flex-row place-content-center justify-center items-center text-white mont-regular p-2'>
      <img src="/images/map.png" width="20px" alt="" />
      <span className='ml-2'> 85 NE Loop 410 Suite 624, San Antonio, TX 78216</span>
      <img src="/images/mail.png"  className='ml-2'  width="20px" alt="" />
      <span className='ml-2'>ayuda@hispanoseguro.com</span>
    </div>
  </div>
  <br />
</div>

  )
}
