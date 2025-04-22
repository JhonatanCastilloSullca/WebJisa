import ToursRelacionados from "../componentes/ToursRelacionados";
import TabsSection from "../componentes/TabsSection";
import TourInfo from "../componentes/TourInfo";
import TourDetails from "../componentes/TourDetails";
import TestimoniosSection from "../componentes/secciones/TestimoniosSection";
import BlogSection from "../componentes/secciones/BlogSection";
import { useParams } from "react-router-dom";
import HeroSectionTour from "../componentes/HeroSectionTour";
import StickyReserva from "../componentes/StickyReserva";
import HeroSection from "../componentes/HeroSection";
import HeroSectionLanding from "../componentes/HeroSectionLanding";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import StarIcon from "../assets/icons/StarIcon";
import CardLayout from "../componentes/CardLayout";
import '@justinribeiro/lite-youtube';
import ItinerarioIcon from "../assets/icons/ItinerarioIcon";
import IncludeIcon from "../assets/icons/IncludeIcon";
import MochilaIcon from "../assets/icons/MochilaIcon";
import PriceIcon from "../assets/icons/PriceIcon";
import QuestionIcon from "../assets/icons/QuestionIcon";
import HotelIcon from "../assets/icons/HotelIcon";
import GalleryIcon from "../assets/icons/GalleryIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ItinerarioSection from "../componentes/ItinerarioSection";
import IncluyeSection from "../componentes/IncluyeSection";
import QueLlevarSection from "../componentes/QueLlevarSection";
import PrecioSection from "../componentes/PrecioSection";
import FaqSection from "../componentes/FaqSection";
import AlojamientoSection from "../componentes/AlojamientoSection";
import GaleriaTourSection from "../componentes/GaleriaTourSection";
import ContactoSection from "../componentes/ContactoSection";





const LandingDetail = () => {
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
        stars: 5,
        imagePrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        descripcion: "Descripción del hotel...",
        galeria: [
          {
            tag: "hotel-1",
            url: "https://picsum.photos/700/400"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/800/500"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/700/400"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/800/500"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/700/400"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/800/500"
          },
        ]
      },
      {
        hotel: "Casa Andina1",
        stars: 5,
        imagePrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        descripcion: "Descripción del hotel...",
        galeria: [
          {
            tag: "hotel-1",
            url: "https://picsum.photos/600/350"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/750/450"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/600/350"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/750/450"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/600/350"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/750/450"
          },
        ]
      },
      {
        hotel: "Casa Andina2",
        stars: 5,
        imagePrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        descripcion: "Descripción del hotel...",
        galeria: [
          {
            tag: "hotel-1",
            url: "https://picsum.photos/680/380"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/720/420"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/680/380"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/720/420"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/680/380"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/720/420"
          },
        ]
      },
      {
        hotel: "Casa Andina3",
        stars: 5,
        imagePrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        descripcion: "Descripción del hotel...",
        galeria: [
          {
            tag: "hotel-1",
            url: "https://picsum.photos/640/360"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/780/480"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/640/360"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/780/480"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/640/360"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/780/480"
          },
        ]
      },
      {
        hotel: "Casa Andina4",
        stars: 5,
        imagePrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        descripcion: "Descripción del hotel...",
        galeria: [
          {
            tag: "hotel-1",
            url: "https://picsum.photos/1690/690"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/770/470"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/1690/690"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/770/470"
          },
          {
            tag: "hotel-1",
            url: "https://picsum.photos/1690/690"
          },
          {
            tag: "hotel-2",
            url: "https://picsum.photos/770/470"
          },
        ]
      }
    ],
    galeria: [
      { largeURL: "https://picsum.photos/700/400", width: 700, height: 400 },
      { largeURL: "https://picsum.photos/800/500", width: 800, height: 500 },
      { largeURL: "https://picsum.photos/600/350", width: 600, height: 350 },
      { largeURL: "https://picsum.photos/750/450", width: 750, height: 450 },
      { largeURL: "https://picsum.photos/680/380", width: 680, height: 380 },
      { largeURL: "https://picsum.photos/720/420", width: 720, height: 420 },
      { largeURL: "https://picsum.photos/640/360", width: 640, height: 360 },
      { largeURL: "https://picsum.photos/780/480", width: 780, height: 480 },
      { largeURL: "https://picsum.photos/1690/690", width: 1690, height: 690 },
      { largeURL: "https://picsum.photos/770/470", width: 770, height: 470 }
    ],
    toursRelacionados: [
      {
        id: "1",
        slug: "cusco-slug-1",
        title: "Grupal",
        image: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        location: "Montaña de Colores Palccoyo, Cusco",
        description: "Rainbow Mountain Vinicunca Tour (Group Service)",
        price: "$999.00",
        dias: "7",
        group: "Min 4"
      },
      {
        id: "2",
        slug: "cusco-slug-2",
        title: "Grupal",
        image: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        location: "Montaña de Colores Palccoyo, Cusco",
        description: "Rainbow Mountain Vinicunca Tour (Group Service)",
        price: "$999.00",
        dias: "7",
        group: "Min 4"
      },
      {
        id: "3",
        slug: "cusco-slug-3",
        title: "Grupal",
        image: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
        location: "Montaña de Colores Palccoyo, Cusco",
        description: "Rainbow Mountain Vinicunca Tour (Group Service)",
        price: "$999.00",
        dias: "7",
        group: "Min 4"
      },
    ]
  };
  return (
    <>

      <HeroSectionLanding
        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
        title="7 dias de"
        title2="aventura"
        description={`Vive la experiencia de tu vida`}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />
      <div className="w-full ">
        <div className="max-w-7xl w-full mx-auto pb-12">
          <div className="grid grid-cols-12 -mt-48 relative">
            <div className="col-span-9 mx-4">
              <Swiper
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 1.5, spaceBetween: 15 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                  1280: { slidesPerView: 3, spaceBetween: 30 },
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                navigation={false}
                modules={[]}
                className="mySwiper w-full h-full mt-4"
              >
                <SwiperSlide >
                  <CardLayout />
                </SwiperSlide>
                <SwiperSlide >
                  <CardLayout />
                </SwiperSlide>
                <SwiperSlide >
                  <CardLayout />
                </SwiperSlide>
                <SwiperSlide >
                  <CardLayout />
                </SwiperSlide>
                <SwiperSlide >
                  <CardLayout />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-span-3 px-10 my-auto bg-white py-10">
              <div className="text-JisaGrisTextGray font-light leading-4 text-xs ">
                <p>

                  Montserrat es una tipografía limpia, moderna y versátil que ofrece una excelente
                  legibilidad en pantalla. Con formas geométricas y un estilo sofisticado,
                  funciona muy bien en títulos, encabezados y contenido general. Es perfecta
                  para transmitir profesionalismo y frescura en una web de turismo.moderna y
                  versátil que ofrece una excelente legibilidad en pantalla. Con formas
                  geométricas y un estilo
                </p>
                <br />
                <p>
                  sofisticado, funciona muy bien en títulos, encabezados y contenido general.
                  Es perfecta para transmitir profesionalismo y frescura en una web de
                  turismomoderna y versátil que ofrece una excelente legibilidad en pantalla.
                  Con formas geométricas y un estilo sofisticado, funciona muy bien en títulos,
                  encabezados y contenido general. Es perfecta para transmitir profesionalismo y
                  frescura en una web de turismo
                </p>
              </div>
              <div className="flex flex-col py-4 text-JisaGris uppercase">
                <span className="text-xl">+20 Destinos</span>
                <span className="text-xl">+5 Hoteles</span>
                <span className="text-xl">+3 restaurant</span>
                <a href="#" className="bg-JisaCyan text-white rounded-xl text-center flex justify-start px-6 md:font-medium font-bold md:text-base text-xl py-1 w-fit">
                  Reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-7xl w-full mx-auto pb-12">
          <div className="flex items-center justify-center gap-4 text-JisaGris py-4 text-xl">
            <div className="relative flex-1 border-t-2 border-dashed border-JisaCyan">
            </div>
            <span className="whitespace-nowrap text-3xl px-4">Visita Virtual</span>
            <div className="relative flex-1 border-t-2 border-dashed border-JisaCyan">
            </div>
          </div>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
              1280: { slidesPerView: 3, spaceBetween: 50 },
            }}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            navigation={false}
            modules={[]}
            className="mySwiperVideo w-full h-full mt-4"
          >
            <SwiperSlide >
              <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
            </SwiperSlide>
            <SwiperSlide >
              <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
            </SwiperSlide>
            <SwiperSlide >
              <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
            </SwiperSlide>
            <SwiperSlide >
              <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
            </SwiperSlide>
            <SwiperSlide >
              <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-full ">
        <div className="max-w-7xl w-full mx-auto pb-12">
          <div className="w-full mx-auto mb-12">
            <TabGroup className="w-full ">
              <TabList className="flex w-full justify-center gap-x-1">
                {[
                  { label: "Itinerario", icon: <ItinerarioIcon size={48} /> },
                  { label: "Incluye", icon: <IncludeIcon size={48} /> },
                  { label: "Que llevar", icon: <MochilaIcon size={48} /> },
                  { label: "Precios", icon: <PriceIcon size={48} /> },
                  { label: "FAQ's", icon: <QuestionIcon size={48} /> },
                  { label: "Alojamiento", icon: <HotelIcon size={48} /> },
                  { label: "Galeria", icon: <GalleryIcon size={48} /> },
                  { label: "Contactanos", icon: <ContactIcon size={48} /> }
                ].map((tab, index) => (
                  <Tab key={index} className={({ selected }) =>
                    `flex flex-col justify-center items-center py-2 px-6 rounded-md transition-colors duration-200  
                                      ${selected ? 'bg-white text-JisaCyan font-medium' : 'bg-white/95 text-[#98a4a8]'}`
                  }>
                    <span className="text-xl">{tab.label}</span>
                    <span className="py-2 px-4">{tab.icon}</span>
                  </Tab>
                ))}
              </TabList>

              <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-4 my-10">
                  <div className="md:col-span-12 col-span-12 h-auto flex flex-col md:items-start px-10 rounded-md">
                    <TabPanels className="w-full bg-white rounded-2xl px-10 py-6">
                      <TabPanel><ItinerarioSection itinerario={tour.itinerario} /></TabPanel>
                      <TabPanel><IncluyeSection incluye={tour.incluye} noincluye={tour.noincluye} /></TabPanel>
                      <TabPanel><QueLlevarSection quellevar={tour.quellevar} /></TabPanel>
                      <TabPanel><PrecioSection precios={tour.precios} /></TabPanel>
                      <TabPanel><FaqSection faqs={tour.faqs} /></TabPanel>
                      <TabPanel><AlojamientoSection alojamientos={tour.alojamiento} /></TabPanel>
                      <TabPanel><GaleriaTourSection galleryID="tours-gallery" images={tour.galeria} /></TabPanel>
                      <TabPanel><ContactoSection titulo={tour.titulo} /></TabPanel>
                    </TabPanels>
                  </div>
                </div>
              </div>
            </TabGroup>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full relative mx-auto  bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp)`,
        }}
      >
        <div className="relative inset-0 bg-black/85 flex items-center justify-center py-10">
          <div className="w-full max-w-7xl mx-auto px-8 text-center">
            <div className="grid grid-cols-12 gap-4 my-10">
              <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start px-10 rounded-md">

              </div>
              <div className="md:col-span-4 col-span-12 h-auto flex flex-col md:items-start  rounded-md">
                <div className="flex flex-col justify-center  gap-y-2">
                  <span className="font-medium text-2xl text-white text-left">
                    ¡Aprovecha nuestras ofertas especiales y ahorra en tu próximo viaje a Machu Picchu!
                  </span>
                  <p className="font-light text-base text-white text-left">
                    Montserrat es una tipografía limpia, moderna y versátil que ofrece una excelente legibilidad en pantalla.
                    Con formas geométricas y un estilo sofisticado, funciona muy bien en títulos, encabezados y contenido general.
                    Es perfecta para transmitir .
                  </p>

                  <a
                    href='#'
                    className="px-12 py-4 mt-10 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                  >
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LandingDetail