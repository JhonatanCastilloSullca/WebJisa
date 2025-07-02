import GridNumber from "../componentes/GridNumber"
import HeroSectionMidle from "../componentes/HeroSectionMidle"
import JisaTitleContentCyan from "../componentes/layout/JisaTitleContentCyan"
import RowNumber from "../componentes/RowNumber"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal"
import ToursCard from "../componentes/ToursCard"
import BlogSection from "../componentes/secciones/BlogSection";
import ContactSection from "../componentes/secciones/ContactSection";
import { useTranslation } from "react-i18next";

const Tours = () => {
    const { t } = useTranslation()
    return (
        <>
            <HeroSectionMidle
                backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                title="Tours"
                description={`La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. `}
            />
            <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                <SeparatorBarHorizontal />
                <JisaTitleContentCyan contenido={t('tours.tours_destacados_de') + ' ' + 'Maras Moray '} className="text-2xl" />
                <div className="w-full max-w-6xl mx-auto md:px-0 px-4 pt-12">
                    <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                    </GridNumber>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                <SeparatorBarHorizontal />
                <JisaTitleContentCyan contenido={t('tours.paquetes_contienen') + ' ' + 'Maras Moray'} className="text-2xl" />
                <div className="w-full max-w-6xl mx-auto md:px-0 px-4 pt-12">
                    <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                    </GridNumber>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                <SeparatorBarHorizontal />
                <JisaTitleContentCyan contenido={t('tours.mas_destinos_en') + ' ' + 'Maras Moray'} className="text-2xl" />
                <div className="w-full max-w-6xl mx-auto md:px-0 px-4 pt-12">
                    <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                        <RowNumber col={4}>
                            <ToursCard
                                title="Grupal"
                                image='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                location="Montaña de Colores Palccoyo, Cusco"
                                description="Rainbow Mountain Vinicunca Tour (Group Service)"
                                price="$999.00"
                                dias="7"
                                group={'Min 4'}
                            />
                        </RowNumber>
                    </GridNumber>
                </div>
                <div className="flex justify-center w-full my-12">
                    <a href="#" className="font-bold text-JisaVerde text-2xl"> {t('tours.ver_mas_tours')}</a>
                </div>
            </div>
            <div
                className="w-full h-full relative mx-auto bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url("/agencia-de-viaje-cusco-jisaadventure.webp")`,
                }}
            >
                <div className="relative inset-0 bg-black/95 flex flex-col items-center justify-center py-12">
                    <div className="w-full max-w-5xl mx-auto px-8 md:px-20 lg:px-40 text-center">
                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <h3 className="md:text-5xl text-2xl md:w-full text-JisaVerde  md:text-center text-center font-bold mb-4">{'Nuestro Destinos'}</h3>
                        </div>
                    </div>
                    <div className="w-full max-w-7xl mx-auto px-12 flex flex-col">
                        <Swiper
                            breakpoints={{
                                320: { slidesPerView: 4, spaceBetween: 10 },
                                480: { slidesPerView: 4, spaceBetween: 15 },
                                640: { slidesPerView: 4, spaceBetween: 20 },
                                768: { slidesPerView: 4, spaceBetween: 10 },
                                1024: { slidesPerView: 4, spaceBetween: 10 },
                                1280: { slidesPerView: 4, spaceBetween: 10 },
                            }}

                            loop
                            navigation={false}
                            className="mySwiper w-full h-full mt-4"
                        >

                            <SwiperSlide >
                                <div className="relative h-48 group">
                                    <img
                                        src='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                                        alt="imagen"
                                        className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:border-4 group-hover:border-white"
                                    />

                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-85 transition-all duration-300 flex flex-col items-center justify-center text-white rounded-lg p-4 group-hover:border-4 group-hover:border-white">
                                        <h3 className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            Tours y Paquetes
                                        </h3>
                                        <div className=" absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-center mt-2">
                                            <span className="block">8 {t('tours.tours_disponibles')}</span>
                                            <span className="block">4 {t('tours.paquetes_disponibles')}</span>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="h-48">
                                    <img
                                        src={`url("/agencia-de-viaje-cusco-jisaadventure.webp")`}
                                        alt={'imagen'}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="h-48">
                                    <img
                                        src={`url("/agencia-de-viaje-cusco-jisaadventure.webp")`}
                                        alt={'imagen'}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="h-48">
                                    <img
                                        src={`url("/agencia-de-viaje-cusco-jisaadventure.webp")`}
                                        alt={'imagen'}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="h-48">
                                    <img
                                        src={`url("/agencia-de-viaje-cusco-jisaadventure.webp")`}
                                        alt={'imagen'}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <BlogSection />
            <ContactSection />
        </>

    )
}

export default Tours