import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import DotIcon from '../assets/icons/DotIcon'

const QueLlevarSection = ({ quellevar }) => {
    return (
        <div className='flex flex-col '>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={'Qué llevar a tu viaje'} className="text-2xl" />

            <div className="text-JisaCyan flex flex-col gap-y-4 mt-4">
                {quellevar.map((item, index) => (
                    <div key={index} className="flex gap-x-4 items-center">
                        <DotIcon size={28} className="" />
                        <span className="text-JisaGrisTextGray font-light text-base">{item.quellevar}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QueLlevarSection