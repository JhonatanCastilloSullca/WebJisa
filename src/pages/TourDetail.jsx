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

    const tour = data.data.tour || [];
    const dias = tour.itinerarios.length;
    const grupo = 12;
    const recojo = "Hotel";


    return (
        <>
            {/* <StickyReserva /> */}
            <HeroSectionTour
                backgroundImage={tour.foto_banner}
                title={tour.titulo}
                description={`$ 60 / persona`}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />

            <TourInfo duracion={dias} grupo={grupo} tipo={tour.tipo_categoria.nombre} recojo={recojo} />
            <TourDetails
                ubicaciones={tour.ubicaciones}
                descripcion={tour.resumen}
                brochure={tour.brochure}
                imagenSecundaria={tour.foto_principal}
            />
            <TabsSection tour={tour} dias={dias} />

            <TestimoniosSection id="testimonios" data={data.data?.tripadvisors} google={data.data?.googles} />
            <ToursRelacionados tours={tour.relacionados} />
            <BlogSection id="blog" data={data.data?.blogs} />
        </>
    )
}
export default TourDetail