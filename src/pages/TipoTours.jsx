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
import NotFound from "./NotFound";
import Breadcrumbs from "../componentes/ui/Breadcrumbs";

const idiomaMap = { es: 1, en: 2, br: 3 }
const TipoTours = () => {

  const { t } = useTranslation()

  const idiomaId = idiomaMap[t.language] || 1

  const { data, isLoading, isError, error } = useApi({ endpoint: 'tours-tipos', method: 'POST', body: { idioma_id: idiomaId, tipo: 0, }, });

  if (isLoading) return <Loading message="Cargando..." />;
   if (isError && error?.status === 404) {
    return (
      <>
        <SEO
          title="404 | Tours no encontrado"
          description="El tour que buscas no existe."
          robots="noindex, nofollow"
          type="website"
          siteName="Jisa Adventure"
          canonical={`https://jisaadventure.com/tours`}
        />
        <NotFound />
      </>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
  }

  
  const tours = data?.data?.tours ?? null;

  const breadcrumbItems = [
    { href: "/", label: "Inicio" },
    { href: "tours", label: "Tours", current: true },
  ];

  if (!tours) {
    return (
      <>
        <SEO
          title="404 | Tours no encontrado"
          description="El tour que buscas no existe."
          robots="noindex, nofollow"
          type="website"
          siteName="Jisa Adventure"
          canonical={`https://jisaadventure.com/tours`}
        />
        <NotFound />
      </>
    );
  }

  const tipo = 0;

  return (
    <>
      <SEO
          title="Tours en Perú y Cusco, Machu Picchu, Ica"
          description="Viaja por Perú con los mejores tours y paquetes turísticos: Cusco, Machu Picchu, Lago Titicaca, Arequipa, Paracas e Ica. Reserva tu viaje todo incluido."
          robots="index, follow"
          type="article"
          siteName="Jisa Adventure"
          canonical="https://jisaadventure.com/tours"
          keywords="Tours en Perú y Cusco, Machu Picchu, Ica"
      />
      <HeroSectionMidle
        backgroundImage='/agencia-de-viaje-cusco-jisaadventure.webp'
        title="Tours en Perú y Cusco"
        description="Viaja por Perú con los mejores tours y paquetes turísticos: Cusco, Machu Picchu, Lago Titicaca, Arequipa, Paracas e Ica. Reserva tu viaje todo incluido."
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />
      <div className="w-full max-w-7xl mx-auto  pb-24 mb-12 ">
        <div className="flex-col py-5">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 max-w-7xl mx-auto px-4" />
        </div>
        <div className="flex-col justify-center flex items-center py-1">
          <HeaderTitle title={tipo == 1 ? t('paquetes_destacados.title') : t('tours_destacados.title')} />
          <SubHeaderTitle title={tipo == 1 ? t('paquetes_destacados.description') : t('tours_destacados.description')} />
          <SeparatorBarHorizontal />
        </div>
        <ToursLineSection tours={tours} />
      </div>
    </>
  )
}

export default TipoTours