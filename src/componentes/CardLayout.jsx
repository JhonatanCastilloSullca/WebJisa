import React from 'react'
import StarIcon from '../assets/icons/StarIcon'

const CardLayout = () => {
  return (
    <div
      class="rounded-2xl bg-cover h-[570px] w-full  snap-center relative shrink-0"
    >
      <img
        src={`https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp`}
        alt=""
        class="h-96 w-auto object-cover rounded-lg"
      />
      <div
        class="border-b-white border-b-2 text-white flex justify-between py-4 mb-2"
      >
        <span class=" font-normal text-xl">Dia 1</span>
        <div class="stars flex w-24 text-JisaCyan gap-x-1">
          <StarIcon class="" />
          <StarIcon class="" />
          <StarIcon class="" />
          <StarIcon class="" />
          <StarIcon class="" />
        </div>
      </div>
      <div class="text-white  font-light leading-4 text-xs px-1">
        Montserrat es una tipografía limpia, moderna y versátil que ofrece una
        excelente legibilidad en pantalla. Con formas geométricas y un estilo
        sofisticado, funciona muy bien en títulos, encabezados y contenido
        general. Es perfecta para transmitir .
      </div>
    </div>
  )
}

export default CardLayout