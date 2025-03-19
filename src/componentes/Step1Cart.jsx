import React from 'react'
import TarjetasMetodos from './TarjetasMetodos'
import CartIcon from '../assets/icons/CartIcon'
import ListCartTour from './ListCartTour'

const Step1Cart = ({ tours, totalItems, subtotal, impuestos, totalPrice, handleNext }) => {
    return (
        <div className="Step1 w-full max-w-7xl mx-auto  mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-8 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl p-6">
                    <h5 className='text-JisaVerde font-semibold text-2xl'>Carrito</h5>
                    <span className='text-JisaGris font-medium text-base'>Items({totalItems})</span>
                    <div className="flex-col flex gap-y-8">
                        <ListCartTour tours={tours} />
                    </div>
                </div>
                <div className="md:col-span-4 col-span-4 flex flex-col">
                    <div className='bg-JisaGris/5 p-4 flex justify-center items-center flex-col rounded-md'>
                        <h5 className='text-JisaVerde font-semibold text-2xl'>Resumen de la orden</h5>
                        <div className="mt-2 w-[80%] self-center border-t border-JisaGris/20"></div>
                        <div className='mt-8 px-6 flex flex-col gap-y-1 w-full'>
                            <div className="flex justify-between w-full">
                                <span className='font-medium text-sm text-JisaGris'>Total de items</span>
                                <span className='font-semibold text-base text-JisaGris'>{totalItems}</span>
                            </div>
                            <div className="flex justify-between w-full">
                                <span className='font-medium text-sm text-JisaGris'>Subtotal</span>
                                <span className='font-semibold text-base text-JisaGris'>US$ {subtotal}</span>
                            </div>
                            <div className="flex justify-between w-full">
                                <span className='font-medium text-sm text-JisaGris'>Impuestos (18%)</span>
                                <span className='font-semibold text-base text-JisaGris'>US$ {impuestos}</span>
                            </div>
                            <div className="mt-2 w-full self-center border-t border-JisaGris/20"></div>
                            <div className="flex justify-between w-full">
                                <span className='font-medium text-sm text-JisaGris'>Total</span>
                                <span className='font-bold text-xl text-JisaGris'>US$ {totalPrice}</span>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <a onClick={handleNext} href="#" className="bg-JisaCyan text-white rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 ">
                                    Continuar el pago
                                </a>
                            </div>
                            <div className="cart-form text-JisaVerde flex gap-x-4 justify-center py-4">
                                <CartIcon size={20} />
                                <span className='font-bold text-sm'>Continuar comprando</span>
                            </div>
                            <TarjetasMetodos />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1Cart