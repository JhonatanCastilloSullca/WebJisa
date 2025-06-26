import { useTranslation } from "react-i18next"
import GridNumber from "../GridNumber"
import HeaderTitle from "../layout/HeaderTitle"
import SubHeaderTitle from "../layout/SubHeaderTitle"
import RowNumber from "../RowNumber"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"
import ToursCard from "../ToursCard"

const PackageSection = ({ id,data,tipo }) => {
    const { t } = useTranslation()
    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:my-24 my-12 pb-24 mb-12 ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={tipo == 1 ? t('paquetes_destacados.title') : t('tours_destacados.title')} />
                <SubHeaderTitle title={tipo == 1 ? t('paquetes_destacados.description') : t('tours_destacados.description')} />
                <SeparatorBarHorizontal />
            </div>
            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
                <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                    {data.map((tour,index) => (
                        <RowNumber col={4} key={index}>
                            <ToursCard
                                title={tour.tipo.nombre}
                                image={tour.foto_principal}
                                location={tour.ubicaciones.map(u => u.nombre).join(', ')}
                                description={tour.titulo}
                                price="0"
                                dias="7"
                                group={'Min 4'}
                                slug={tour.slug}
                            />
                        </RowNumber>
                    ))}
                </GridNumber>
            </div>
        </div>
    )
}

export default PackageSection