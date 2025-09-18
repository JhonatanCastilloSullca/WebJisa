import React, { useMemo, useState } from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import DateRangePicker from './CalendarRangoPicker'
import CartIcon from '../assets/icons/CartIcon'
import DinnersIcon from '../assets/icons/DinnersIcon'
import MasterCardIcon from '../assets/icons/MasterCardIcon'
import VisaIcon from '../assets/icons/VisaIcon'
import PaypalIcon from '../assets/icons/PaypalIcon'
import AmericanIcon from '../assets/icons/AmericanIcon'
import { useTranslation } from 'react-i18next'
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const BookNowSection = ({ tour }) => {
    const { t } = useTranslation()
    const { addToCart } = useCart();
    const navigate = useNavigate();  

    const handleAddToCart = () => {
        if (!fecha.start) return;

        addToCart(tour,cantidad,fecha.start,fecha.end);
        navigate("/carrito");
    };

    const [cantidad, setCantidad] = useState(1);

    const precioUnit = useMemo(() => Number(tour?.precio ?? 0), [tour?.precio]);

    const total = useMemo(() => (precioUnit * cantidad).toFixed(2), [precioUnit, cantidad]);

    const onCantidadChange = (nuevaCantidad) => {
        const val = Math.max(1, Math.min(20, nuevaCantidad));
        setCantidad(val);
    };

     const onCantidadInput = (e) => {
        const onlyNums = e.target.value.replace(/\D/g, '');
        onCantidadChange(Number(onlyNums || 1));
    };

    const dec = () => onCantidadChange(cantidad - 1);
    const inc = () => onCantidadChange(cantidad + 1);

    const [fecha, setFecha] = useState({ start: "", end: "" });

    const duracionDias = Math.max(1, tour?.itinerarios?.length ?? 1)

    return (
        <div className="md:col-span-4 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle ">
            <div id="form-reserva-carrito" className="w-full">
                <div className="bg-JisaGris px-6 pt-4 w-full flex-col text-center flex justify-center items-center text-white rounded-t-md">
                    <h2 className="font-bold text-3xl">
                        {t("tours_detail.reservas_ahora")}
                    </h2>
                    <SeparatorBarHorizontalVerde />
                    <span className="font-semibold text-base" >{ tour.titulo }</span>
                    <span className="font-bold text-2xl text-JisaVerde" >USD $ { total }</span>
                </div>
                <div className="border-2 border-JisaGrisTextGray/10 bg-white rounded-b-md flex flex-col pb-2">
                    <DateRangePicker
                        fixedDays={duracionDias}
                        value={fecha}
                        onChange={setFecha}
                    />
                    <span className="font-semibold text-lg text-JisaCyan text-center">{t("tours_detail.cantidad_pasajeros")}</span>
                    <div className="flex p-2 justify-center">
                        <button onClick={dec} className=" font-bold text-JisaGris text-3xl px-4">
                            -
                        </button>
                        <input type="text" className="text-JisaGrisTextGray text-xl w-36 rounded-sm text-center border-2 border-JisaGrisTextGray/5 bg-white" placeholder="1" value={cantidad} onChange={onCantidadInput}/>
                        <button onClick={inc} className=" font-bold text-JisaGris text-3xl px-4">
                            +
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleAddToCart} disabled={!fecha.start} className={`flex rounded-md px-10 gap-x-2 py-2 justify-center w-fit ${!fecha.start ? "bg-gray-300 cursor-not-allowed" : "bg-JisaCyan text-white"}`}>
                            <CartIcon />
                            <span className="font-semibold text-lg">{t("tours_detail.añadir_carrito")}</span>
                        </button>
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
                    <div>
                        <span className="text-JisaVerde text-xs text-left px-4">
                            * {t("tours_detail.servicios_fuera_de_impuestos")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNowSection