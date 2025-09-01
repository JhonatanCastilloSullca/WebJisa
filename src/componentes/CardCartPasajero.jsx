import React from 'react'
import UserIcon from '../assets/icons/UserIcon'

const CardCartPasajero = ({ index }) => {
    return (
        <div className="cardCartPasajero md:px-12">
            <div className="md:flex md:justify-between">
                <h5 className="text-JisaCyan font-semibold md:text-2xl text-sm">
                    Información del pasajero N° {index + 1}
                </h5>
                <div className="flex gap-x-2">
                    <span className="text-JisaVerde font-semibold md:text-lg text-sm">Pasajero de contacto</span>
                    <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-JisaVerde flex justify-center items-center text-JisaCyan">
                        <UserIcon className="md:w-5 md:h-5 w-2 h-2" />
                    </div>
                </div>
            </div>

            <div className="formulario grid grid-cols-12 gap-4">
                {[
                    { label: "Nombre", span: 4 },
                    { label: "Apellidos", span: 4 },
                    { label: "Género", span: 2 },
                    { label: "Tipo de documento", span: 2 },
                    { label: "N° Documento", span: 3 },
                    { label: "País", span: 3 },
                    { label: "Email", span: 2 },
                    { label: "Fecha de nacimiento", span: 2 },
                ].map((field, i) => (
                    <div
                        key={i}
                        className={`col-span-6 md:col-span-${field.span} flex flex-col`}
                    >
                        <span className="font-medium md:text-sm text-xs text-JisaGris">{field.label}</span>
                        <input type="text" className="h-10 rounded-md w-full" />
                    </div>
                ))}
            </div>


            <div className="w-full self-center border-t border-JisaGris/20 my-12"></div>
        </div>
    )
}

export default CardCartPasajero