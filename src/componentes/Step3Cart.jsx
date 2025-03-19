import React from 'react'
import TarjetasMetodos from './TarjetasMetodos'
import InfoIcon from '../assets/icons/InfoIcon'

const Step3Cart = () => {
    return (

        <div className="Step3 w-full max-w-7xl mx-auto mb-6">
            <div className="grid grid-cols-12 gap-6">
                <div className="md:col-span-6 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl px-10 py-6 gap-y-4">
                    <h5 className='text-JisaCyan font-semibold text-2xl'>Codigo de reserva:<span className='text-JisaGris px-4'>FSA156156</span> </h5>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6 col-span-8 flex flex-col border-r-2">
                            <span className='font-medium text-JisaGris text-xl'>Tour:</span>
                        </div>
                        <div className="md:col-span-6 col-span-8 flex flex-col">
                            <span className='font-medium text-JisaVerde text-xl'>Montaña de colores:</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6 col-span-8 flex flex-col border-r-2">
                            <span className='font-medium text-JisaGris text-xl'>Información de Contacto:</span>
                        </div>
                        <div className="md:col-span-6 col-span-8 flex flex-col">
                            <span className='font-medium text-JisaVerde text-xl'>Juan pepito:</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6 col-span-8 flex flex-col border-r-2">
                            <span className='font-medium text-JisaGris text-xl'>Fecha del tour:</span>
                        </div>
                        <div className="md:col-span-6 col-span-8 flex flex-col">
                            <span className='font-medium text-JisaVerde text-xl'>15 / 03 / 2025:</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6 col-span-8 flex flex-col border-r-2">
                            <span className='font-medium text-JisaGris text-xl'>Precio Total:</span>
                        </div>
                        <div className="md:col-span-6 col-span-8 flex flex-col">
                            <span className='font-medium text-JisaVerde text-xl'>US$ 699.99:</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6 col-span-8 flex flex-col border-r-2">
                            <span className='font-medium text-JisaGris text-xl'>Monto depositado:</span>
                        </div>
                        <div className="md:col-span-6 col-span-8 flex flex-col">
                            <span className='font-medium text-JisaVerde text-xl'>US$ 399.99:</span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl px-10 py-6 gap-y-4">
                    <div className="flex text-JisaVerde items-center">
                        <InfoIcon />
                        <span className=' px-4 font-semibold text-2xl'>Informacion de pago</span>
                    </div>
                    <div className="flex items-center">
                        <span className=' px-4 font-semibold text-2xl text-JisaGris'>Debit or Credit Card</span>
                        <span className='text-JisaCyan font-semibold text-sm'>(Fee 5%)</span>
                    </div>
                    <div className="flex items-center">
                        <span className=' px-4 font-semibold text-2xl text-JisaGris'>Paypal</span>
                        <span className='text-JisaCyan font-semibold text-sm'>(Fee 8%)</span>
                    </div>
                    <TarjetasMetodos />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-6">
                <div className="md:col-span-12 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl px-10 py-6 gap-y-4">
                    <div className="flex text-JisaVerde items-center">
                        <span className=' font-semibold text-2xl'>Resumen de la orden</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className=" flex justify-between  ">
                            <span className='font-medium text-JisaGris text-lg'>Tour:</span>
                            <span className='font-semibold text-JisaGris text-xl'>US$ 3999.00:</span>
                        </div>
                        <div className=" flex justify-between  ">
                            <span className='font-medium text-JisaGris text-lg'>Tour:</span>
                            <span className='font-semibold text-JisaGris text-xl'>US$ 39.00:</span>
                        </div>
                        <div className="w-full self-center border-t border-JisaGris/20 my-8"></div>
                        <div className=" flex justify-end  gap-x-20 ">
                            <span className='font-medium text-JisaGris text-lg'>Total:</span>
                            <span className='font-semibold text-JisaGris text-2xl'>US$ 4038.00:</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <a href="#" className="bg-JisaCyan text-white rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 text-nowrap ">
                            Realizar el pago
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3Cart