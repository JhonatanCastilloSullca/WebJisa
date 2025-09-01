import { useTranslation } from "react-i18next";
import { useCart } from "../contexts/CartContext";
import { useEffect, useMemo, useState } from "react";

const StickyReserva = ({ tour }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleAddToCart = () => addToCart(tour);

  // Acepta uuid o URL completa con ?uuid=...
  const wetravelUuid = useMemo(() => {
    const val = tour?.url_wetravel?.toString().trim();
    if (!val) return null;
    try {
      if (val.startsWith("http")) {
        const u = new URL(val);
        return u.searchParams.get("uuid");
      }
      return val;
    } catch {
      return null;
    }
  }, [tour?.url_wetravel]);

  const wetravelHref = wetravelUuid
    ? `https://www.wetravel.com/checkout_embed?uuid=${encodeURIComponent(wetravelUuid)}`
    : null;

  // Bloquear scroll de fondo cuando el modal está abierto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const openModal = () => {
    if (!wetravelHref) return;
    setIframeError(false);
    setOpen(true);
  };

  // Fallback si el iframe no carga (X-Frame-Options o similar)
  const handleIframeError = () => {
    setIframeError(true);
    setOpen(false);
    window.open(wetravelHref, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="w-full mx-auto bg-gray-50 fixed bottom-0 border-t-4 border-JisaCyan rounded-md z-40">
        <div className="w-full max-w-7xl mx-auto flex justify-between px-7 py-3">
          <div className="precios-reserva flex flex-col">
            <span className="font-medium text-lg text-JisaGris">{t("tours_detail.desde")}:</span>
            <div className="flex gap-x-2">
              <span className="font-black text-2xl text-JisaCyan">{tour.precio}</span>
              {tour.precio_regular && (
                <span className="font-bold text-2xl text-JisaCyan text-opacity-50 line-through">
                  {tour.precio_regular}
                </span>
              )}
            </div>
            <span className="font-medium text-sm text-JisaCyan">{t("tours_detail.por_persona")}:</span>
          </div>

          <div className="botones-precios-reserva flex gap-x-4 justify-center items-center">
            {wetravelHref ? (
              <button
                onClick={openModal}
                className="uppercase px-4 py-2 bg-JisaGris text-white font-semibold text-xl rounded-md"
              >
                {t("tours_detail.reservas_ahora")}
              </button>
            ) : (
              <div></div>
            )}
            <a href="#" className="uppercase px-4 py-2 bg-JisaCyan text-white font-semibold text-xl rounded-md">
                {t("tours_detail.asesor_online")}
              </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && wetravelHref && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          {/* Contenido */}
          <div className="relative z-10 w-[95vw] max-w-5xl h-[85vh] rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-semibold text-JisaGris">Reserva segura con WeTravel</span>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-md bg-JisaCyan text-white"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-[calc(85vh-56px)]">
              <iframe
                title="WeTravel Checkout"
                src={wetravelHref}
                className="w-full h-full"
                frameBorder="0"
                allow="payment *; clipboard-read; clipboard-write"
                onError={handleIframeError}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyReserva;
