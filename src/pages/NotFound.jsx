import HeroSection from "../componentes/HeroSection"
import HeroSectionMidle from "../componentes/HeroSectionMidle"
import BlogSection from "../componentes/secciones/BlogSection"
import PackageSection from "../componentes/secciones/PackageSection"

const NotFound = () => {
    return (
        <>
            <HeroSectionMidle
                backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                title="404"
                description="Parece que no encontraste lo que buscabas pero te puede interesar"
            />
            <PackageSection />
            <BlogSection />
        </>
    )
}

export default NotFound