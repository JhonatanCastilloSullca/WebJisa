import React from 'react'
import HeroSectionTour from '../componentes/HeroSectionTour'
import HeroSectionMidle from '../componentes/HeroSectionMidle'

const DestinosDetail = () => {
  return (
    <HeroSectionMidle
      backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
      title="Arequipa"
      description={`La joya blanca del sur Arequipa es un viaje a través de historia, arquitectura y volcanes majestuosos. Conocida como la “Ciudad Blanca”, su centro histórico es un Patrimonio Cultural de la Humanidad lleno de encanto colonial. Desde el impresionante Monasterio de Santa Catalina hasta el imponente Cañón del Colca, hogar del cóndor andino, Arequipa te invita a vivir una experiencia auténtica y diversa. Déjate cautivar por su`}
      buttonText="Ver Tours"
      buttonLink="https://jisaadventure.com/"
    />
  )
}

export default DestinosDetail