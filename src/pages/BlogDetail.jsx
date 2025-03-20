import { useParams } from "react-router-dom";
import HeroSectionMidle from "../componentes/HeroSectionMidle";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal";
import JisaTitleContentVerde from "../componentes/layout/JisaTitleContentVerde";
import HeaderTitle from "../componentes/layout/HeaderTitle";
import ParrafoContent from "../componentes/layout/ParrafoContent";
import JisaTitleContentCyan from "../componentes/layout/JisaTitleContentCyan";
import InstagramIcon from "../assets/icons/InstagramIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BlogDetail = () => {
    const { slug } = useParams();
    return (
        <>
            <div>
                <HeroSectionMidle
                    backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                    title="Otra forma de disfrutar tu visita en las noches cusqueñas"
                    blogCategoria={'Nocturno'}
                    blogSlug={'nocturno'}

                />
                <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                            <JisaTitleContentCyan contenido={'Las noches en Cusco'} className="font-bold text-2xl" />
                            <ParrafoContent className="text-JisaGris"
                                contenido={`La fundadora de Jisa Adventure, Felicia Acuña Salas,
                                es una apasionada del turismo y amante de su país, Perú.
                                Con una visión clara y determinación, decidió crear esta agencia
                                para compartir la belleza y riqueza cultural de Perú con el mundo.
                                Gracias a su experiencia como guía oficial de turismo,
                                pudo diseñar experiencias únicas y auténticas para los
                                viajeros que buscan descubrir la magia de Perú. Hoy en día,
                                Jisa Adventure es reconocida por su excelencia en el servicio
                                y por brindar momentos inolvidables a quienes eligen explorar
                                este hermoso país con nosotros. ¡Únete a la aventura y descubre
                                la historia que inspiró a Felicia a crear Jisa Adventure!`}
                            />
                        </div>
                        <div className="md:col-span-5 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                            <div className="flex flex-col mx-auto">
                                <div className="w-52 h-full min-h-96 min-w-64 mx-auto">
                                    <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                                </div>
                                <div className="flex gap-x-4 text-JisaCyan justify-center p-4">
                                    <InstagramIcon size={30} className="" />
                                    <FacebookIcon size={30} className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                    <div className="w-full h-full">
                        <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center py-6">
                        <span className="text-JisaCyan font-bold text-2xl">Las noches en Cuscos</span>
                        <ParrafoContent
                            contenido={
                                `
                             La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!

                            La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!

                            y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa
                            y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa

                            `
                            }
                        />
                    </div>
                    <Swiper
                        breakpoints={{
                            320: { slidesPerView: 4, spaceBetween: 10 },
                            480: { slidesPerView: 4, spaceBetween: 15 },
                            640: { slidesPerView: 4, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 4, spaceBetween: 10 },
                            1280: { slidesPerView: 4, spaceBetween: 10 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                        navigation={false}
                        modules={[Autoplay]}
                        className="mySwiper w-full h-full mt-4"
                    >
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-48">
                                <img src="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default BlogDetail