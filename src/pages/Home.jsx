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
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";

const Home = () => {

    const { data, isLoading, isError, error } = useApi({ endpoint: 'home' });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
        );
    }
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>
    
    return (
        <>
            {/* <FloatingMenu page="home" /> */}
            <Hero id="hero" data={data.data.sliders} />
            <SearchBar id="search" data={data.data.destinos} />
            <AboutSection id="about" data={data.data.destinos} />
            <PackageSection id="packages" data={data.data.destinos} />
            <DestinosSection id="destinos" data={data.data.destinos} />
            <PackageSection id="tours" data={data.data.destinos} />
            <PromocionSection id="promociones" data={data.data.destinos} />
            <ContactSection id="contacto" data={data.data.destinos} />
            <BlogSection id="blog" data={data.data.destinos} />
            <TestimoniosSection id="testimonios" data={data.data.destinos} />
            <MarcasSection id="marcas" data={data.data.destinos} />
        </>
    );
};

export default Home;