import { useParams } from "react-router-dom";
import HeroSectionTour from "../componentes/HeroSectionTour";
import FootIcon from "../assets/icons/FootIcon";
import SeparatorBar from "../componentes/SeparatorBar";
import IconCategoria from "../componentes/IconCategoria";
import JisaTitleContentVerde from "../componentes/layout/JisaTitleContentVerde";
import HeaderTitle from "../componentes/layout/HeaderTitle";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal";
import ParrafoContent from "../componentes/layout/ParrafoContent";
import MapDotIcon from "../assets/icons/MapDotIcon";
import StickyReserva from "../componentes/StickyReserva";
import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ItinerarioIcon from "../assets/icons/ItinerarioIcon";
import IncludeIcon from "../assets/icons/IncludeIcon";
import MochilaIcon from "../assets/icons/MochilaIcon";
import PriceIcon from "../assets/icons/PriceIcon";
import QuestionIcon from "../assets/icons/QuestionIcon";
import GalleryIcon from "../assets/icons/GalleryIcon";
import HotelIcon from "../assets/icons/HotelIcon";
import SeparatorBarHorizontalVerde from "../componentes/SeparatorBarHorizontalVerde";
import ContactIcon from "../assets/icons/ContactIcon";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import DateRangePicker from "../componentes/CalendarRangoPicker";
import CartIcon from "../assets/icons/CartIcon";
import DinnersIcon from "../assets/icons/DinnersIcon";
import MasterCardIcon from "../assets/icons/MasterCardIcon";
import VisaIcon from "../assets/icons/VisaIcon";
import PaypalIcon from "../assets/icons/PaypalIcon";
import AmericanIcon from "../assets/icons/AmericanIcon";
import SubHeaderTitle from "../componentes/layout/SubHeaderTitle";
import DownIcon from "../assets/icons/DownIcon";
import JisaTitleContentGris from "../componentes/layout/JisaTitleContentGris";
import TimesIcon from "../assets/icons/TimesIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import DotIcon from "../assets/icons/DotIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HotelCard from "../componentes/HotelCard";
import FormContactTour from "../componentes/FormContactTour";
import TestimoniosSection from "../componentes/secciones/TestimoniosSection";
import PackageSection from "../componentes/secciones/PackageSection";
import GridNumber from "../componentes/GridNumber";
import RowNumber from "../componentes/RowNumber";
import ToursCard from "../componentes/ToursCard";
import JisaTitleContentCyan from "../componentes/layout/JisaTitleContentCyan";
import BlogSection from "../componentes/secciones/BlogSection";
import ClockIcon from "../assets/icons/ClockIcon";
import GroupUsers from "../assets/icons/GroupUsers";
import MountainHikIcon from "../assets/icons/MountainHikIcon";
import BuIcon from "../assets/icons/BuIcon";
import TourInfo from "../componentes/TourInfo";
import TourDetails from "../componentes/TourDetails";
import ItinerarioSection from "../componentes/ItinerarioSection";
import IncluyeSection from "../componentes/IncluyeSection";
import QueLlevarSection from "../componentes/QueLlevarSection";
import PrecioSection from "../componentes/PrecioSection";
import FaqSection from "../componentes/FaqSection";


const TourDetail = () => {
    const { slug } = useParams();

    const tour = {
        imagen: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        imagenSecundaria: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        titulo: "CAMINO INCA",
        precioPrincipal: "999.00",
        duracion: "Fullday",
        grupo: "12",
        tipo: "Trekking",
        tipoSlug: "trekking",
        descripcion: "La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!",
        recojo: "en su Hotel",
        ubicaciones: [
            { ubicacion: "Cusco", slugUbicacion: "cusco" },
            { ubicacion: "Machupicchu", slugUbicacion: "machupicchu" }
        ],
        brochure: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.pdf",
        itinerario: {
            descripcion: "La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!",
            dias: [
                { titulo: "Llegada a Machupicchu", descripcion: "La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Con una visión clara y determinación, decidió crear esta agencia para compartir la belleza y riqueza cultural de Perú con el mundo. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros que buscan descubrir la magia de Perú. Hoy en día, Jisa Adventure es reconocida por su excelencia en el servicio y por brindar momentos inolvidables a quienes eligen explorar este hermoso país con nosotros. ¡Únete a la aventura y descubre la historia que inspiró a Felicia a crear Jisa Adventure!", imagen: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" },
                { titulo: "Día 2 en Machupicchu", descripcion: "Descripción del día 2", imagen: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" },
                { titulo: "Día 3 en Machupicchu", descripcion: "Descripción del día 3", imagen: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" }
            ]
        },
        incluye: [
            { incluye: "Este es un ejemplo de incluye en un Tour" },
            { incluye: "Este es otro ejemplo de un lista de incluye pero de 2 línea" },
            { incluye: "Un ejemplo de un incluye de la tercera línea" }
        ],
        noincluye: [
            { noincluye: "Ejemplo de lo que no incluye" },
            { noincluye: "Otro ejemplo de lo que no incluye" },
            { noincluye: "Tercer ejemplo de lo que no incluye" }
        ],
        quellevar: [
            { quellevar: "Ejemplo de qué llevar" },
            { quellevar: "Otro ejemplo de qué llevar" },
            { quellevar: "Tercer ejemplo de qué llevar" }
        ],
        precios: [
            { titulo: "INDIVIDUAL", precio: "399.99", reserva: "159.99" },
            { titulo: "GRUPAL", precio: "399.99", reserva: "159.99" },
            { titulo: "PRIVADO", precio: "399.99", reserva: "159.99" }
        ],
        faqs: [
            { titulo: "¿Cuánto tiempo tengo para pagar mi reserva?", descripcion: "Descripción de la respuesta" },
            { titulo: "¿Cuáles son los métodos de pago?", descripcion: "Descripción de la respuesta" },
            { titulo: "¿Se puede cancelar la reserva?", descripcion: "Descripción de la respuesta" }
        ],
        alojamiento: [
            {
                hotel: "Casa Andina",
                descripcion: "Descripción del hotel...",
                galeria: [
                    { tag: "hotel-1", url: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" },
                    { tag: "hotel-2", url: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp" }
                ]
            }
        ],
        galeria: [
            { "tag": "image-1", "url": "https://picsum.photos/700/400" },
            { "tag": "image-2", "url": "https://picsum.photos/800/500" },
            { "tag": "image-3", "url": "https://picsum.photos/600/350" },
            { "tag": "image-4", "url": "https://picsum.photos/750/450" },
            { "tag": "image-5", "url": "https://picsum.photos/680/380" },
            { "tag": "image-6", "url": "https://picsum.photos/720/420" },
            { "tag": "image-7", "url": "https://picsum.photos/640/360" },
            { "tag": "image-8", "url": "https://picsum.photos/780/480" },
            { "tag": "image-9", "url": "https://picsum.photos/690/390" },
            { "tag": "image-10", "url": "https://picsum.photos/770/470" }
        ],
        toursRelacionados: [
            { id: "1", slug: "cusco-slug-1" },
            { id: "2", slug: "cusco-slug-2" },
            { id: "3", slug: "cusco-slug-3" },
            { id: "4", slug: "cusco-slug-4" },
        ]
    };




    return (
        <>
            <StickyReserva />
            <HeroSectionTour
                backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                title="CAMINO INCA"
                description={`S/. 60 / persona`}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <TourInfo duracion={tour.duracion} grupo={tour.grupo} tipo={tour.tipo} recojo={tour.recojo} />;
            <TourDetails
                ubicaciones={tour.ubicaciones}
                descripcion={tour.descripcion}
                brochure={tour.brochure}
                imagenSecundaria={tour.imagenSecundaria}
            />
            <div className="w-full mx-auto mt-24 mb-12">
                <TabGroup className={'w-full'}>
                    <TabList className={'flex w-full justify-center bg-JisaGris/5 '}>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md bg-white'}>
                            <span className="font-medium text-xl text-JisaGris">Itinerario</span>
                            <span className="text-JisaGris py-2 px-4"><ItinerarioIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Incluye</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><IncludeIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Que llevar</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><MochilaIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Precios</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><PriceIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">FAQ's</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><QuestionIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Alojamiento</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><HotelIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Galeria</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><GalleryIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Contactanos</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><ContactIcon size={48} /></span>
                        </Tab>
                    </TabList>
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-12 gap-4 my-10">
                            <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start px-10 ">
                                <TabPanels className={`w-full`}>
                                    <TabPanel>
                                        <ItinerarioSection itinerario={tour.itinerario} />
                                    </TabPanel>
                                    <TabPanel className={''}>
                                        <IncluyeSection incluye={tour.incluye} noincluye={tour.noincluye} />
                                    </TabPanel>
                                    <TabPanel className={''}>
                                        <QueLlevarSection quellevar={tour.quellevar} />
                                    </TabPanel>
                                    <TabPanel className={``}>
                                        <PrecioSection precios={tour.precios} />
                                    </TabPanel>
                                    <TabPanel className={``}>
                                        <FaqSection faqs={tour.faqs} />
                                    </TabPanel>
                                    <TabPanel className={`w-full`}>
                                        <SeparatorBarHorizontalVerde />
                                        <JisaTitleContentGris contenido={'Hoteles para este tour'} className="text-2xl" />
                                        <Swiper
                                            breakpoints={{
                                                320: { slidesPerView: 1, spaceBetween: 10 },
                                                480: { slidesPerView: 1.5, spaceBetween: 15 },
                                                640: { slidesPerView: 2, spaceBetween: 20 },
                                                768: { slidesPerView: 4, spaceBetween: 10 },
                                                1024: { slidesPerView: 4, spaceBetween: 10 },
                                                1280: { slidesPerView: 4, spaceBetween: 10 },
                                            }}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            loop={true}
                                            navigation={false}
                                            modules={[Autoplay,]}
                                            className="mySwiper w-full h-full mt-4"
                                        >
                                            <SwiperSlide >
                                                <HotelCard
                                                    name="Hotel Paraíso"
                                                    image="https://picsum.photos/690/390"
                                                    description="Un lugar ideal para relajarse con una vista increíble."
                                                    stars={5}
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide >
                                                <HotelCard
                                                    name="Montaña Lodge"
                                                    image="https://picsum.photos/690/390"
                                                    description="Hospedaje acogedor en la montaña con aire fresco y tranquilidad."
                                                    stars={4}
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide >
                                                <HotelCard
                                                    name="City View Hotel"
                                                    image="https://picsum.photos/690/390"
                                                    description="Hotel moderno con vista panorámica a la ciudad."
                                                    stars={3}
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide >
                                                <HotelCard

                                                    name="Hotel Paraíso"
                                                    image="https://picsum.photos/690/390"
                                                    description="Un lugar ideal para relajarse con una vista increíble."
                                                    stars={5}
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide >
                                                <HotelCard
                                                    name="Montaña Lodge"
                                                    image="https://picsum.photos/690/390"
                                                    description="Hospedaje acogedor en la montaña con aire fresco y tranquilidad."
                                                    stars={4}
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide >
                                                <HotelCard
                                                    name="City View Hotel"
                                                    image="https://picsum.photos/690/390"
                                                    description="Hotel moderno con vista panorámica a la ciudad."
                                                    stars={3}
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="mt-4">
                                            <span className={`md:text-left text-center text-JisaCyan font-medium text-xl `} >
                                                Casa Andina
                                            </span>
                                            <ParrafoContent
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
                                            <Swiper
                                                breakpoints={{
                                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                                    480: { slidesPerView: 1.5, spaceBetween: 15 },
                                                    640: { slidesPerView: 2, spaceBetween: 20 },
                                                    768: { slidesPerView: 2, spaceBetween: 10 },
                                                    1024: { slidesPerView: 2, spaceBetween: 10 },
                                                    1280: { slidesPerView: 2, spaceBetween: 10 },
                                                }}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                navigation={false}
                                                modules={[Autoplay,]}
                                                className="mySwiper w-full h-full mt-4"
                                            >
                                                <SwiperSlide >
                                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto rounded-lg" />
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto rounded-lg" />
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto rounded-lg" />
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto rounded-lg" />
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto rounded-lg" />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className={`w-full`}>
                                        <SeparatorBarHorizontalVerde />
                                        <JisaTitleContentGris contenido={'Galeria'} className="text-2xl" />

                                    </TabPanel>
                                    <TabPanel className={`w-full`}>
                                        <div className="flex flex-col gap-y-2">
                                            <SeparatorBarHorizontalVerde />
                                            <JisaTitleContentVerde contenido={'Contacto'} className="text-2xl" />
                                            <JisaTitleContentGris contenido={`¿Listo para descubrir la belleza de Perú? Ponte en contacto con nosotros y hagamos realidad el viaje de tus sueños.`} />

                                            <FormContactTour />
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                                <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
                                <div className="w-full flex justify-center gap-x-4 items-center py-4">
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto h-16 rounded-lg" />
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto h-16 rounded-lg" />
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto h-16 rounded-lg" />
                                    <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-auto h-16 rounded-lg" />
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle ">
                                <div className="w-full">
                                    <div className="bg-JisaGris px-6 pt-4 w-full flex-col flex justify-center items-center text-white rounded-t-md">
                                        <h4 className="font-bold text-3xl">
                                            Reserva ahora
                                        </h4>
                                        <SeparatorBarHorizontalVerde />
                                        <h5 className="font-semibold text-base" >Camino Inca Full Day</h5>
                                        <span className="font-bold text-2xl" >US$ 999.00</span>
                                    </div>
                                    <div className="border-2 border-JisaGrisTextGray/10 bg-white rounded-b-md flex flex-col pb-2">
                                        <DateRangePicker />
                                        <span className="font-semibold text-lg text-JisaCyan text-center">Cantidad de pasajeros</span>
                                        <div className="flex p-2 justify-center">
                                            <button className=" font-bold text-JisaGris text-3xl px-4">
                                                -
                                            </button>
                                            <input type="text" className="text-JisaGrisTextGray text-xl w-36 rounded-sm text-center border-2 border-JisaGrisTextGray/5 bg-white" placeholder="1" />
                                            <button className=" font-bold text-JisaGris text-3xl px-4">
                                                +
                                            </button>
                                        </div>
                                        <div className="flex justify-center">
                                            <a href="#" className="">
                                                <div className="flex bg-JisaCyan rounded-md text-white px-10 gap-x-2 py-2 justify-center w-fit">
                                                    <CartIcon />
                                                    <span className="font-semibold text-lg">Añadir al carrito</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="flex gap-2 py-4 justify-center">
                                            <div className="w-12">
                                                <DinnersIcon />
                                            </div>
                                            <div className="w-12">
                                                <MasterCardIcon />
                                            </div>
                                            <div className="w-12">
                                                <VisaIcon />
                                            </div>
                                            <div className="w-12">
                                                <PaypalIcon />
                                            </div>
                                            <div className="w-12">
                                                <AmericanIcon />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-JisaVerde text-xs text-left px-4">
                                                * servicios fuera de impuestos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabGroup>
            </div >
            <TestimoniosSection id="testimonios" />
            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
                <SeparatorBarHorizontal />
                <JisaTitleContentCyan contenido={'Tours relacionados'} className="text-2xl" />
                <GridNumber col={12} className="md:gap-x-11 gap-x-0 pt-4">
                    <RowNumber col={4}>
                        <ToursCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
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
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
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
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            price="$999.00"
                            dias="7"
                            group={'Min 4'}
                        />
                    </RowNumber>
                </GridNumber>
            </div>
            <BlogSection id="blog" />
        </>
    )
}
export default TourDetail