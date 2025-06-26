import ToursRelacionados from "../componentes/ToursRelacionados";
import TabsSection from "../componentes/TabsSection";
import TourInfo from "../componentes/TourInfo";
import TourDetails from "../componentes/TourDetails";
import TestimoniosSection from "../componentes/secciones/TestimoniosSection";
import BlogSection from "../componentes/secciones/BlogSection";
import { useParams } from "react-router-dom";
import HeroSectionTour from "../componentes/HeroSectionTour";
import StickyReserva from "../componentes/StickyReserva";
import { useTranslation } from "react-i18next";
import { useApi } from "../hooks/useApi";

const idiomaMap = { es: 1, en: 2, br: 3 }

const TourDetail = () => {
    const { t } = useTranslation()
    const { slug } = useParams();

    const idiomaId = idiomaMap[t.language] || 1
        
    const { data, isLoading, isError, error } = useApi({ endpoint: 'tour-slug', method: 'POST', body: { idioma_id: idiomaId, slug: slug, }, });

    if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    if (!data || !data.data) return null;

    const blogData = data.data.blog || [];

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
            <TabsSection tour={tour} />
            <TestimoniosSection id="testimonios" data={data.data?.tripadvisors} google={data.data?.googles} />
            <ToursRelacionados tours={tour.toursRelacionados} />
            <BlogSection id="blog" data={data.data?.blogs}/>
        </>
    )
}
export default TourDetail