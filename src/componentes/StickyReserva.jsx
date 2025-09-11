import { useTranslation } from "react-i18next";
import { useCart } from "../contexts/CartContext";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const toTitle = (s) =>
  decodeURIComponent(s || "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const buildWppLink = (phone, message) => {
const num = phone.replace(/[^\d]/g, ""); // solo dígitos
const txt = encodeURIComponent(message);

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  // En escritorio forzamos Web para que respete ?text=
    return isMobile
        ? `https://wa.me/${num}?text=${txt}`
        : `https://api.whatsapp.com/send?phone=${num}&text=${txt}`;
};

const StickyReserva = ({ tour }) => {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    const location = useLocation();

    const { originTag, isDetail } = useMemo(() => {
        const parts = location.pathname.split("/").filter(Boolean);
        if (parts[0] === "tours" && parts.length >= 3) {
        return { originTag: toTitle(parts[2]), isDetail: true };
        }
        if (parts[0] === "paquetes" && parts.length >= 3) {
        return { originTag: toTitle(parts[2]), isDetail: true };
        }
        return { originTag: "", isDetail: false };
    }, [location.pathname]);

    const message = isDetail
    ? `👉 Hola 👋, estuve navegando en la web 🌎 y me gustaría recibir información personalizada de ${originTag} ✅`
    : `👉 Hola 👋, estuve navegando en la web 🌎 y me gustaría recibir información ✅`;

    const wppLink = buildWppLink("51976294449", message);

    const handleAddToCart = () => {
        addToCart(tour);
    };

    return (
        <div className="w-full mx-auto bg-gray-50 fixed bottom-0 border-t-4 border-JisaCyan rounded-md z-40">
            <div className="w-full max-w-7xl mx-auto flex justify-between px-7 py-3">
                <div className="precios-reserva flex flex-col">
                    <span className="font-medium text-lg text-JisaGris">{t('tours_detail.desde')}:</span>
                    <div className="flex gap-x-2">
                        <span className="font-black text-2xl text-JisaCyan">USD $ {tour.precio}</span>
                        {tour.precio_regular && (
                            <span className="font-bold text-2xl text-JisaCyan text-opacity-50 line-through">
                                {tour.precio_regular}
                            </span>
                        )}
                    </div>
                    <span className="font-medium text-sm text-JisaCyan">{t('tours_detail.por_persona')}:</span>
                </div>
                <div className="botones-precios-reserva flex gap-x-4 justify-center items-center">
                    <button onClick={handleAddToCart} className="uppercase px-4 py-2 bg-JisaGris text-white font-semibold text-xl rounded-md">
                        {t('tours_detail.reservas_ahora')}
                    </button>
                    <a href={wppLink} target="_blank" className="uppercase px-4 py-2 bg-JisaCyan text-white font-semibold text-xl rounded-md">
                        {t('tours_detail.asesor_online')}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default StickyReserva;