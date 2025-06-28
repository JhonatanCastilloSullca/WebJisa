import React from 'react'
import CardCartPasajero from './CardCartPasajero'
import UserIcon from '../assets/icons/UserIcon'

const Step2Cart = ({ totalItems, handleNext }) => {
    return (
        <div className="Step2 w-full max-w-7xl mx-auto mb-12 px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col bg-JisaGris/5 rounded-xl p-4 md:p-6">
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <CardCartPasajero key={index} index={index} />
                    ))}

                    <div className="cardCartPasajeroContacto px-4 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <h5 className="text-JisaCyan font-semibold text-xl md:text-2xl">
                                Pasajero de contacto
                            </h5>
                            <div className="flex items-center gap-x-2">
                                <span className="text-JisaVerde font-semibold text-sm md:text-lg">
                                    Pasajero de contacto
                                </span>
                                <div className="h-8 w-8 rounded-full bg-JisaVerde flex justify-center items-center text-JisaCyan">
                                    <UserIcon />
                                </div>
                            </div>
                        </div>

                        <div className="formulario grid grid-cols-12 gap-4">
                            <div className="col-span-6 md:col-span-4">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Nombre</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Apellidos</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-2">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Género</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-2">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Tipo de documento</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">N° Documento</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">País</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Email</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Nacimiento</label>
                                <input type="text" className="h-10 w-full rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 px-4 md:px-0">
                <div className="w-full md:w-auto flex gap-x-2 items-center">
                    <input type="checkbox" name="term-conditions" id="term-conditions" />
                    <a href="#" className="text-JisaVerde underline font-semibold text-xs whitespace-nowrap">
                        Términos y Condiciones
                    </a>
                </div>
                <div className="w-full md:w-auto flex justify-end">
                    <a
                        onClick={handleNext}
                        href="#"
                        className="w-full md:w-auto bg-JisaCyan text-white rounded-xl text-center px-6 py-2 font-bold text-base"
                    >
                        Continuar el pago
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Step2Cart