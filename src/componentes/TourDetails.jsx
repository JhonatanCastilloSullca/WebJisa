import React from 'react'
import ParrafoContent from './layout/ParrafoContent'
import MapDotIcon from '../assets/icons/MapDotIcon'
import { useTranslation } from 'react-i18next'

const TourDetails = ({ ubicaciones, descripcion, brochure, imagenSecundaria }) => {
    const { t } = useTranslation()
    return (
        <div className="w-full max-w-7xl mx-auto mt-10 mb-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Texto y Ubicaciones */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
                    <div className="flex flex-wrap justify-center md:justify-start text-JisaVerde gap-x-2 gap-y-1">
                        {ubicaciones.map((ubicacion, index) => (
                            <span key={index} className="font-semibold text-sm sm:text-base">
                                {ubicacion.nombre}
                                {index < ubicaciones.length - 1 && <span className="font-black"> - </span>}
                            </span>
                        ))}
                    </div>
                    <ParrafoContent className="text-JisaGris text-sm sm:text-base leading-relaxed" contenido={descripcion} />
                </div>

                {/* Imagen */}
                <div className="flex justify-center md:justify-start">
                    <img
                        src={imagenSecundaria}
                        alt="Jisa-Nosotros-Paquete"
                        className="w-full h-auto object-cover rounded-lg shadow-md max-h-[400px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default TourDetails