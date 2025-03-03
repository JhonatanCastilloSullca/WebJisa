import SearchBar from "../componentes/SearchBar"
import Hero from "../componentes/secciones/Hero"
import AboutSection from "../componentes/secciones/AboutSection"
import PackageSection from "../componentes/secciones/PackageSection"
import PromocionSection from "../componentes/PromocionSection";
import BlogSection from "../componentes/secciones/BlogSection";
import DestinosSection from "../componentes/DestinosSection";
import ContactSection from "../componentes/secciones/ContactSection";
import MarcasSection from "../componentes/secciones/MarcasSection";
import TestimoniosSection from "../componentes/secciones/TestimoniosSection";
import FloatingMenu from "../componentes/FloatingMenu";

const Home = () => {
    return (
        <>
            <FloatingMenu page="home" />
            <Hero id="hero" />
            <SearchBar id="search" />
            <AboutSection id="about" />
            <PackageSection id="packages" />
            <DestinosSection id="destinos" />
            <PackageSection id="tours" />
            <PromocionSection id="promociones" />
            <ContactSection id="contacto" />
            <BlogSection id="blog" />
            <TestimoniosSection id="testimonios" />
            <MarcasSection id="marcas" />



        </>
    );
};

export default Home;