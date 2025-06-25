import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import CheckIcon from '../assets/icons/CheckIcon'
import TimesIcon from '../assets/icons/TimesIcon'
import { useTranslation } from 'react-i18next'

const IncluyeSection = ({ incluye, noincluye }) => {
   const parseHtmlList = (htmlString) => {
        if (!htmlString) return [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return [...doc.querySelectorAll('li')].map(li => li.textContent.trim());
    };

    const incluyeList = parseHtmlList(incluye);
    const noIncluyeList = parseHtmlList(noincluye);

    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-y-10">
            <div>
                <SeparatorBarHorizontalVerde />
                <JisaTitleContentGris contenido={t('tours_detail.incluye')} className="text-2xl" />
                <div className="text-JisaVerde flex flex-col gap-y-4 mt-4">
                    {incluyeList.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <CheckIcon className="" />
                            <span className="text-JisaGrisTextGray font-light text-base">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <SeparatorBarHorizontalVerde />
                <JisaTitleContentGris contenido={t('tours_detail.no_incluye')} className="text-2xl mb-4" />
                <div className="text-[#7C1B1B] flex flex-col gap-y-4 mt-4">
                    {noIncluyeList.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <TimesIcon className="" />
                            <span className="text-JisaGrisTextGray font-light text-base">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IncluyeSection