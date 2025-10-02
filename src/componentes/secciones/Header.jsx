import Marquee from "react-fast-marquee"
import logoJisa from "../../assets/imagen/LogoJisa.webp"
import WhatsappIcon from "../../assets/icons/WhatsappIcon"
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon"
import FlagPeru from "../../assets/icons/FlagPeru"
import SeparatorBar from "../SeparatorBar"
import IconText from "../layout/IconText"
import BarsIcon from "../../assets/icons/BarsIcon"
import MenuHeader from "../MenuHeader"
import CartIcon from "../../assets/icons/CartIcon"
import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'react-i18next'
import FlagEU from "../../assets/icons/FlagEU"
import FlagBr from "../../assets/icons/FlagBr"
import HouseIcon from "../../assets/icons/HouseIcon"
import MenuLinea from "./MenuLinea"
import MenuIntern from "./MenuInter"
import { useCart } from "../../contexts/CartContext"
import { buildWppLink } from "../../utils/wpp";

function Header({ dataGeneral }) {
  const { cartItems } = useCart();

  const header = dataGeneral?.header || [];
  const headerPromocion = dataGeneral?.promocionHeader || [];
  const menus = dataGeneral?.menu || [];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const languages = [
    { code: 'es', Icon: FlagPeru },
    { code: 'en', Icon: FlagEU },
    { code: 'br', Icon: FlagBr }
  ];
  const current = languages.find(l => l.code === i18n.language) || languages[0];

  if (!header) {
    console.log("⏳ Aún no hay datos de header");
    return null;
  }

  const [visible, setVisible] = useState(true);

  return (
    <>
      <header className="top-0 md:absolute relative z-10 bg-white w-full">
        {visible && (
          <div className="relative bg-JisaGris text-white h-6 overflow-hidden md:block hidden">
            <div className="absolute right-0 top-0 h-full w-10 z-10 flex items-center justify-center bg-JisaGris">
              <button
                onClick={() => setVisible(false)}
                className="text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <Marquee speed={50} className="h-6 items-center font-medium">
              <div className="pr-12 text-xs">
                <a href={headerPromocion.enlace}>{headerPromocion.text}</a>
              </div>
            </Marquee>
          </div>
        )}
        <div className="w-full">
          <div className="md:max-w-5xl w-full mx-auto">
            <div className="flex justify-between items-center py-1">
              <div className="flex items-center">
                <NavLink to="/">
                  <img src={header.logo} alt="Jisa Adventure Tour y Paquetes Cusco" className="h-8 md:h-12 object-cover" />
                </NavLink>
              </div>
              
              <div className="flex flex-col justify-evenly h-full md:px-0 pe-2">
                <div className="flex items-center gap-3 py-2">
                  <NavLink
                    to="/carrito"
                    className="relative lg:inline-flex items-center p-2 text-JisaCyan hidden"
                    aria-label="Ver carrito"
                  >
                    <CartIcon size={20} />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                  </NavLink>

                  {header?.numero && (
                    <a
                      href={buildWppLink(
                        `51${String(header.numero).replace(/\s+/g, "")}`,
                        "👉 Hola 👋, estuve navegando en la web 🌎 y me gustaría recibir información ✅"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-colors"
                      aria-label="Contactar por WhatsApp"
                    >
                      <WhatsappIcon size={18} />
                      Contactar
                    </a>
                  )}
                </div>
                <div className="flex gap-x-4">
                  <div className="section-menu  justify-center items-center md:w-auto w-full py-1 md:hidden flex gap-x-2">
                    <div>
                      <NavLink
                        to="/carrito"
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center md:text-JisaCyan text-JisaCyan"
                      >
                        <div className="relative w-4">
                          <CartIcon size={20} />
                          {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                              {cartItems.length}
                            </span>
                          )}
                        </div>
                      </NavLink>
                    </div>

                    <div ref={ref} className="relative flex">
                      <button
                        onClick={() => setOpen(open => !open)}
                        className="focus:outline-none"
                      >
                        <current.Icon size={16} />
                      </button>

                      {open && (
                        <div className="absolute right-0 bg-white rounded shadow-lg border z-10 ">
                          {languages.map(({ code, Icon }) => (
                            <button
                              key={code}
                              onClick={() => {
                                i18n.changeLanguage(code)
                                setOpen(false)
                              }}
                              className="w-full hover:bg-gray-100 flex justify-center"
                            >
                              <Icon size={16} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button onClick={toggleMenu} className="text-JisaCyan md:hidden flex items-center">
                      <BarsIcon size={36} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <MenuIntern dataGeneral={dataGeneral} menuOpen={menuOpen} menu={menus} />
        </div>
        <div className="md:hidden flex">
          <MenuLinea menuOpen={menuOpen} menu={menus} />
        </div>



      </header>
    </>

  )
}

export default Header