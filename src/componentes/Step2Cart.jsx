import React from 'react'
import CardCartPasajero from './CardCartPasajero'
import UserIcon from '../assets/icons/UserIcon'

const Step2Cart = ({ totalItems, handleNext }) => {
    return (
        <div className="Step2 w-full max-w-7xl mx-auto  mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-12 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl p-6">
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <CardCartPasajero key={index} index={index} />
                    ))}
                    <div className='cardCartPasajeroContacto px-12'>
                        <div className="flex justify-between">
                            <h5 className='text-JisaCyan font-semibold text-2xl'>Pasajero de contacto</h5>
                            <div className='flex gap-x-2'>
                                <span className='text-JisaVerde font-semibold text-lg'>Pasajero de contacto</span>
                                <div className='h-8 w-8 rounded-full bg-JisaVerde flex justify-center items-center text-JisaCyan'>
                                    <UserIcon />
                                </div>
                            </div>
                        </div>
                        <div className="formulario  grid grid-cols-12 gap-4">
                            <div className="md:col-span-4 col-span-4 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Nombre</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-4 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Apellidos</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-2 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Genero</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-2 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Tipo de documento</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-3 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>N° Documento</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-3 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Pais</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-2 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Email</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-2 flex flex-col">
                                <div className="flex flex-col">
                                    <span className='font-medium text-sm text-JisaGris'>Fecha de nacimiento</span>
                                    <input type="text" className='h-10 rounded-md' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between my-4">
                <div className='w-full flex gap-x-2 items-center '>
                    <input type="checkbox" name="term-conditions" id="term-conditions" />
                    <a href="#" className='text-JisaVerde underline font-semibold text-xs text-nowrap'> Terminos y Condiciones</a>
                </div>
                <div className='flex justify-end mt-4'>
                    <a onClick={handleNext} href="#" className="bg-JisaCyan text-white rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 text-nowrap ">
                        Continuar el pago
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Step2Cart