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

          <div className="  gap-x-1 bg-JisaCyan text-white hidden md:flex justify-center">
            <div className="md:max-w-5xl w-full flex  justify-end align-middle items-center py-[0.15rem]">
              <IconText icon={WhatsappIcon} text={`+51 ${header.numero}`} enlace={`https://wa.me/51${header.numero.replace(/\s+/g, '')}`} />

              {/* <IconText icon={HouseIcon} text={header.direccion} enlace={`https://wa.me/51${header.numero.replace(/\s+/g, '')}`} /> */}

              <IconText icon={EnvelopeIcon} text={header.correo} enlace={`mailto:${header.correo}`} />

              {/* <NavLink to="/blogs">
                <IconText text="Blog" />
              </NavLink> 

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
              </div> */}
            </div>
          </div>
          <div className="md:max-w-5xl w-full mx-auto">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <NavLink to="/">
                  <img src={header.logo} alt="Logo Jisa Adventure" className="h-10 md:h-16 object-cover py-2 px-2" />
                </NavLink>
              </div>
              <div className="flex flex-col justify-evenly h-full md:px-0 pe-2">

                <div className="flex gap-x-4">
                  {/* <a
                    href={`https://www.google.com/maps/place/Jisa+Adventure+-+Agencia+de+Viajes+para+Cusco/@-13.5178268,-71.985513,17z/data=!3m1!4b1!4m6!3m5!1s0x916dd77bb8997e1d:0xea62539e8d460589!8m2!3d-13.5178268!4d-71.9806421!16s%2Fg%2F11pb0s5dw9?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-JisaCyan border-2  justify-center items-center rounded-md no-underline hidden md:flex"
                  >

                    <div className="h-full size-9 bg-JisaCyan rounded-sm flex justify-center items-center">
                      <HouseIcon size={20} className="text-white" />
                    </div>
                    <div className="">
                      <span>{header.direccion}</span>
                    </div>
                  </a> */}
                  <div className="hidden md:flex">
                    <MenuIntern dataGeneral={dataGeneral} menuOpen={menuOpen} menu={menus} />

                  </div>

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
        <div className="md:hidden flex">
          <MenuLinea menuOpen={menuOpen} menu={menus} />
        </div>



      </header>
    </>

  )
}

export default Header