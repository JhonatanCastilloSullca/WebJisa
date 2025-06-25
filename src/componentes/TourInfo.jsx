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
                <div className="flex mx-auto justify-center">
                    <IconCategoria icon={ClockIcon} title={t('tours_detail.duracion')} subtitle={duracion == 1 ? 'full day' : subtitle+' day'} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={GroupUsers} title={t('tours_detail.max_grupo')} subtitle={`${grupo} paxs`} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={MountainHikIcon} title={t('tours_detail.tipo_tour')} subtitle={tipo} className='px-16 text-JisaCyan' />
                    <SeparatorBar />
                    <IconCategoria icon={BuIcon} title={t('tours_detail.recojo')} subtitle={recojo} className='px-16 text-JisaCyan' />
                </div>
            </div>
        </div>
    )
}

export default TourInfo