import React from 'react'
import ClockIcon from '../assets/icons/ClockIcon'
import GroupUsers from '../assets/icons/GroupUsers'
import MountainHikIcon from '../assets/icons/MountainHikIcon'
import BuIcon from '../assets/icons/BuIcon'
import IconCategoria from './IconCategoria'
import SeparatorBar from './SeparatorBar'

const TourInfo = ({ duracion, grupo, tipo, recojo }) => {
    return (
        <div className="w-full max-w-7xl mx-auto md:-mt-10 z-30 relative md:px-0 px-6 shadow-md bg-white rounded-lg">
            <div className="container mx-auto py-4">
                <div className="flex mx-auto justify-center">
                    <IconCategoria icon={ClockIcon} title={'Duración'} subtitle={duracion} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={GroupUsers} title={'Max Grupo'} subtitle={`${grupo} personas`} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={MountainHikIcon} title={'Tipo tour'} subtitle={tipo} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={BuIcon} title={'Recojo'} subtitle={recojo} className='px-16 text-JisaCyan' />
                </div>
            </div>
        </div>
    )
}

export default TourInfo