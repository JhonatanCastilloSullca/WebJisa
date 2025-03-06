import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import CheckIcon from '../assets/icons/CheckIcon'
import TimesIcon from '../assets/icons/TimesIcon'

const IncluyeSection = ({ incluye, noincluye }) => {
    return (
        <div className="flex flex-col gap-y-10">
            <div>
                <SeparatorBarHorizontalVerde />
                <JisaTitleContentGris contenido={'Incluye'} className="text-2xl" />
                <div className="text-JisaVerde flex flex-col gap-y-4 mt-4">
                    {incluye.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <CheckIcon className="" />
                            <span className="text-JisaGrisTextGray font-light text-base">
                                {item.incluye}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <SeparatorBarHorizontalVerde />
                <JisaTitleContentGris contenido={'No incluye'} className="text-2xl mb-4" />
                <div className="text-[#7C1B1B] flex flex-col gap-y-4 mt-4">
                    {noincluye.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <TimesIcon className="" />
                            <span className="text-JisaGrisTextGray font-light text-base">
                                {item.noincluye}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IncluyeSection