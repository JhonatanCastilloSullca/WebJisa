import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde';
import JisaTitleContentGris from './layout/JisaTitleContentGris';
import HotelCard from './HotelCard';
import ParrafoContent from './layout/ParrafoContent';

const AlojamientoSection = ({ alojamientos }) => {
    const [hotelSeleccionado, setHotelSeleccionado] = useState(alojamientos[0] || null);
    return (


        <div>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido="Hoteles para este tour" className="text-2xl" />

            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 1.5, spaceBetween: 15 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 10 },
                    1280: { slidesPerView: 4, spaceBetween: 10 },
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                navigation={false}
                onSlideChange={(swiper) => setHotelSeleccionado(alojamientos[swiper.activeIndex])}
                modules={[]}
                className="mySwiper w-full h-full mt-4"
            >
                {alojamientos.map((hotel, index) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => setHotelSeleccionado(hotel)}>
                            <HotelCard
                                name={hotel.hotel}
                                image={hotel.imagePrincipal}
                                description={hotel.descripcion}
                                stars={hotel.stars}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {hotelSeleccionado && (
                <div className="mt-4">
                    <span className="md:text-left text-center text-JisaCyan font-medium text-xl">
                        {hotelSeleccionado.hotel}
                    </span>
                    <ParrafoContent className="text-JisaGris" contenido={hotelSeleccionado.descripcion} />

                    {hotelSeleccionado.galeria?.length > 0 && (
                        <Swiper
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                480: { slidesPerView: 1.5, spaceBetween: 15 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 10 },
                                1024: { slidesPerView: 2, spaceBetween: 10 },
                                1280: { slidesPerView: 2, spaceBetween: 10 },
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop
                            navigation={false}
                            modules={[]}
                            className="mySwiper w-full h-full mt-4"
                        >
                            {hotelSeleccionado.galeria.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className='h-full'>
                                        <img src={img.url} alt={img.tag || "Imagen del hotel"} className="w-auto h-full object-cover rounded-lg" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            )}
        </div>
    )
}

export default AlojamientoSection