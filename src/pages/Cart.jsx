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
            precio: "199.00"
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
            precio: "199.00"
        },
    ];

    const totalItems = tours.reduce((acc, tour) => acc + tour.cantidad, 0);

    const subtotal = tours.reduce((acc, tour) => acc + tour.cantidad * parseFloat(tour.precio), 0).toFixed(2);
    const impuestos = (subtotal * 0.18).toFixed(2);  // 18% de impuestos
    const totalPrice = (parseFloat(subtotal) + parseFloat(impuestos)).toFixed(2);


    return (
        <>
            <div className="relative inset-1 w-full max-w-7xl mx-auto mt-48 mb-12 py-4">
                <CartWizard
                    tours={tours}
                    totalItems={totalItems}
                    subtotal={subtotal}
                    impuestos={impuestos}
                    totalPrice={totalPrice}
                />
            </div>


        </>
    )
}

export default Cart