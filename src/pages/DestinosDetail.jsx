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

const idiomaMap = { es: 1, en: 2, br: 3 }
const DestinosDetail = () => {

  const { t } = useTranslation()
  const { ubicacion } = useParams();

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

  if (!destino || (!Array.isArray(destino.tours) || destino.tours.length === 0)) {
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
          canonical={destino.canonical}
          keywords={destino.keywords}
      />
      <HeroSectionMidle
        backgroundImage={destino.imagen}
        title={destino.h1}
        description={destino.descripcion}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />
      <div className="w-full max-w-7xl mx-auto  pb-24 mb-12 ">
        <div className="flex-col justify-center flex items-center py-10">
          <HeaderTitle title={tipo == 1 ? t('paquetes_destacados.title') : t('tours_destacados.title')} />
          <SubHeaderTitle title={tipo == 1 ? t('paquetes_destacados.description') : t('tours_destacados.description')} />
          <SeparatorBarHorizontal />
        </div>
        <ToursLineSection tours={destino.tours} />
      </div>
    </>
  )
}

export default DestinosDetail