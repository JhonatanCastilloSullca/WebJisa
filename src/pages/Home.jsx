import { lazy, Suspense } from "react"
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
import SEO from "../componentes/seo";

function Home({ dataGeneral }) {
    return (
        <>
            <SEO
                title={dataGeneral.inicio.title}
                description={dataGeneral.inicio.description}
                robots={dataGeneral.inicio.robots}
                type="article"
                siteName="Jisa Adventure"
                canonical={dataGeneral.inicio.canonical ?? 'https://jisaadventure.com'}
                keywords={dataGeneral.inicio.keywords}
            />
            {/* <FloatingMenu page="home" /> */}
            <section className="relative">
                <Hero id="hero" data={dataGeneral.slider} />
                 <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2
                  bottom-3 md:bottom-8 w-[min(92vw,900px)] px-4 z-[1200]">
                    <SearchBar id="search" data={dataGeneral.tours} />
                </div>
            </section>
            <Suspense>
                <AboutSection id="about" data={dataGeneral.nosotros} />
                <PackageSection id="packages" data={dataGeneral.paquetes} tipo="1" />
                <DestinosSection id="destinos" data={dataGeneral.destinos} />
                <PackageSection id="tours" data={dataGeneral.toursPrincipales} tipo="0" />
                <PromocionSection id="promociones" data={dataGeneral.destinos} />
                <ContactSection id="contacto" data={dataGeneral.destinos} />
                <BlogSection id="blog" data={dataGeneral.blogs} />
                <TestimoniosSection id="testimonios" data={dataGeneral.tripadvisors} google={dataGeneral.googles} totalTripadvisor={dataGeneral.totalTripadvisor} totalGoogle={dataGeneral.totalGoogle}/>
                <MarcasSection id="marcas" data={dataGeneral.destinos} />
            </Suspense>
        </>
    );
};

export default Home;