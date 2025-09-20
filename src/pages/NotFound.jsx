import { useOutletContext } from "react-router-dom"
import HeroSection from "../componentes/HeroSection"
import HeroSectionMidle from "../componentes/HeroSectionMidle"
import BlogSection from "../componentes/secciones/BlogSection"
import PackageSection from "../componentes/secciones/PackageSection"
import SEO from "../componentes/seo";

const NotFound = () => {
    const { dataGeneral } = useOutletContext(); 
    const blogs = dataGeneral?.blogs || [];
    const paquetes = dataGeneral?.paquetes || [];
    return (
        <>
            <SEO title="404 | No encontrado" robots="noindex, nofollow" />
            <HeroSectionMidle
                backgroundImage='/agencia-de-viaje-cusco-jisaadventure.webp'
                title="404"
                description="Parece que no encontraste lo que buscabas pero te puede interesar"
            />
            
            {paquetes.length > 0 && <PackageSection data={paquetes} tipo="1"/>}
            {blogs.length > 0 && <BlogSection id="blog" data={blogs} />}
        </>
    )
}

export default NotFound