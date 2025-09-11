import React from 'react'
import MapDotIcon from '../assets/icons/MapDotIcon'
import IconCategoria from './IconCategoria'
import ClockIcon from '../assets/icons/ClockIcon'
import MountainHikIcon from '../assets/icons/MountainHikIcon'
import GroupUsers from '../assets/icons/GroupUsers'
import BuIcon from '../assets/icons/BuIcon'
import CalendarIcon from '../assets/icons/CalendarIcon'
import TrashIcon from '../assets/icons/TrashIcon'
import SeparatorBar from './SeparatorBar'

const CardCartTour = ({ tour, cantidad, onCantidadChange, onRemove }) => {
    return (
        <div className="card-tour relative p-4 border rounded-md shadow-md">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="img-tour h-20 md:h-20 w-full md:w-32">
                    <img
                        src={tour.imageUrl}
                        alt={tour.title}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="data-tour flex flex-col gap-y-2 w-full">
                    <span className="font-semibold text-sm md:text-base text-JisaGris">{tour.titulo}</span>
                    <div className="flex items-center text-JisaGrisTextGray gap-1">
                        <MapDotIcon size={14} />
                        <div className="md:text-sm text-xs">{tour.location}</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 text-JisaAmarillo">
                            <IconCategoria
                            icon={ClockIcon}
                            title="Duración"
                            subtitle={tour.duration}
                            tamaño={20}
                            tamañotitulo="text-base"
                            />
                            <IconCategoria
                            icon={MountainHikIcon}
                            title="Dificultad"
                            subtitle={tour.difficulty}
                            tamaño={20}
                            tamañotitulo="text-base"
                            />
                            <IconCategoria
                            icon={GroupUsers}
                            title="Grupo"
                            subtitle={`${tour.groupSize} Personas`}
                            tamaño={20}
                            tamañotitulo="text-base"
                            />
                            <IconCategoria
                            icon={BuIcon}
                            title="Transporte"
                            subtitle={tour.transport}
                            tamaño={20}
                            tamañotitulo="text-base"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <div className="cantidad-tour flex flex-col items-center">
                            <span className="font-semibold text-sm text-JisaCyan">Cantidad de pasajeros</span>
                            <div className="flex items-center gap-2 p-2">
                                <input
                                    type="date"
                                    value={tour.date}
                                    className="text-JisaGrisTextGray text-lg w-50 rounded-sm text-center border border-JisaGrisTextGray/30 bg-white"
                                />
                            </div>
                        </div>
                        <div className="cantidad-tour flex flex-col justify-center md:items-start sm:items-center items-center">
                            <span className="font-semibold text-sm text-JisaCyan">Cantidad de pasajeros</span>
                            <div className="flex items-center gap-2 p-2">
                                <button onClick={() => onCantidadChange(tour.id, cantidad - 1)} className="font-bold text-JisaGris text-2xl px-3">-</button>
                                <input
                                    type="text"
                                    value={cantidad}
                                    readOnly
                                    className="text-JisaGrisTextGray text-lg w-20 rounded-sm text-center border border-JisaGrisTextGray/30 bg-white"
                                />
                                <button onClick={() => onCantidadChange(tour.id, cantidad + 1)} className="font-bold text-JisaGris text-2xl px-3">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="text-red-800 absolute top-2 right-2"
                    onClick={() => onRemove(tour.slug)}
                >
                    <TrashIcon size={15} />
                </button>
            </div>
        </div>


    )
}

export default CardCartTour