import React from 'react'
import ParrafoContent from './layout/ParrafoContent'
import MapDotIcon from '../assets/icons/MapDotIcon'

const TourDetails = ({ ubicaciones, descripcion, brochure, imagenSecundaria }) => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                    <div className="flex text-JisaVerde gap-x-2">
                        {ubicaciones.map((ubicacion, index) => (
                            <span key={index} className="font-semibold">
                                {ubicacion.ubicacion}
                                {index < ubicaciones.length - 1 && <span className="font-black"> - </span>}
                            </span>
                        ))}
                    </div>
                    <ParrafoContent contenido={descripcion} />
                    <a
                        href={brochure}
                        className="flex px-4 my-4 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MapDotIcon />
                        Descargar Brochure
                    </a>
                </div>
                <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                    <img src={imagenSecundaria} alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default TourDetails