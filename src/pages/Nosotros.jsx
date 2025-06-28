import HeartIcon from "../assets/icons/HeartIcon"
import HojaIcon from "../assets/icons/HojaIcon"
import MountainIcon from "../assets/icons/MountainIcon"
import StarIcon from "../assets/icons/StarIcon"
import HeroSectionMidle from "../componentes/HeroSectionMidle"
import HeaderTitle from "../componentes/layout/HeaderTitle"
import JisaTitleContent from "../componentes/layout/JisaTitleContent"
import JisaTitleContentCyan from "../componentes/layout/JisaTitleContentCyan"
import JisaTitleContentVerde from "../componentes/layout/JisaTitleContentVerde"
import ParrafoContent from "../componentes/layout/ParrafoContent"
import SubHeaderTitle from "../componentes/layout/SubHeaderTitle"
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal"
import SeparatorBarHorizontalVerdeClaro from "../componentes/SeparatorBarHorizontalVerdeClaro"
import imagen from '../assets/imagen/pngwing.com.png';
import SeparatorBarHorizontalVerde from "../componentes/SeparatorBarHorizontalVerde"
import CertificadosSection from "../componentes/secciones/CertificadosSection"
import TestimoniosSection from "../componentes/secciones/TestimoniosSection"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next"
import NosotrosCardSect from "../componentes/NosotrosCardSect"
import UsuarioEquipoCard from "../componentes/UsuarioEquipoCard"


const Nosotros = () => {
    const { t } = useTranslation()

    const nuestroEquipo = [
        {
            titulo: "Guías Profesionales",
            descripcion: `La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo.
      
      La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo.
      
      La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo.`,
            galeria: [
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
            ]
        },
        {
            titulo: "Atención de Calidad",
            descripcion: `En Jisa Adventure, nos enorgullece ofrecer un servicio de atención al cliente excepcional. Nuestro equipo está dedicado a brindar una experiencia de viaje personalizada y de alta calidad para cada uno de nuestros clientes.`,
            galeria: [
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
            ]
        },
        {
            titulo: "Conductores Expertos",
            descripcion: `Nuestros conductores son altamente experimentados y conocen a la perfección cada rincón de los destinos turísticos. Garantizamos seguridad, comodidad y un viaje placentero en cada recorrido.`,
            galeria: [
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
                "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
            ]
        }
    ];
    return (
        <>
            <HeroSectionMidle
                backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                title={t("nosotros.sobre_nosotros")}
                description={t("nosotros.description")}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                        <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                    </div>
                    <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10 gap-y-8">
                        <div className="md:justify-start md:items-start justify-center flex flex-col items-center">
                            <h4 className="text-3xl font-medium text-JisaCyan" >{t("nosotros.misión")}</h4>
                            <SeparatorBarHorizontalVerdeClaro />
                            <ParrafoContent contenido={`La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas`} />
                        </div>
                        <div className="md:justify-start md:items-start justify-center flex flex-col items-center">
                            <h4 className="text-3xl font-medium text-JisaCyan" >{t("nosotros.visión")}</h4>
                            <SeparatorBarHorizontalVerdeClaro />
                            <ParrafoContent contenido={`La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <NosotrosCardSect
                        title={t("nosotros.pasión_por_el_turismo")}
                        description="La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada"
                        Icon={HeartIcon}
                    />
                    <NosotrosCardSect
                        title={t("nosotros.sostenibilidad")}
                        description="La fundadora de Jisa Adventure, Felicia Acuña Salas, es"
                        Icon={HojaIcon}
                    />
                    <NosotrosCardSect
                        title={t("nosotros.excelencia_en_el_servicio")}
                        description="La fundadora de Jisa AdSalas, es una apasionada"
                        Icon={StarIcon}
                    />
                    <NosotrosCardSect
                        title={t("nosotros.respeto_por_la_cultura")}
                        description="La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada"
                        Icon={MountainIcon}
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 flex flex-col justify-center items-center">
                <HeaderTitle title={'Nuestro Equipo'} />
                <SeparatorBarHorizontal />
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 1, spaceBetween: 15 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 1, spaceBetween: 10 },
                        1024: { slidesPerView: 1, spaceBetween: 10 },
                        1280: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: true }}
                    loop
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="NuestroEquipoSwyper w-full h-full mt-4"
                >

                    {nuestroEquipo.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div key={index} className="grid grid-cols-12 gap-4 w-full">
                                <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start align-middle px-10">
                                    <JisaTitleContentCyan contenido={item.titulo} className="text-4xl" />
                                    <SeparatorBarHorizontalVerdeClaro />
                                    <ParrafoContent className="pe-8 text-JisaGrisTextGray" contenido={item.descripcion} />
                                </div>
                                <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                                        {item.galeria.map((imagen, idx) => (
                                            <img key={idx} src={imagen} alt={item.titulo} className="w-full h-64 object-cover rounded-md" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>



            </div>
            <div className="w-full mx-auto mt-24 mb-12 flex flex-col justify-center items-center bg-JisaCyan">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-12 gap-4 w-full pt-12 py-16">
                        <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                            <JisaTitleContentVerde contenido={'Jisa Adventure'} className="text-6xl" />
                            <JisaTitleContent contenido={t("nosotros.UNA_EMPRESA_DIFERENTE")} className="text-2xl" />
                            <SeparatorBarHorizontalVerdeClaro />
                            <ParrafoContent className="text-white pe-12" contenido={
                                `
                                La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, 
                                decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, 
                                pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, 
                                Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. 
                                ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!
                                `
                            } />
                        </div>
                        <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                            <Swiper
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    480: { slidesPerView: 1, spaceBetween: 15 },
                                    640: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 1, spaceBetween: 10 },
                                    1024: { slidesPerView: 1, spaceBetween: 10 },
                                    1280: { slidesPerView: 1, spaceBetween: 10 },
                                }}
                                autoplay={{ delay: 2500, disableOnInteraction: true }}
                                loop
                                pagination={true}
                                modules={[Autoplay, Pagination]}
                                className="NuestroEquipoSwyper w-full h-full mt-4"
                            >
                                <SwiperSlide>
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full h-96 object-cover rounded-md " />
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 flex flex-col justify-center items-center ">
                <HeaderTitle title={t("nosotros.nuestro_equipo")} />
                <SeparatorBarHorizontal />
                <SubHeaderTitle title={`Descubre las historias y testimonios de aquellos que han viajado con Jisa Adventure y han experimentado momentos inolvidables en los hermosos destinos de Perú.`} />
                <div className="grid grid-cols-8 md:gap-14 gap-10 px-10 w-full pt-12 pb-16">
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                    <UsuarioEquipoCard nombre="MARTHA P. MORALES HARRIS" rol="Asesor de venta" imagen={imagen} />
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 flex flex-col ">
                <JisaTitleContentVerde contenido={t("nosotros.Certificados")} className="text-5xl" />
                <JisaTitleContent contenido={t('nosotros.Titulos_Certificados_y_Reconocimientos')} className="text-2xl" />
                <SeparatorBarHorizontalVerde />
                <CertificadosSection />
            </div>
            <TestimoniosSection id="testimonios" />

        </>
    )
}
export default Nosotros