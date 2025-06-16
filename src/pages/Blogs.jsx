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

const Blogs = () => {
    const { t } = useTranslation()
    const [categoriaActiva, setCategoriaActiva] = useState(null);

    const categorias = [
        { id: "comida", label: "Tours", icon: <RestIcon size={40} /> },
        { id: "teatro", label: "Teatro", icon: <TheaterIcon size={40} /> },
        { id: "comunicados", label: "Alerta", icon: <HornIcon size={40} /> },
        { id: "naturaleza", label: "Naturaleza", icon: <HojaIcon size={40} /> },
        { id: "cultura", label: "Cultura", icon: <MountainIcon size={40} /> },
        { id: "recomendaciones", label: "Recomendaciones", icon: <InfoIcon size={40} /> },
        { id: "rutas", label: "Rutas", icon: <ItinerarioIcon size={40} /> },
        { id: "nocturno", label: "Nocturno", icon: <CocktailIcon size={40} /> },
    ];

    const blogs = [
        {
            titulo: "Explora los mejores tours en Cusco",
            slug: "tours-en-cusco",
            imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
            fecha: "Ago 15, 2024",
            Autor: "Jisa Adventure",
            ubicacion: "Cusco, Perú",
            descripcion: "Descubre los mejores tours para explorar Cusco y sus alrededores.",
            tag: ["aventura", "cultura"],
            categoria: "comida",
        },
        {
            titulo: "Las mejores obras de teatro en Lima",
            slug: "teatro-lima",
            imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
            fecha: "Jul 20, 2024",
            Autor: "Cultura Viva",
            ubicacion: "Lima, Perú",
            descripcion: "Descubre las obras de teatro más destacadas de la capital.",
            tag: ["arte", "drama"],
            categoria: "teatro",
        },
        {
            titulo: "Rutas recomendadas para trekking",
            slug: "rutas-trekking",
            imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
            fecha: "Jun 10, 2024",
            Autor: "Aventura Andina",
            ubicacion: "Andes, Perú",
            descripcion: "Las mejores rutas de trekking en los Andes peruanos.",
            tag: ["naturaleza", "aventura"],
            categoria: "rutas",
        },
        {
            titulo: "Rutas recomendadas para trekking",
            slug: "rutas-trekking",
            imagenPrincipal: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
            fecha: "Jun 10, 2024",
            Autor: "Aventura Andina",
            ubicacion: "Andes, Perú",
            descripcion: "Las mejores rutas de trekking en los Andes peruanos.",
            tag: ["naturaleza", "aventura"],
            categoria: "rutas",
        },
    ];

    const blogsFiltrados = categoriaActiva
        ? blogs.filter((blog) => blog.categoria === categoriaActiva)
        : blogs;

    return (
        <>
            <HeroSectionMidle
                backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                title={t("blogs.nuestro_blog")}
                description={t("blogs.description")}
            />

            <div className="w-full max-w-4xl mx-auto mt-24 mb-12 px-6">
                <div className="relative flex items-center justify-between">
                    {categorias.map(({ id, label, icon }) => (
                        <div
                            key={id}
                            className="flex flex-col justify-center items-center z-10 cursor-pointer"
                            onClick={() => setCategoriaActiva(id)}
                        >
                            <div
                                className={`h-20 w-20 rounded-xl flex justify-center items-center transition-all duration-300 ${categoriaActiva === id ? "bg-JisaVerde text-JisaGris" : "bg-JisaGris text-JisaVerde"
                                    }`}
                            >
                                {icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mt-24 mb-12 px-6">
                <div className="grid grid-cols-12 gap-8">
                    {blogsFiltrados.map((blog, index) => (
                        <div className="md:col-span-4 col-span-12" key={index}>
                            <BlogCard
                                title={blog.categoria}
                                image={blog.imagenPrincipal}
                                location={blog.ubicacion}
                                description={blog.titulo}
                                context={blog.descripcion}
                                author={blog.Autor}
                                fecha={blog.fecha}
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
