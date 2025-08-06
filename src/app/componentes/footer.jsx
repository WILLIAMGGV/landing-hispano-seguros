"use client"
import { Listbox } from '@headlessui/react'

import React, {useState, useEffect} from 'react'
import { Button, Input, Space } from "antd";
import { ClipLoader, PulseLoader } from "react-spinners";
 import toast, { Toaster } from 'react-hot-toast';

const languages = [
  { name: 'Español', value: 'es', icon: '/images/es.png' },
  { name: 'Inglés', value: 'en', icon: '/images/us.png' },
]

export const Footer = ({idioma, setidioma}) => {
    const [selected, setSelected] = useState(idioma == 'es' ? (languages[0]) : (languages[1]))

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isOpen2, setIsOpen2] = React.useState(false);
   

      const [nombre, setNombre] = React.useState("");

     const [titulo, setTitulo] = React.useState("");
     const [titulo2, setTitulo2] = React.useState("");
    
    
     function validarEmail(email) {
      // Expresión regular para validar el email
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (regex.test(email)) {
        return true;
      } else {
        return false;
      }
    }
    
    
      const sendmail = (e) => {
    setLoading(true)
    
    let name = document.getElementById('name_agente').value;
    let email = document.getElementById('email_agente').value;
    let phone = document.getElementById('phone_agente').value;
    
    
    if(!validarEmail(email)){
      if(idioma == "es"){
    toast.error("Email Invalido!")
      }else{
        toast.error("Invalid Email!")
      }
    
    setLoading(false)
      return
    
    }
    
    
    if(name == "" || email == "" || phone == ""){
    if(idioma == "es"){
      toast.error("Campos Vacios")
    }else{
      toast.error("Empty Fields")
    }
    setLoading(false)
      return
    
    }
    
   
    
    
    
        const data = {
            'name': name,
            'email': email,
            'phone': phone
    
        };
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/sendmail2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    console.log(result);
                     document.getElementById('name_agente').value="";
    document.getElementById('phone_agente').value="";
    document.getElementById('email_agente').value="";

                    setIsOpen(false)
                    setIsOpen2(true)
                    setNombre(name)
                    setLoading(false)
                    setTimeout(() => {
                      
                        setNombre("")
    setIsOpen2(false)
                    }, 5000);
                } else {
                    console.log(result);
                }
            })
            .catch(error => {
                console.log(error);
            });
    
      }
    




    useEffect(() => {
      if(localStorage.getItem('idioma')){
        setSelected(localStorage.getItem('idioma') == 'es' ? (languages[0]) : (languages[1]))
 
      }
      
      
    }, []);

    useEffect(() => {
      setidioma(selected.value)
    }, [selected]);


  return (<>
    <div className='bg-[#1b263b] w-full'>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8">
    
    {/* Logo */}
    <div className="p-4 flex justify-center sm:justify-start">
      <a href="/"><img src="/images/logo3.png" alt="Logo" className="w-[250px]" /></a>
    </div>

    {/* Enlaces de navegación */}
    <div className="p-4 text-white text-base mont-regular">
      <div className='flex flex-col items-start space-y-2'>
        <a href="/" className='transition-all duration-200 hover:scale-105'><span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Inicio') : ('Home')}</span></a>
        <a href="/who" className='transition-all duration-200 hover:scale-105'><span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Sobre Nosotros') : ('About Us')}</span></a>
        <a href="/services" className='transition-all duration-200 hover:scale-105'><span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Nuestros servicios') : ('Our services')}</span></a>
        <a href="/#contact" className='transition-all duration-200 hover:scale-105'><span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Contacto') : ('Contact')}</span></a>
      </div>
    </div>

    {/* Enlaces legales */}
    <div className="p-4 text-white text-base mont-regular">
      <div className='flex flex-col items-start space-y-2'>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Términos y condiciones') : ('Terms and Conditions')}</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Políticas de privacidad') : ('Privacy Policy')}</span>
        <span className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Aviso de privacidad') : ('Privacy Notice')}</span>
        <span onClick={() => {
        setIsOpen(true);
        }} className="cursor-pointer transition-all duration-200 hover:text-white hover:scale-105">{idioma == 'es' ? ('Conviértete en Agente') : ('Become an Agent')}</span>
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
        <a href="https://www.facebook.com/hispaseguros/" target="_blank"><img src="/images/facebook.png" alt="Facebook" width="50px" className="hover:scale-110 transition-transform cursor-pointer" /></a>
        <a href="https://api.whatsapp.com/send/?phone=12108763360" target="_blank"><img src="/images/whatsapp.png" alt="WhatsApp" width="50px" className="hover:scale-110 transition-transform cursor-pointer" /></a>
        <a href="https://www.instagram.com/hispaseguros?igsh=MWl2NjRobGtibmt0cg==" target="_blank"><img src="/images/instagram.png" alt="Instagram" width="50px" className="hover:scale-110 transition-transform cursor-pointer" /></a>
      </div>

    </div>
    
  </div>
  <div className='bg-[var(--azul-claro)] w-full'>
    <div className='flex flex-col text-[10px] sm:text-xl sm:flex-row place-content-center justify-center items-center text-white mont-regular p-2'>
      <div className='flex flex-row place-content-center items-center justify-center'>
      <img src="/images/map.png" width="20px" alt="" />
      <span className='ml-2'> 85 NE Loop 410 Suite 624, San Antonio, TX 78216</span>
      </div>
      <div className='flex flex-row place-content-center items-center justify-center'>
      <img src="/images/mail.png"  className='ml-2'  width="20px" alt="" />
      <span className='ml-2'>ayuda@hispanoseguro.com</span>
      </div>
    </div>
  </div>
  <br />
</div>


  {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-400 bg-opacity-50"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-3xl shadow-sm">
              {/* Header */}
              <div className="flex items-center text-center justify-between p-4 rounded-t">
               <span>&nbsp;</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 z-1000 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-row place-content-center justify-center items-center mt-[-20px] pangram-regular">
                 <img
                  src={idioma == 'es' ? ('/images/conviertete1.png') : ('/images/become1.png')}
                  style={{ marginLeft: "20px" }}
                  width="80%"
                />
              </div>

              {/* Body */}
              <div className="p-8">
                <form className="space-y-4">
                  <div  className='mt-[-30px]'>
                    <label htmlFor="name_agente" className='text-[var(--azul-claro)] font-bold'>{idioma == 'es' ? ('Nombre') : ('Name')}</label>
                    <Input
                      placeholder=""
                      id="name_agente"
                      style={{
                        backgroundColor: "#eee1ff",
                        height: "40px",
                        fontSize: "16px",
                      }}
                      className="bg-[#eee1ff] h-10 text-[16px] focus:bg-[#eee1ff]"
                    />
                  </div>
                  <div className='mt-[-10px]'>
                    <label htmlFor="email_agente" className='text-[var(--azul-claro)] font-bold'>{idioma == 'es' ? ('Correo Electronico') : ('E-Mail')}</label>
                    <Input
                      placeholder=""
                      id="email_agente"
                      style={{
                        backgroundColor: "#eee1ff",
                        height: "40px",
                        fontSize: "16px",
                      }}
                      className="bg-[#eee1ff] h-10 text-[16px] focus:bg-[#eee1ff]"
                    />
                  </div>

                   <div  className='mt-[-10px]'>
                    <label htmlFor="phone_agente" className='text-[var(--azul-claro)] font-bold'>{idioma == 'es' ? ('Telefono') : ('Phone')}</label>
                    <Input
                      placeholder=""
                      id="phone_agente"
                      style={{
                        backgroundColor: "#eee1ff",
                        height: "40px",
                        fontSize: "16px",
                      }}
                      className="bg-[#eee1ff] h-10 text-[16px] focus:bg-[#eee1ff]"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setLoading(true);
                      sendmail()
                    }}
                    className="w-full text-white pangram-regular bg-[#3c2c63] hover:bg-[var(--azul-claro)] hover:font-bold cursor-pointer hover:text-[#3c2c63] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {loading ? (
                      <PulseLoader color="#ffffff" />
                    ) : (
                      <span>{idioma == 'es' ? ('Enviar mis datos') : ('Send my Data')}</span>
                    )}
                  </button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

  {isOpen2 && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-400 bg-opacity-50"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-3xl shadow-sm">
              {/* Header */}
              <div className="flex items-center text-center justify-between p-4 rounded-t ">
                <span>&nbsp;</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-center flex flex-row place-content-center justify-center items-center mt-[-20px] pangram-regular">
                <img src="/images/logo.png" width="300px" />
              </div>

              {/* Body */}
              <div className="p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-4">
  <form className="space-y-4">
    <div className="flex flex-col items-center text-center space-y-2">
       <img src="/images/send.gif" width="100px" alt="" />
      <span className="text-2xl font-bold text-indigo-700">¡Gracias por contactarnos!</span>
      <span className="text-xl font-bold text-[var(--azul-claro)]">{nombre}</span>
      <span className="text-gray-600 text-base">
        Estamos en proceso de responder su correo electrónico.
      </span>
     
    </div>
  </form>
</div>
            </div>
          </div>
        </div>
      )}
    <Toaster />
</>
  )
}
