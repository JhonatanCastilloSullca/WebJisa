import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import StarIcon from "../assets/icons/StarIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import MailIcon from "../assets/icons/MailIcon";
import WhatsappColorIcon from "../assets/icons/WhatsappColorIcon";

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

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
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

  // Usa 1 emoji confiable para evitar � en la vista previa
  const message = isDetail
    ? `👉 Hola 👋, estuve navegando en la web 🌎 y me gustaría recibir información personalizada de ${originTag} ✅`
    : `👉 Hola 👋, estuve navegando en la web 🌎 y me gustaría recibir información ✅`;

  const wppLink = buildWppLink("51976294449", message);

    return (
        <div className="fixed bottom-5 right-5 z-50">
             <a
                href={wppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
            >
                <WhatsappColorIcon size={35} />
            </a>
            {isOpen && (
                <div className="absolute bottom-20 right-0 flex flex-col space-y-3">
                    <a
                        href="mailto:info@jisaadventure.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
                    >
                        <MailIcon size={25} />
                    </a>
                    <a
                        href="https://wa.me/51976294449"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
                    >
                        <WhatsappColorIcon size={35} />
                    </a>

                </div>
            )}
        </div>
    );
};

export default FloatingContact;