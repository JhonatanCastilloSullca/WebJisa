import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import DotIcon from '../assets/icons/DotIcon'
import { useTranslation } from 'react-i18next'

const QueLlevarSection = ({ quellevar }) => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col '>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={t('tours_detail.qué_llevar_a_tu_viaje')} className="text-2xl" />

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