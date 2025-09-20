import GoogleTestimonio from "./GoogleTestimonio";
import TripadvisorReview from "./TripTestimonio";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";

const Testimonios = ({ marca, data, total, totalGoogle }) => {
    const { t } = useTranslation()
    const testimonios = data || [];

    return (
        <div className="w-full max-w-7xl mx-auto my-24 pb-24 mb-12">
            <div className="grid grid-cols-12 items-center px-6">
                <div className="md:col-span-9 col-span-12">
                    <div className="">
                        <Swiper


                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                480: { slidesPerView: 1.5, spaceBetween: 15 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 2.3, spaceBetween: 25 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                                1280: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiperTestimonio"
                        >

                            {testimonios.map((comentario, index) => (
                                <SwiperSlide key={index}>
                                    {marca === "Tripadvisor" ? (
                                        <TripadvisorReview review={comentario} />
                                    ) : (
                                        <GoogleTestimonio review={comentario} />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex justify-center py-4">

                        {marca === "Tripadvisor" ? (
                            <p className="text-center" >{t("trip_section.la_evaluación_general_en")} <span className="text-JisaCyan font-bold">Tripadvisor </span>{t("trip_section.es")} <span className="text-JisaCyan font-bold">5.0 </span> de 5,{t("trip_section.en_base_a")}<span className="text-JisaCyan font-bold"> {total} {t("trip_section.reseñas")} </span></p>
                        ) : (
                            <p className="text-center" >{t("trip_section.la_evaluación_general_en")} <span className="text-[#eb4939] font-bold">Tripadvisor </span>{t("trip_section.es")} <span className="text-[#eb4939] font-bold">5.0 </span> de 5,{t("trip_section.en_base_a")}<span className="text-[#eb4939] font-bold"> {totalGoogle} {t("trip_section.reseñas")} </span></p>

                        )}
                    </div>
                </div>
                <div className="md:col-span-3 col-span-12 justify-center md:flex hidden">

                    {marca === "Tripadvisor" ? (
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png" alt="Jisa-Nosotros-Paquete" className="w-44" />
                    ) : (
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png" alt="Jisa-Nosotros-Paquete" className="w-44" />

                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonios;
