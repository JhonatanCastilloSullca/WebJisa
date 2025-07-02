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

  const { data, isLoading, isError, error } = useApi({ endpoint: 'destinos', method: 'POST', body: { idioma_id: idiomaId, slug: slug, }, });

  if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
  if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
  if (!data || !data.data) return null;

  const destino = data.data.destinos || [];

  const tipo = 1;



  return (
    <>
      <HeroSectionMidle
        backgroundImage={destino.imagen}
        title={destino.nombre}
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