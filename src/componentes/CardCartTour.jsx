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
                        src={tour.imageUrl || "https://picsum.photos/690/390"}
                        alt={tour.title}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="data-tour flex flex-col gap-y-2 w-full">
                    <span className="font-semibold text-sm md:text-base text-JisaGris">{tour.title}</span>
                    <div className="flex items-center text-JisaGrisTextGray gap-1">
                        <MapDotIcon size={14} />
                        <div className="md:text-sm text-xs">{tour.location}</div>
                    </div>
                    <div className="md:flex md:justify-between">
                        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 py-2">
                            <div className="flex md:flex-col gap-3 text-JisaAmarillo w-full sm:flex-1">
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
                            </div>

                            <div className="flex md:flex-col gap-3 text-JisaAmarillo w-full sm:flex-1">
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

                            <div className="flex md:flex-col gap-3 text-JisaAmarillo w-full sm:flex-1">
                                <IconCategoria
                                    icon={CalendarIcon}
                                    title="Fecha"
                                    subtitle={tour.date}
                                    tamaño={20}
                                    tamañotitulo="text-base"
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