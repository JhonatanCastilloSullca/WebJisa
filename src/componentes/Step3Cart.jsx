import React from 'react'
import TarjetasMetodos from './TarjetasMetodos'
import InfoIcon from '../assets/icons/InfoIcon'

const Step3Cart = () => {
    return (

        <div className="Step3 w-full max-w-7xl mx-auto mb-6 px-4">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 md:col-span-6 flex flex-col bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6 gap-y-4">
                    <h5 className="text-JisaCyan font-semibold text-xl md:text-2xl">
                        Código de reserva:
                        <span className="text-JisaGris px-2 md:px-4">FSA156156</span>
                    </h5>

                    <div className="grid grid-cols-12 gap-2 md:gap-4">
                        <div className="col-span-6 flex flex-col md:border-r-2">
                            <span className="font-medium text-JisaGris text-base md:text-xl">Tour:</span>
                        </div>
                        <div className="col-span-6 flex flex-col">
                            <span className="font-medium text-JisaVerde text-base md:text-xl">Montaña de colores</span>
                        </div>
                    </div>

                    {/* Repite esto mismo para las otras filas */}
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6 gap-y-4">
                    <div className="flex items-center text-JisaVerde">
                        <InfoIcon />
                        <span className="px-2 font-semibold text-xl md:text-2xl">Información de pago</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-base md:text-2xl text-JisaGris px-2">Debit or Credit Card</span>
                        <span className="text-JisaCyan font-semibold text-sm">(Fee 5%)</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-base md:text-2xl text-JisaGris px-2">Paypal</span>
                        <span className="text-JisaCyan font-semibold text-sm">(Fee 8%)</span>
                    </div>

                    <TarjetasMetodos />
                </div>
            </div>
        </div>

    )
}

export default Step3Cart