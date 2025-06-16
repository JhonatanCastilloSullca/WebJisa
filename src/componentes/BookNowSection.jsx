import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import DateRangePicker from './CalendarRangoPicker'
import CartIcon from '../assets/icons/CartIcon'
import DinnersIcon from '../assets/icons/DinnersIcon'
import MasterCardIcon from '../assets/icons/MasterCardIcon'
import VisaIcon from '../assets/icons/VisaIcon'
import PaypalIcon from '../assets/icons/PaypalIcon'
import AmericanIcon from '../assets/icons/AmericanIcon'
import { useTranslation } from 'react-i18next'

const BookNowSection = () => {
    const { t } = useTranslation()
    return (
        <div className="md:col-span-4 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle ">
            <div className="w-full">
                <div className="bg-JisaGris px-6 pt-4 w-full flex-col flex justify-center items-center text-white rounded-t-md">
                    <h4 className="font-bold text-3xl">
                        {t("tours_detail.reservas_ahora")}
                    </h4>
                    <SeparatorBarHorizontalVerde />
                    <h5 className="font-semibold text-base" >Camino Inca Full Day</h5>
                    <span className="font-bold text-2xl" >US$ 999.00</span>
                </div>
                <div className="border-2 border-JisaGrisTextGray/10 bg-white rounded-b-md flex flex-col pb-2">
                    <DateRangePicker />
                    <span className="font-semibold text-lg text-JisaCyan text-center">{t("tours_detail.cantidad_pasajeros")}</span>
                    <div className="flex p-2 justify-center">
                        <button className=" font-bold text-JisaGris text-3xl px-4">
                            -
                        </button>
                        <input type="text" className="text-JisaGrisTextGray text-xl w-36 rounded-sm text-center border-2 border-JisaGrisTextGray/5 bg-white" placeholder="1" />
                        <button className=" font-bold text-JisaGris text-3xl px-4">
                            +
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="">
                            <div className="flex bg-JisaCyan rounded-md text-white px-10 gap-x-2 py-2 justify-center w-fit">
                                <CartIcon />
                                <span className="font-semibold text-lg">{t("tours_detail.añadir_carrito")}</span>
                            </div>
                        </a>
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