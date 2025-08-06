"use client"
import React, {useEffect} from 'react'
import { usePathname } from 'next/navigation';
import { PulseLoader } from "react-spinners";

import toast, { Toaster } from 'react-hot-toast';

export const Formcontact = ({idioma}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
 const pathname = usePathname();
 const [titulo, setTitulo] = React.useState("");
 const [titulo2, setTitulo2] = React.useState("");
 const [tipo, setTipo] = React.useState("");

 const cambiartipo = (e) => {

  if(e == "Call"){
    setTipo("Enter your phone number");
  }
  if(e == "Llamada"){
    setTipo("Ingrese su numero de telefono")
  }
  if(e == "Whatsapp"){
    if(idioma == "es"){
      setTipo("Ingrese su numero de telefono")
    }else{
      setTipo("Enter your phone number")
    }
  }

  if(e == "E-Mail"){
    setTipo("Enter your email")
  }
  if(e == "Correo Electronico"){
    setTipo("Ingrese su correo electronico")
  }


 }

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

let name = document.getElementById('formu_name').value;
let deseas = document.getElementById('formu_deseas').value;
let message = document.getElementById('formu_message').value;
let service = document.getElementById('formu_service').value;
let zipcode = document.getElementById('formu_zipcode').value;





if(name == ""  || message == "" || zipcode == ""){
if(idioma == "es"){
  toast.error("Campos Vacios")
}else{
  toast.error("Empty Fields")
}
setLoading(false)
  return

}

if(service == "0"){
  if(idioma == "es"){
    toast.error("Seleccione un Servicio")
  }
  else{
    toast.error("Please select a service")
  }
  setLoading(false)
  return
}

if(deseas == "0"){
  if(idioma == "es"){
    toast.error("¡Atención! Por favor, elige cómo prefieres que te contactemos para poder continuar.")
  }
  else{
    toast.error("Attention! Please choose how you would prefer to be contacted in order to continue.")
  }
  setLoading(false)
  return
}



    const data = {
        'name': name,
        'deseas': deseas,
        'message': message,
        'service': service,
        'zipcode': zipcode

    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/sendmail`, {
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
                setIsOpen(true)
                setNombre(name)
                setLoading(false)
                setTimeout(() => {
                  setIsOpen(false)
                 document.getElementById('formu_name').value="";

document.getElementById('formu_message').value="";
document.getElementById('formu_service').selectedIndex = 0;
document.getElementById('formu_deseas').selectedIndex = 0;
document.getElementById('formu_zipcode').value="";
setNombre("")
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
    console.log('Ruta actual:', pathname);
    if(pathname == "/"){
setTitulo("Do you have more questions?")
setTitulo2("¿Tienes más dudas?")
    }else{
      setTitulo("For more information")
      setTitulo2("Para más información")
    }
   
  }, [pathname]);



  return (<>

    <div className='mt-[80px] flex flex-col place-content-center items-center justify-center ml-[3%] md:ml-[10%] md:mr-[10%] mr-[3%] bg-[#e0e1dd] w-full'>
        <div className='flex flex-col ml-[3%] mr-[3%] md:ml-[10%] md:mr-[10%] text-[#1b263b]'>
  <span className='text-3xl md:text-5xl 2xl:text-7xl mont-black mt-6 md:mt-16'>{idioma == 'es' ? titulo2 : titulo}</span>
  <span className='text-md md:text-2xl mont-regular mt-2'>{idioma == 'es' ? ('Déjanos tus consultas y nos comunicaremos contigo a la brevedad.') : ('Leave us your questions and we will contact you as soon as possible.')}</span>
    <form>
  <input
  id="formu_name"
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl  p-3 mt-2 pl-4 w-full"
    type="text"
    placeholder={idioma == 'es' ? ('Nombre') : ('Name')}
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />



  <select
  id="formu_service"
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4 w-full"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  >
    <option defaultValue="0" value="0">{idioma == 'es' ? ('Selecciona un servicio') : ('Select a service')}</option>
    <option value={idioma == 'es' ? ('Seguro de Salud') : ('Health Insurance')}>{idioma == 'es' ? ('Seguro de Salud') : ('Health Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro de Vida') : ('Life Insurance')}>{idioma == 'es' ? ('Seguro de Vida') : ('Life Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro de Auto') : ('Auto Insurance')}>{idioma == 'es' ? ('Seguro de Auto') : ('Auto Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro Dental') : ('Dental Insurance')}>{idioma == 'es' ? ('Seguro Dental') : ('Dental Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}>{idioma == 'es' ? ('Seguro de Visión') : ('Vision Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro Internacional') : ('International Insurance')}>{idioma == 'es' ? ('Seguro Internacional') : ('International Insurance')}</option>
  <option value={idioma == 'es' ? ('Seguro de Últimos Gastos') : ('Final Expense Insurance')}>{idioma == 'es' ? ('Seguro de Últimos Gastos') : ('Final Expense Insurance')}</option>
  </select>

  <input
  id="formu_zipcode"
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4 w-full"
    type="text"
    placeholder={idioma == 'es' ? ('Código Postal') : ('Zip Code')}
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />
  <select
  id="formu_deseas" onChange={(e) => cambiartipo(e.target.value)}
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4 w-full"
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  >
    <option defaultValue="0" value="0">{idioma == 'es' ? ('Como deseas que nos comuniquemos contigo') : ('How would you like us to contact you?')}</option>
    <option value={idioma == 'es' ? ('Llamada') : ('Call')}>{idioma == 'es' ? ('Llamada') : ('Call')}</option>
  <option value={idioma == 'es' ? ('Whatsapp') : ('Whatsapp')}>{idioma == 'es' ? ('Whatsapp') : ('Whatsapp')}</option>
  <option value={idioma == 'es' ? ('Correo Electronico') : ('E-Mail')}>{idioma == 'es' ? ('Correo Electronico') : ('E-Mail')}</option>
  </select>
  <input
  id="formu_message"
    className="bg-[var(--azul-oscuro)] text-white text-lg md:text-2xl p-3 mt-4 pl-4 w-full"
    type="text"
    placeholder={tipo}
    style={{ boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.7)' }}
  />
  <br />
  <br />
  <br />
  </form>
</div>



    </div>

     <div onClick={() => {
     sendmail();
     }} className='flex flex-col place-content-center justify-center items-center'>
        <div   style={{ boxShadow: '5px 5px 6px rgba(0, 0, 0, 0.7)' }} className='bg-[#e0e1dd] hover:bg-[#1b263b] rounded-[6px] p-2 md:p-4 mont-bold hover:text-white cursor-pointer text-[var(--azul-oscuro)] text-lg md:text-3xl mt-3 w-[150px] md:w-[200px] text-center'>
          {loading ? (
                      <PulseLoader color="#ffffff" />
                    ) : (
                      <>{idioma == 'es' ? ('Enviar') : ('Send')}</>
                    )}  
        </div>
    </div>
    <br />

     {isOpen && (
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
