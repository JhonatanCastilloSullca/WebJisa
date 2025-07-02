import React from 'react'
import SeparatorBarHorizontal from './SeparatorBarHorizontal'
import JisaTitleContentVerde from './layout/JisaTitleContentVerde'
import ParrafoContent from './layout/ParrafoContent'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import DownIcon from '../assets/icons/DownIcon'
import { useTranslation } from 'react-i18next'

const ItinerarioSection = ({ itinerario, dias }) => {
    const { t } = useTranslation()

    return (
        <div>
            <SeparatorBarHorizontal />
            <JisaTitleContentVerde contenido={t('tours_detail.itinerario')} className="text-2xl" />

            {dias === 1 ? (
                <ParrafoContent className="text-JisaGris text-base" contenido={itinerario[0].itinerario} />
            ) : (
                <>
                    {itinerario.map((dia, index) => (
                        <Disclosure key={index} as="div" className="px-4 py-2 text-JisaCyan border-2 rounded-md my-4">
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <div className="flex gap-x-4 items-center">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-light uppercase">{t('tours_detail.dia')}</span>
                                        <span className="text-lg font-bold">0{index + 1}</span>
                                    </div>
                                    <span className="text-xl font-semibold">{dia.titulo}</span>
                                </div>
                                <DownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-sm/5">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="md:col-span-12 col-span-12 h-auto grid grid-cols-12 md:items-start items-center justify-center gap-x-4">
                                        <img src={dia.imagen} alt={dia.titulo} className="col-span-4 w-full rounded-lg h-full max-h-60 object-cover" />
                                        <img src={dia.imagen} alt={dia.titulo} className="col-span-4 w-full rounded-lg h-full max-h-60 object-cover" />
                                        <img src={dia.imagen} alt={dia.titulo} className="col-span-4 w-full rounded-lg h-full max-h-60 object-cover" />
                                    </div>
                                    <div className="md:col-span-12 col-span-12 h-auto flex flex-col md:items-start">
                                        <ParrafoContent className="text-JisaGris" contenido={dia.itinerario} />
                                    </div>
                                </div>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </>
            )}
        </div>
    )
}


export default ItinerarioSection