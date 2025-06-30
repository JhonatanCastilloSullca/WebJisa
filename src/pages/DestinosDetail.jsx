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

const idiomaMap = { es: 1, en: 2, br: 3 }
const DestinosDetail = () => {

  const { t } = useTranslation()
  const { slug } = useParams();

  const idiomaId = idiomaMap[t.language] || 1

  const { data, isLoading, isError, error } = useApi({ endpoint: 'tour-slug', method: 'POST', body: { idioma_id: idiomaId, slug: slug, }, });

  if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
  if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
  if (!data || !data.data) return null;

  const tour = data.data.tour || [];

  const tipo = 1;



  return (
    <>
      <HeroSectionMidle
        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
        title="Arequipa"
        description={`La joya blanca del sur Arequipa es un viaje a través de historia, arquitectura y volcanes majestuosos. Conocida como la “Ciudad Blanca”, su centro histórico es un Patrimonio Cultural de la Humanidad lleno de encanto colonial. Desde el impresionante Monasterio de Santa Catalina hasta el imponente Cañón del Colca, hogar del cóndor andino, Arequipa te invita a vivir una experiencia auténtica y diversa. Déjate cautivar por su`}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />
      <div className="w-full max-w-7xl mx-auto  pb-24 mb-12 ">
        <div className="flex-col justify-center flex items-center py-10">
          <HeaderTitle title={tipo == 1 ? t('paquetes_destacados.title') : t('tours_destacados.title')} />
          <SubHeaderTitle title={tipo == 1 ? t('paquetes_destacados.description') : t('tours_destacados.description')} />
          <SeparatorBarHorizontal />
        </div>
        <ToursLineSection tours={tour.relacionados} />
      </div>
    </>
  )
}

export default DestinosDetail