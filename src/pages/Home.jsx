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

function Home({ dataGeneral }) {
    
    return (
        <>
            {/* <FloatingMenu page="home" /> */}
            <Hero id="hero" data={dataGeneral.slider} />
            <SearchBar id="search" data={dataGeneral.tours} />
            <AboutSection id="about" data={dataGeneral.nosotros} />
            <PackageSection id="packages" data={dataGeneral.paquetes} tipo="1"/>
            <DestinosSection id="destinos" data={dataGeneral.destinos} />
            <PackageSection id="tours" data={dataGeneral.toursPrincipales} tipo="0" />
            <PromocionSection id="promociones" data={dataGeneral.destinos} />
            <ContactSection id="contacto" data={dataGeneral.destinos} />
            <BlogSection id="blog" data={dataGeneral.blogs} />
            <TestimoniosSection id="testimonios" data={dataGeneral.tripadvisors} google={dataGeneral.googles}/>
            <MarcasSection id="marcas" data={dataGeneral.destinos} />
        </>
    );
};

export default Home;