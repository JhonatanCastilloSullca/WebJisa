import React from 'react'
import ClockIcon from '../assets/icons/ClockIcon'
import GroupUsers from '../assets/icons/GroupUsers'
import MountainHikIcon from '../assets/icons/MountainHikIcon'
import BuIcon from '../assets/icons/BuIcon'
import IconCategoria from './IconCategoria'
import SeparatorBar from './SeparatorBar'
import { useTranslation } from 'react-i18next'

const TourInfo = ({ duracion, grupo, tipo, recojo }) => {
    const { t } = useTranslation()

    return (
        <div className="w-full max-w-7xl mx-auto md:-mt-10 z-30 relative md:px-0 px-6 shadow-md bg-white rounded-lg">
            <div className="container mx-auto py-4">
                <div className="grid grid-cols-12 mx-auto justify-start">
                    <div className="md:col-span-3 col-span-6">
                        <IconCategoria icon={ClockIcon} title={t('tours_detail.duracion')} subtitle={duracion == 1 ? 'full day' : duracion + ' day'} className='md:px-16 px-2 text-JisaCyan' />

                    </div>
                    <div className="md:col-span-3 col-span-6">
                        <IconCategoria icon={GroupUsers} title={t('tours_detail.max_grupo')} subtitle={`${grupo} paxs`} className='md:px-16 px-2 text-JisaCyan' />


                    </div>
                    <div className="md:col-span-3 col-span-6">
                        <IconCategoria icon={MountainHikIcon} title={t('tours_detail.tipo_tour')} subtitle={tipo} className='md:px-16 px-2 text-JisaCyan' />

                    </div>
                    <div className="md:col-span-3 col-span-6">
                        <IconCategoria icon={BuIcon} title={t('tours_detail.recojo')} subtitle={recojo} className='md:px-16 px-2 text-JisaCyan' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourInfo