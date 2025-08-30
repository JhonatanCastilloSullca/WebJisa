import React from 'react'
import MapDotIcon from '../assets/icons/MapDotIcon'
import IconCategoria from '../componentes/IconCategoria'
import ClockIcon from '../assets/icons/ClockIcon'
import SeparatorBar from '../componentes/SeparatorBar'
import TrashIcon from '../assets/icons/TrashIcon'
import SeparatorBarHorizontal from '../componentes/SeparatorBarHorizontal'
import CartIcon from '../assets/icons/CartIcon'
import DinnersIcon from '../assets/icons/DinnersIcon'
import MasterCardIcon from '../assets/icons/MasterCardIcon'
import VisaIcon from '../assets/icons/VisaIcon'
import PaypalIcon from '../assets/icons/PaypalIcon'
import AmericanIcon from '../assets/icons/AmericanIcon'
import GroupUsers from '../assets/icons/GroupUsers'
import MountainHikIcon from '../assets/icons/MountainHikIcon'
import BuIcon from '../assets/icons/BuIcon'
import CalendarIcon from '../assets/icons/CalendarIcon'
import CardCartTour from '../componentes/CardCartTour'
import ListCartTour from '../componentes/ListCartTour'
import UserIcon from '../assets/icons/UserIcon'
import InfoIcon from '../assets/icons/InfoIcon'
import TarjetasMetodos from '../componentes/TarjetasMetodos'
import CardCartPasajero from '../componentes/CardCartPasajero'
import CartWizard from '../componentes/CartWizard'

const Cart = () => {
    

    const totalItems = tours.reduce((acc, tour) => acc + tour.cantidad, 0);

    const subtotal = tours.reduce((acc, tour) => acc + tour.cantidad * parseFloat(tour.precio), 0).toFixed(2);
    const impuestos = (subtotal * 0.18).toFixed(2);  // 18% de impuestos
    const totalPrice = (parseFloat(subtotal) + parseFloat(impuestos)).toFixed(2);


    return (
        <>
            <div className="relative inset-1 w-full max-w-7xl mx-auto mt-48 mb-12 px-12 py-4">
                <CartWizard
                    tours={tours}
                    totalItems={totalItems}
                    subtotal={subtotal}
                    impuestos={impuestos}
                    totalPrice={totalPrice}
                />
            </div>
            <div className="Step1 w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-8 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl p-6">
                        <h5 className='text-JisaVerde font-semibold text-2xl'>Carrito</h5>
                        <span className='text-JisaGris font-medium text-base'>Items(2)</span>
                        <div className="flex-col flex gap-y-8">
                            <ListCartTour tours={tours} />
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-4 flex flex-col">
                        <div className=' bg-JisaGris/5 p-4 flex justify-center items-center flex-col rounded-md'>
                            <h5 className='text-JisaVerde font-semibold text-2xl'>Resumen de la orden</h5>
                            <div className="mt-2 w-[80%] self-center border-t border-JisaGris/20"></div>
                            <div className=' mt-8 px-6 flex flex-col gap-y-1 w-full'>
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
                                    <a href="#" className="bg-JisaCyan text-white rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 ">
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
            <div className="Step2 w-full max-w-7xl mx-auto mt-24 mb-12">
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
                                <div className="md:col-span-2 col-span-2 flex flex-col">
                                    <div className="flex flex-col">
                                        <span className='font-medium text-sm text-JisaGris'>Fecha de nacimiento</span>
                                        <input type="text" className='h-10 rounded-md' />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full self-center border-t border-JisaGris/20 my-8"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-4">
                    <div className='w-full flex gap-x-2 items-center '>
                        <input type="checkbox" name="term-conditions" id="term-conditions" />
                        <a href="#" className='text-JisaVerde underline font-semibold text-xs text-nowrap'> Terminos y Condiciones</a>
                    </div>
                    <div className='flex justify-center'>
                        <a href="#" className="bg-JisaCyan text-white text-nowrap rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 ">
                            Continuar el pago
                        </a>
                    </div>
                </div>
            </div>
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
                        <div className="flex gap-2 py-4 justify-end">
                            <div className="w-12">
                                <DinnersIcon />
                            </div>
                            <div className="w-12">
                                <MasterCardIcon />
                            </div>
                            <div className="w-12">
                                <VisaIcon />
                            </div>
                            <div className="w-12">
                                <PaypalIcon />
                            </div>
                            <div className="w-12">
                                <AmericanIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-6">
                    <div className="md:col-span-12 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl px-10 py-6 gap-y-4">
                        <div className="flex text-JisaVerde items-center">
                            <span className=' font-semibold text-2xl'>Resumen de la orden</span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className=" flex justify-between border-r-2 ">
                                <span className='font-medium text-JisaGris text-lg'>Tour:</span>
                                <span className='font-semibold text-JisaGris text-xl'>US$ 3999.00:</span>
                            </div>
                            <div className=" flex justify-between border-r-2 ">
                                <span className='font-medium text-JisaGris text-lg'>Tour:</span>
                                <span className='font-semibold text-JisaGris text-xl'>US$ 39.00:</span>
                            </div>
                            <div className="w-full self-center border-t border-JisaGris/20 my-8"></div>
                            <div className=" flex justify-end border-r-2 gap-x-20 ">
                                <span className='font-medium text-JisaGris text-lg'>Total:</span>
                                <span className='font-semibold text-JisaGris text-2xl'>US$ 4038.00:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Cart