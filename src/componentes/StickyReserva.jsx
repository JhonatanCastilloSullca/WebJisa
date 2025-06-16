import { useTranslation } from "react-i18next";

const StickyReserva = () => {
    const { t } = useTranslation()
    return (
        <>

            <div className="w-full mx-auto bg-gray-50 fixed bottom-0 border-t-4 border-JisaCyan rounded-md z-40 ">
                <div className="w-full max-w-7xl mx-auto flex justify-between px-7 py-3">
                    <div className="precios-reserva flex flex-col">
                        <span className="font-medium text-lg text-JisaGris">{t('tours_detail.desde')}:</span>
                        <div className="flex gap-x-2">
                            <span className="font-black text-2xl text-JisaCyan">999.00</span>
                            <span className="font-bold text-2xl text-JisaCyan text-opacity-50 line-through">1099.00</span>
                        </div>
                        <span className="font-medium text-sm text-JisaCyan">{t('tours_detail.por_persona')}:</span>
                    </div>
                    <div className="botones-precios-reserva flex gap-x-4 justify-center items-center">
                        <a href="#" className="inline-block uppercase px-4 py-2 bg-JisaGris text-white font-semibold text-xl rounded-md">
                            {t('tours_detail.reservas_ahora')}
                        </a>
                        <a href="#" className="inline-block uppercase px-4 py-2 bg-JisaCyan text-white font-semibold text-xl rounded-md">
                            {t('tours_detail.asesor_online')}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StickyReserva;
