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

        <div className="card-tour relative">
            <div className="flex gap-4 w-full items-center">
                <div className="img-tour h-20 w-32 min-w-max">
                    <img
                        src={tour.imageUrl || "https://picsum.photos/690/390"}
                        alt={tour.title}
                        className="w-full h-full object-cover rounded-md block"
                    />
                </div>
                <div className='data-tour flex flex-col gap-y-1 w-auto'>
                    <span className='font-semibold text-base text-JisaGris'>{tour.title}</span>
                    <div className="flex text-JisaGrisTextGray">
                        <MapDotIcon size={14} />
                        <div className="text-xs font-medium">{tour.location}</div>
                    </div>
                    <div className="flex py-2">
                        <div className="flex gap-y-4 flex-col text-JisaAmarillo">
                            <IconCategoria icon={ClockIcon} title={'Duración'} subtitle={tour.duration} tamaño={20} tamañotitulo={'text-base'} className='pe-3' />
                            <IconCategoria icon={MountainHikIcon} title={'Dificultad'} subtitle={tour.difficulty} tamaño={20} tamañotitulo={'text-base'} className='pe-3' />
                        </div>
                        <SeparatorBar />
                        <div className="flex gap-y-4 flex-col text-JisaAmarillo">
                            <IconCategoria icon={GroupUsers} title={'Grupo'} subtitle={tour.groupSize + " Personas"} tamaño={20} tamañotitulo={'text-base'} className='px-3' />
                            <IconCategoria icon={BuIcon} title={'Transporte'} subtitle={tour.transport} tamaño={20} tamañotitulo={'text-base'} className='px-3' />
                        </div>
                        <SeparatorBar />
                        <div className="flex gap-y-4 flex-col text-JisaAmarillo">
                            <IconCategoria icon={CalendarIcon} title={'Fecha'} subtitle={tour.date} tamaño={20} tamañotitulo={'text-base'} className='px-3' />
                        </div>
                    </div>
                </div>
                <div className="cantidad-tour flex flex-col justify-center">
                    <span className="font-semibold text-sm text-JisaCyan text-center">Cantidad de pasajeros</span>
                    <div className="flex p-2 justify-center">
                        <button onClick={() => onCantidadChange(tour.id, cantidad - 1)} className="font-bold text-JisaGris text-3xl px-4">-</button>
                        <input type="text" value={cantidad} readOnly className="text-JisaGrisTextGray text-xl w-24 rounded-sm text-center border-2 border-JisaGrisTextGray/5 bg-white" />
                        <button onClick={() => onCantidadChange(tour.id, cantidad + 1)} className="font-bold text-JisaGris text-3xl px-4">+</button>
                    </div>
                </div>
                <button className='text-red-800 absolute top-0 right-0' onClick={() => onRemove(tour.id)}>
                    <TrashIcon size={15} />
                </button>
            </div>
        </div>

    )
}

export default CardCartTour