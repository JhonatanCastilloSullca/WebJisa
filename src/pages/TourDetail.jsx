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
import SEO from "../componentes/seo";
import { buildTouristTripFromTour } from "../utils/seoSchemasTour";
import NotFound from "../pages/NotFound";
import Loading from "../componentes/ui/Loading";

const idiomaMap = { es: 1, en: 2, br: 3 }

const TourDetail = () => {
    const { t } = useTranslation()
    const { slug } = useParams();
    const { ubicacion } = useParams();

    const idiomaId = idiomaMap[t.language] || 1

    const { data, isLoading, isError, error } = useApi({ endpoint: 'tour-slug', method: 'POST', body: { idioma_id: idiomaId, slug: slug, }, });

    if (isLoading) return <Loading message="Cargando..." />;
    if (isError && error?.status === 404) {
        return (
            <>
            <SEO
                title="404 | Tour no encontrado"
                description="El tour que buscas no existe."
                robots="noindex, nofollow"
                type="website"
                siteName="Jisa Adventure"
                canonical={`https://jisaadventure.com/tours/${slug}`}
            />

            <NotFound />
            </>
        );
    }
    if (isError) {
        return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    }

    const tour = data.data.tour || [];
    const dias = tour.itinerarios.length;
    const grupo = tour.max_pax;
    const recojo = tour.recojo;
    const taxo = tour.tipo == 1 ? 'paquetes' : 'tours';
    const canonicalReal = `https://jisaadventure.com/${taxo}/${slug}`;

    const jsonLd = buildTouristTripFromTour(tour, {
        baseUrl: "https://jisaadventure.com",
        reservaBase: "/tours",
        defaultCurrency: "USD",
        reviews: data.data?.totalTripadvisor
    });

    return (
        <>
            <SEO
                title={tour.title}
                description={tour.description}
                robots={tour.robots}
                type="article"
                siteName="Jisa Adventure"
                canonical={tour.canonical ?? canonicalReal}
                keywords={tour.keywords}
                jsonLd={jsonLd}
                image={tour.foto_banner}
            />
            {/* <StickyReserva tour={tour} /> */}

            <HeroSectionTour
                backgroundImage={tour.foto_banner}
                title={tour.h1}
                description={`${t('tours_destacados.desde')} $ ${tour.precio} / persona`}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />

            <TourInfo duracion={dias} grupo={grupo} tipo={tour.tipo_categoria.nombre} recojo={recojo} />
            
            <TourDetails
                tour={tour}
                ubicaciones={tour.ubicaciones}
                descripcion={tour.resumen}
                brochure={tour.brochure}
                imagenSecundaria={tour.foto_principal}
            />
            <TabsSection tour={tour} dias={dias} />

            <TestimoniosSection id="testimonios" data={data.data?.tripadvisors} google={data.data?.googles} totalTripadvisor={data.data?.totalTripadvisor} totalGoogle={data.data?.totalGoogle}/>
            <ToursRelacionados tours={tour.relacionados} />
            <BlogSection id="blog" data={data.data?.blogs} />
        </>
    )
}
export default TourDetail