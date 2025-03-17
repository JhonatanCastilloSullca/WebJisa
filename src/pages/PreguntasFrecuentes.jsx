import ItinerarioIcon from '../assets/icons/ItinerarioIcon'
import HeroSectionMidle from '../componentes/HeroSectionMidle'

const PreguntasFrecuentes = () => {
    return (
        <>
            <HeroSectionMidle
                backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                title="POLITICA DE PRIVACIDAD"
                description={`La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. `}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 px-24">
                <div className="relative flex justify-between items-center">
                    {/* Línea de fondo (limitada al ancho entre los íconos) */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-JisaGris w-[80%] -translate-y-1/2 mx-auto z-0"></div>

                    {/* Íconos y etiquetas */}
                    <div className="flex flex-col justify-center items-center z-10">
                        <div className='h-20 w-20 rounded-full bg-JisaGris text-JisaVerde flex justify-center items-center'>
                            <ItinerarioIcon size={40} />
                        </div>
                        <span className='font-bold text-2xl text-JisaGris'>Tours</span>
                    </div>

                    <div className="flex flex-col justify-center items-center z-10">
                        <div className='h-20 w-20 rounded-full bg-JisaGris text-JisaVerde flex justify-center items-center'>
                            <ItinerarioIcon size={40} />
                        </div>
                        <span className='font-bold text-2xl text-JisaVerde'>Datos personales</span>
                    </div>

                    <div className="flex flex-col justify-center items-center z-10">
                        <div className='h-20 w-20 rounded-full bg-JisaGris text-JisaVerde flex justify-center items-center'>
                            <ItinerarioIcon size={40} />
                        </div>
                        <span className='font-bold text-2xl text-JisaGris'>Recomendaciones</span>
                    </div>
                </div>
            </div>


        </>

    )
}

export default PreguntasFrecuentes