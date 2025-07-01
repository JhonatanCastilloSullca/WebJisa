import React from 'react'
import StarIcon from '../assets/icons/StarIcon'

const CardLayout = () => {
  return (
    <div
      className="rounded-2xl bg-cover h-[570px] w-full  snap-center relative shrink-0"
    >
      <img
        src={`url("/agencia-de-viaje-cusco-jisaadventure.webp")`}
        alt=""
        className="h-96 w-auto object-cover rounded-lg"
      />
      <div
        className="border-b-white border-b-2 text-JisaGrisTextGray flex justify-between py-4 mb-2"
      >
        <span className=" font-normal text-xl">Dia 1</span>
        <div className="stars flex w-24 text-JisaCyan gap-x-1">
          <StarIcon className="" />
          <StarIcon className="" />
          <StarIcon className="" />
          <StarIcon className="" />
          <StarIcon className="" />
        </div>
      </div>
      <div className="text-JisaGrisTextGray  font-light leading-4 text-xs px-1">
        Montserrat es una tipografía limpia, moderna y versátil que ofrece una
        excelente legibilidad en pantalla. Con formas geométricas y un estilo
        sofisticado, funciona muy bien en títulos, encabezados y contenido
        general. Es perfecta para transmitir .
      </div>
    </div>
  )
}

export default CardLayout