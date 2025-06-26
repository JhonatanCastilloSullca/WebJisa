import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import DotIcon from '../assets/icons/DotIcon'
import { useTranslation } from 'react-i18next'

const QueLlevarSection = ({ quellevar }) => {

    const parseHtmlList = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return [...doc.querySelectorAll('li')].map(li => li.textContent.trim());
    };

    const queLlevarList = parseHtmlList(quellevar);

    const { t } = useTranslation()
    return (
        <div className='flex flex-col '>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={t('tours_detail.qué_llevar_a_tu_viaje')} className="text-2xl" />

            <div className="text-JisaCyan flex flex-col gap-y-4 mt-4">
                {queLlevarList.map((item, index) => (
                <div key={index} className="flex gap-x-4 items-center">
                    <DotIcon size={28} />
                    <span className="text-JisaGrisTextGray font-light text-base">{item}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default QueLlevarSection