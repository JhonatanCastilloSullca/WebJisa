import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import SeparatorBar from './SeparatorBar'
import { useTranslation } from 'react-i18next'

const PrecioSection = ({ precios }) => {
    const { t } = useTranslation()
    return (

        <div>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={t('tours_detail.precios')} className="text-2xl" />
            <div className="flex flex-col gap-y-1 w-full">
                {precios.map((item, index) => (
                    <div key={index} className="flex gap-x-1">
                        <div className="font-bold text-xl text-center bg-JisaCyan w-96 text-white flex justify-center items-center">
                            {item.titulo}
                        </div>
                        <div className="font-medium text-lg text-JisaGris border-2 border-JisaCyan px-4 flex gap-x-4 justify-start items-center w-full">
                            <div>
                                <span>US$ {item.precio}</span>
                                <span className="text-[10px]">{t('tours_detail.por_persona')}</span>
                            </div>
                            <div className="h-4">
                                <SeparatorBar />
                            </div>
                            <div>
                                <span>US$ {item.reserva}</span>
                                <span className="text-[10px]">{t('tours_detail.por_persona')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrecioSection