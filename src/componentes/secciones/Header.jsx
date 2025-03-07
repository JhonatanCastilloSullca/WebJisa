import Marquee from "react-fast-marquee"
import logoJisa from "../../assets/imagen/LogoJisa.webp"
import WhatsappIcon from "../../assets/icons/WhatsappIcon"
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon"
import FlagPeru from "../../assets/icons/FlagPeru"
import SeparatorBar from "../SeparatorBar"
import IconText from "../layout/IconText"
import BarsIcon from "../../assets/icons/BarsIcon"
import ParrafoContent from "../layout/ParrafoContent"
import { useState } from "react"
import MenuHeader from "../MenuHeader"


function Header() {

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



    return (
        <>
            <header className="top-0 md:absolute relative z-10 bg-white" >
                <Marquee className=" bg-JisaGris text-white font-medium h-10" speed={50} >
                    Tour machupicchu 2025 en oferta 20 % de descuento  -  Reserva tu paquete con nosotros  -  Temporada verano 2025 - Tour Lima Ica Paracas - Tour Gastronomico de Lujo - Parapente Rap Motocross - Salidas diarias | Servicio grupal y privado - Excursiones Atencion Personalizada
                </Marquee>
                <div className="w-full">
                    <div className="md:max-w-7xl w-full mx-auto">
                        <div className="flex justify-between py-2">
                            <div className="flex items-center">
                                <img src={logoJisa} alt="Logo Jisa" className=" h-12 md:h-20 object-cover py-2 px-2" />
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-evenly h-full md:px-0 px-4">
                                    <div className="flex gap-x-2 align-middle items-center justify-end">
                                        <IconText icon={WhatsappIcon} text="999 999 999  /  999 999 999" />
                                        <div className="hidden md:contents">
                                            <SeparatorBar />
                                            <IconText icon={EnvelopeIcon} text="contacto@jisa.com" />
                                            <SeparatorBar />
                                            <IconText text="Blog" />
                                            <SeparatorBar />
                                            <IconText icon={FlagPeru} />
                                        </div>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <div className="hidden md:contents">
                                            <div className="border-JisaCyan border-2 flex justify-center items-center rounded-md">
                                                <div className="h-full size-9 bg-JisaCyan rounded-sm flex justify-center items-center">
                                                    <EnvelopeIcon size={20} className="text-white" />
                                                </div>
                                                <div className="px-2">
                                                    <span>Urb. Dirección Calle Avenida 1233 - A</span>
                                                </div>
                                            </div>
                                            <div className="border-JisaCyan border-2 flex justify-center items-center rounded-md">
                                                <div className="h-full size-9 bg-JisaCyan rounded-sm flex justify-center items-center">
                                                    <EnvelopeIcon size={20} className="text-white" />
                                                </div>
                                                <div className="px-2">
                                                    <span>Nuevas reseñas</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-menu flex justify-between md:w-auto w-full py-1">
                                            <a href="#" className="bg-JisaCyan text-white  rounded-xl text-center items-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 ">
                                                Reservar
                                            </a>
                                            <a href="#" className="text-JisaCyan  justify-center items-center align-middle md:hidden flex ">
                                                <BarsIcon size={36} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  bg-JisaCyan w-full">
                    <div className="w-full max-w-7xl mx-auto">
                        <nav className=" text-gray-900">
                            <div className="container mx-auto flex justify-center">
                                <MenuHeader menu={menu} />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header