import { useState } from "react";
import BlogCard from "../componentes/BlogCard";
import HeroSectionMidle from "../componentes/HeroSectionMidle";
import ItinerarioIcon from "../assets/icons/ItinerarioIcon";
import RestIcon from "../assets/icons/RestIcon";
import TheaterIcon from "../assets/icons/TheaterIcon";
import HornIcon from "../assets/icons/HornIcon";
import HojaIcon from "../assets/icons/HojaIcon";
import MountainIcon from "../assets/icons/MountainIcon";
import InfoIcon from "../assets/icons/InfoIcon";
import CocktailIcon from "../assets/icons/CocktailIcon";
import PromocionSection from "../componentes/PromocionSection";
import ContactSection from "../componentes/secciones/ContactSection";
import { useTranslation } from "react-i18next";
import { useApi } from "../hooks/useApi";
import Loading from "../componentes/ui/Loading";
import NotFound from "../pages/NotFound";
import SEO from "../componentes/seo";

const idiomaMap = { es: 1, en: 2, br: 3 }

const Blogs = () => {
    const { t } = useTranslation()
    const idiomaId = idiomaMap[t.language] || 1

    const { data, isLoading, isError, error } = useApi({ endpoint: 'blogs', method: 'POST', body: { idioma_id: idiomaId,}, });

    if (isLoading) return <Loading message="Cargando..." />;
    if (isError && error?.status === 404) {
        return (
            <>
            <SEO
                title="404 | Blog no encontrado"
                description="El tour que buscas no existe."
                robots="noindex, nofollow"
                type="website"
                siteName="Jisa Adventure"
                canonical={`https://jisaadventure.com/`}
            />

            <NotFound />
            </>
        );
    }
    if (isError) {
        return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    }

    const blogs = data.data.blog || [];

    return (
        <>
            <HeroSectionMidle
                backgroundImage='agencia-de-viaje-cusco-jisaadventure.webp'
                title={t("blogs.nuestro_blog")}
                description={t("blogs.description")}
            />

            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 px-6">
                <div className="grid grid-cols-12 gap-8">
                    {blogs.map((blog, index) => (
                        <div className="md:col-span-4 col-span-12" key={index}>
                            <BlogCard
                                title={blog.categoriablog.nombre}
                                image={blog.imagen}
                                location=""
                                description={blog.titulo}
                                context={blog.resumen}
                                author="Jisa Adventure"
                                fecha={blog.fecha}
                                slug={blog.slug}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <PromocionSection />
            <ContactSection />
        </>
    );
};

export default Blogs;
