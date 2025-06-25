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

function Header({ dataGeneral }) {
  const header = dataGeneral?.header || [];
  const headerPromocion = dataGeneral?.promocionHeader || [];

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

  const menu = [
    {
      tour: "Tour por Machu Picchu",
      imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
      submenu: [
        {
          titulo: "Full Day en Tren Turístico Expedition",
          descripcion: "Disfruta de un increíble viaje en tren hacia Machu Picchu con el servicio Expedition. Una experiencia cómoda y accesible que te permitirá conocer una de las maravillas del mundo.",
          imagen: "https://picsum.photos/800/500"
        },
        {
          titulo: "Full Day en Tren Turístico Vistadome",
          descripcion: "Viaja con vistas panorámicas a través del tren Vistadome y sumérgete en la belleza natural del Valle Sagrado antes de llegar a la ciudadela de Machu Picchu.",
          imagen: "https://picsum.photos/700/400"
        },
        {
          titulo: "Tour de 2 Días en Machu Picchu",
          descripcion: "Descubre la magia de Machu Picchu en un tour de dos días, disfrutando de una noche en Aguas Calientes y explorando la maravilla con más tiempo.",
          imagen: "https://picsum.photos/600/350"
        }
      ]
    },
    {
      tour: "Tour por el Valle Sagrado",
      imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
      submenu: [
        {
          titulo: "Tour a Pisac y Ollantaytambo",
          descripcion: "Explora los impresionantes centros arqueológicos de Pisac y Ollantaytambo, dos joyas del Valle Sagrado con vistas espectaculares y mucha historia.",
          imagen: "https://picsum.photos/680/380"
        },
        {
          titulo: "Tour de Chinchero, Moray y Salineras",
          descripcion: "Visita los andenes circulares de Moray, las salineras de Maras y la encantadora localidad de Chinchero en un recorrido cultural e histórico.",
          imagen: "https://picsum.photos/720/420"
        },
        {
          titulo: "Tour Completo por el Valle Sagrado",
          descripcion: "Un recorrido completo por los sitios más emblemáticos del Valle Sagrado, incluyendo Pisac, Ollantaytambo, Chinchero, Moray y las Salineras de Maras.",
          imagen: "https://picsum.photos/640/360"
        }
      ]
    },
    {
      tour: "Tour a la Montaña de 7 Colores",
      imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
      submenu: [
        {
          titulo: "Full Day a la Montaña de 7 Colores",
          descripcion: "Una caminata desafiante pero increíblemente gratificante a la famosa Montaña de 7 Colores, con paisajes espectaculares y aire puro de los Andes.",
          imagen: "https://picsum.photos/780/480"
        },
        {
          titulo: "Tour Palccoyo: La Alternativa a Vinicunca",
          descripcion: "Si buscas una opción menos exigente pero igual de impresionante, Palccoyo ofrece un paisaje colorido sin la caminata intensa de Vinicunca.",
          imagen: "https://picsum.photos/1690/690"
        },
        {
          titulo: "Tour Especial: Montaña de Colores + Valle Rojo",
          descripcion: "Además de la Montaña de 7 Colores, descubre el impresionante Valle Rojo, una joya escondida con paisajes surrealistas.",
          imagen: "https://picsum.photos/770/470"
        }
      ]
    }
  ];

  const [visible, setVisible] = useState(true);

  return (
    <>
      <header className="top-0 md:absolute relative z-10 bg-white w-full">
        {visible && (
          <div className="relative bg-JisaGris text-white h-10 overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-10 z-10 flex items-center justify-center bg-JisaGris">
              <button
                onClick={() => setVisible(false)}
                className="text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <Marquee speed={50} className="h-10 items-center font-medium">
              <div className="pr-12">
                <a href={headerPromocion.enlace}>{headerPromocion.text}</a>
              </div>
            </Marquee>
          </div>
        )}
        <div className="w-full">
          <div className="md:max-w-5xl w-full mx-auto">
            <div className="flex justify-between py-2">
              <div className="flex items-center">
                <NavLink to="/">
                  <img src={header.logo} alt="Logo Jisa Adventure" className="h-10 md:h-16 object-cover py-2 px-2" />
                </NavLink>
              </div>
              <div className="flex flex-col justify-evenly h-full md:px-0 pe-2">
                <div className="flex align-middle gap-x-1 items-center justify-end">
                  <IconText icon={WhatsappIcon} text={header.numero} enlace={`https://wa.me/51${header.numero.replace(/\s+/g, '')}`} />
                  <div className="md:hidden ">
                    <IconText icon={HouseIcon} text={header.direccion} enlace={`https://wa.me/51${header.numero.replace(/\s+/g, '')}`} />
                  </div>
                  <div className="hidden md:flex">
                    <SeparatorBar />
                    <IconText icon={EnvelopeIcon} text={header.correo} enlace={`mailto:${header.correo}`} />
                    <SeparatorBar />
                    <IconText text="Blog" />
                    <SeparatorBar />
                    <div ref={ref} className="relative inline-block">
                      <button
                        onClick={() => setOpen(open => !open)}
                        className="p-1 focus:outline-none"
                      >
                        <current.Icon size={20} />
                      </button>

                      {open && (
                        <div className="absolute right-0 mt-1 bg-white rounded shadow-lg border z-10">
                          {languages.map(({ code, Icon }) => (
                            <button
                              key={code}
                              onClick={() => {
                                i18n.changeLanguage(code)
                                setOpen(false)
                              }}
                              className="w-full p-1 hover:bg-gray-100 flex justify-center"
                            >
                              <Icon size={20} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <a
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
                  </a>
                  <div className="section-menu flex justify-end md:w-auto w-full py-1">
                    <NavLink
                      to={header.enlace}
                      className="bg-JisaCyan text-white rounded-xl text-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1"
                    >
                      {header.boton_accion}
                    </NavLink>
                    <button onClick={toggleMenu} className="text-JisaCyan md:hidden flex items-center">
                      <BarsIcon size={36} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row md:bg-JisaCyan bg-white text-JisaCyan md:text-white w-full transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}>
          <div className="w-full max-w-7xl mx-auto">
            <nav className="text-gray-900">
              <div className="container mx-auto flex md:flex-row flex-col md:justify-center justify-start">
                <NavLink to="/" className="relative block py-2 px-4 text-sm lg:text-base font-bold md:text-white text-JisaCyan hover:text-JisaGris">
                  Inicio
                </NavLink>
                <MenuHeader menu={menu} />
                <NavLink to="/nosotros" className="relative block py-2 px-4 text-sm lg:text-base font-bold md:text-white text-JisaCyan hover:text-JisaGris">
                  Sobre Nosotros
                </NavLink>
                <NavLink to="/carrito" className="relative inline-flex items-center p-3 text-sm font-medium text-center md:text-white text-JisaCyan">
                  <div className="absolute w-10">
                    <CartIcon size={16} />
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                      20
                    </div>
                  </div>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header