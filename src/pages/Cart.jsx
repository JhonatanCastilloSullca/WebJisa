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

const Cart = () => {
    const tours = [
        {
            id: 1,
            title: "Rainbow Mountain Vinicunca Tour (Group Service) Adulto",
            location: "Montaña de Colores Palccoyo, Cusco",
            image: "https://picsum.photos/690/390",
            duration: 'Full day',
            cantidad: 1,
            difficulty: "Adventure",
            groupSize: "12",
            transport: "en su Hotel",
            date: "14/03/2024",
        },
        {
            id: 2,
            title: "Machu Picchu Full Day Tour",
            location: "Machu Picchu, Cusco",
            image: "https://picsum.photos/690/390",
            duration: 'Full day',
            cantidad: 2,
            difficulty: "Trekking",
            groupSize: "23",
            transport: "Plaza de armas",
            date: "16/03/2024",
        },
    ];

    return (
        <>
            <div className="relative inset-1 w-full max-w-4xl mx-auto mt-48 mb-12 px-12 py-4">
                asd
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
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
                                    <span className='font-medium text-sm text-JisaGris'>Items(2)</span>
                                    <span className='font-semibold text-base text-JisaGris'>US$ 3999.00</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span className='font-medium text-sm text-JisaGris'>Items(2)</span>
                                    <span className='font-semibold text-base text-JisaGris'>US$ 3999.00</span>
                                </div>
                                <div className="mt-2 w-full self-center border-t border-JisaGris/20"></div>
                                <div className="flex justify-between w-full">
                                    <span className='font-medium text-sm text-JisaGris'>Items(2)</span>
                                    <span className='font-bold text-xl text-JisaGris'>US$ 3999.00</span>
                                </div>
                                <div className='flex justify-center'>
                                    <a href="#" className="bg-JisaCyan text-white  rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 ">
                                        Continuar el pago
                                    </a>
                                </div>
                                <div className="cart-form text-JisaVerde flex gap-x-4 justify-center py-4">
                                    <CartIcon size={20} />
                                    <span className='font-bold text-sm'>Continuar comprando</span>
                                </div>
                                <div className="flex gap-2 py-4 justify-center">
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
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-12 col-span-8 flex flex-col bg-JisaGris/5 rounded-xl p-6">
                        <div className='cardCartPasajero px-12'>
                            <div className="flex justify-between">
                                <h5 className='text-JisaCyan font-semibold text-2xl'>Información del pasajero n° 1</h5>
                                <div className='flex gap-x-2'>
                                    <span className='text-JisaVerde font-semibold text-lg'>Pasajero de contacto</span>
                                    <div className='h-8 w-8 rounded-full bg-JisaVerde flex justify-center items-center text-JisaCyan'>
                                        <UserIcon />
                                    </div>
                                </div>
                                <div className="flex"></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart