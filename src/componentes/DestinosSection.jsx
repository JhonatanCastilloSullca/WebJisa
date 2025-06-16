import GridNumber from "../componentes/GridNumber"
import RowNumber from "../componentes/RowNumber"
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardDestinos from "../componentes/CardDestinos"
import { useEffect, useState } from "react"
import SeparatorBarHorizontalCyan from "./SeparatorBarHorizontalVerde";
import { useApi } from "../hooks/useApi";
import { useTranslation } from "react-i18next";

const DestinosSection = ({ id, data }) => {
    const { t } = useTranslation()

    const tours = data || [];

    const [activeIndex, setActiveIndex] = useState(0);

    if (!tours[activeIndex]) return null;

    return (
        <div id={id} className="w-full relative mx-auto py-16 bg-cover bg-center" style={{ backgroundImage: `url(${tours[activeIndex].imagen})` }}>
            <div className="absolute inset-0 bg-black/75 opacity-100 "></div>
            <div className="relative w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-8">
                    <div className={`md:col-span-3 col-span-12 `}>

                        <div className="flex flex-col justify-center md:items-start items-center pt-4 md:ps-14 md:pe-20 px-6">
                            <span className="md:text-left text-white font-semibold text-xl text-center">{t('destion_section.destinos')}</span>
                            <span className="md:text-left text-white font-bold text-5xl text-center">{tours[activeIndex].nombre}</span>
                            <SeparatorBarHorizontalCyan />
                            <p className="md:text-base text-sm font-light my-4 text-white min-h-72 md:text-left text-center">
                                {tours[activeIndex].descripcion}
                            </p>
                            <a href="#" className="text-white font-bold text-md md:text-left text-center py-6">
                                ({tours[activeIndex].cantidad}) {t('destion_section.tours_disponibles')}
                            </a>
                        </div>
                    </div>
                    <div className={`md:col-span-5 col-span-12 `}>
                        <div className="w-full h-full px-10 swiper-destino">
                            <Swiper
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    480: { slidesPerView: 1.5, spaceBetween: 15 },
                                    640: { slidesPerView: 2, spaceBetween: 20 },
                                    768: { slidesPerView: 2.3, spaceBetween: 25 },
                                    1024: { slidesPerView: 2.3, spaceBetween: 30 },
                                    1280: { slidesPerView: 2.3, spaceBetween: 35 },
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                navigation={true}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper w-full h-full"
                            >
                                {tours.map((tour, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full md:h-full h-[440px] bg-red-200 rounded-2xl">
                                            <img src={tour.imagen} alt={tour.nombre} className=" object-center w-full h-full object-cover rounded-2xl" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinosSection