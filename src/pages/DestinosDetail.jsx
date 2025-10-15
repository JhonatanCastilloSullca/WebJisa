import HeroSectionTour from '../componentes/HeroSectionTour'
import HeroSectionMidle from '../componentes/HeroSectionMidle'
import ToursRelacionados from '../componentes/ToursRelacionados'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import ToursLineSection from '../componentes/ToursLineSection'
import SeparatorBarHorizontal from '../componentes/SeparatorBarHorizontal'
import JisaTitleContentCyan from '../componentes/layout/JisaTitleContentCyan'
import HeaderTitle from '../componentes/layout/HeaderTitle'
import SubHeaderTitle from '../componentes/layout/SubHeaderTitle'
import SEO from "../componentes/seo";
import Loading from "../componentes/ui/Loading";
import NotFound from "../pages/NotFound";
import Breadcrumbs from "../componentes/ui/Breadcrumbs";

const idiomaMap = { es: 1, en: 2, br: 3 }
const DestinosDetail = () => {

  const { t } = useTranslation()
  const { ubicacion } = useParams();

  const canonicalReal = `https://jisaadventure.com/${ubicacion}`;

  const idiomaId = idiomaMap[t.language] || 1

  const { data, isLoading, isError, error } = useApi({ endpoint: 'destinos', method: 'POST', body: { idioma_id: idiomaId, slug: ubicacion, }, });

  if (isLoading) return <Loading message="Cargando..." />;
   if (isError && error?.status === 404) {
    return (
      <>
        <SEO
          title="404 | Destino no encontrado"
          description="El destino que buscas no existe."
          robots="noindex, nofollow"
          type="website"
          siteName="Jisa Adventure"
          canonical={`https://jisaadventure.com/${ubicacion}`}
        />
        <NotFound />
      </>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
  }

  
  const destino = data?.data?.destinos ?? null;

  const labelUbic = destino?.h1 || destino?.nombre || slugToTitle(ubicacion);
  const breadcrumbItems = [
    { href: "/", label: "Inicio" },
    { href: "", label: labelUbic, current: true },
  ];

  if (!destino || (!Array.isArray(destino.ubicacion_detalles) || destino.ubicacion_detalles.length === 0)) {
    return (
      <>
        <SEO
          title="404 | Destino no encontrado"
          description="El destino que buscas no existe."
          robots="noindex, nofollow"
          type="website"
          siteName="Jisa Adventure"
          canonical={`https://jisaadventure.com/${ubicacion}`}
        />
        <NotFound />
      </>
    );
  }

  const tipo = 1;



  return (
    <>
      <SEO
          title={destino.title}
          description={destino.description}
          robots={destino.robots}
          type="article"
          siteName="Jisa Adventure"
          canonical={destino.canonical ?? canonicalReal}
          keywords={destino.keywords}
      />
      <HeroSectionMidle
        backgroundImage={destino.fotoBanner}
        title={destino.h1}
        description={destino.descripcion}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />
      <div className="w-full max-w-7xl mx-auto  pb-24 mb-12 ">
        <div className="flex-col py-5">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 max-w-7xl mx-auto px-4" />
        </div>
        {destino.ubicacion_detalles.map((destino)=>(
          <div className="flex-col justify-center flex items-center py-1 mb-20" key={destino.id}>
            <HeaderTitle title={destino.titulo} etiqueta="h2" />
            <SubHeaderTitle title={destino.descripcion} />
            <SeparatorBarHorizontal />
            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
              <ToursLineSection tours={destino.tours}  carrusel="1"/>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DestinosDetail