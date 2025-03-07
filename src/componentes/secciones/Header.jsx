import Marquee from "react-fast-marquee"
import logoJisa from "../../assets/imagen/LogoJisa.webp"
import WhatsappIcon from "../../assets/icons/WhatsappIcon"
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon"
import FlagPeru from "../../assets/icons/FlagPeru"
import SeparatorBar from "../SeparatorBar"
import IconText from "../layout/IconText"
import BarsIcon from "../../assets/icons/BarsIcon"


function Header() {

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
                <div className="flex h-6 bg-JisaCyan w-full">
                    <div className="w-full max-w-7xl">

                    </div>
                </div>
            </header>
        </>

    )
}

export default Header