import React from 'react'

const Team = () => {
  return (<>
    <div className='flex flex-col mont-regular place-content-center items-center justify-center   leading-none'>
      <span className='text-[180px] text-[var(--azul-oscuro)]'>Conoce</span>
      <span className='text-[90px] text-[var(--azul-oscuro)] mt-[-40px]'>a nuestro equipo</span>
    </div>
    <br /><br />
    <div className='flex flex-col place-content-center items-center justify-center' >
    <div className='w-[90%] bg-[#e9e9e9] rounded-4xl flex flex-col p-6 pt-12'>
    <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(3, 30%)", justifyContent: "center" }}>
  
  <div class="contenedor-imagen">
  <img src="/images/team/lider.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/johanna1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/jose1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

</div>

<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(2, 30%)", justifyContent: "center" }}>
  
  <div class="contenedor-imagen">
  <img src="/images/team/mildred1.jpg" class="imagen" />
  
  <div class="overlay"></div>
  
  <div class="etiqueta-nombre hidden hover:block">
    <span>Mildred Lopez</span>
  </div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/carolina1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>


</div>

<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(3, 30%)", justifyContent: "center" }}>
  
  <div class="contenedor-imagen">
  <img src="/images/team/ninoska1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/isarys1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/omar1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

</div>

<div className="grid gap-8 mt-8" style={{ gridTemplateColumns: "repeat(2, 30%)", justifyContent: "center" }}>
  
  <div class="contenedor-imagen">
  <img src="/images/team/brigitte1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>

  <div class="contenedor-imagen">
  <img src="/images/team/carla1.jpg" class="imagen" />
  <div class="overlay"></div>
</div>


</div>

    </div>
    </div>
    </>
  )
}

export default Team
