import React from 'react'
import HeroSectionMidle from '../componentes/HeroSectionMidle'

const TerminosCondiciones = () => {
    return (

        <>
            <HeroSectionMidle
                backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                title="TERMINOS Y CONDICIONES"
                description={`La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. `}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className='contenido-text-testimonios'>
                    <h3>Titulo</h3>
                    <h4 >Subtitulo</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum error et beatae laudantium aut deserunt similique voluptas assumenda consectetur totam. Omnis deserunt animi saepe placeat repellendus! Aliquid nemo deleniti quibusdam?
                    </p>
                    <h4 >Subtitulo</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum error et beatae laudantium aut deserunt similique voluptas assumenda consectetur totam. Omnis deserunt animi saepe placeat repellendus! Aliquid nemo deleniti quibusdam?
                    </p>
                </div>
            </div>
        </>
    )
}

export default TerminosCondiciones