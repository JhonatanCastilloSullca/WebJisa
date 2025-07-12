import { useTranslation } from "react-i18next"
import GridNumber from "../GridNumber"
import HeaderTitle from "../layout/HeaderTitle"
import SubHeaderTitle from "../layout/SubHeaderTitle"
import RowNumber from "../RowNumber"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"
import ToursCardSalkantay from "../ToursCardSalkantay"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules';

const PackageSection = ({ id, data, tipo }) => {
    const { t } = useTranslation()

    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:my-24 my-12 pb-24 mb-12">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={tipo == 1 ? t('paquetes_destacados.title') : t('tours_destacados.title')} />
                <SubHeaderTitle title={tipo == 1 ? t('paquetes_destacados.description') : t('tours_destacados.description')} />
                <SeparatorBarHorizontal />
            </div>

            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
                {tipo == 1 ? (
                    <Swiper 
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.2 }
                        }}
                    >
                        {data.map((tour, index) => (
                            <SwiperSlide key={index}>
                                <ToursCardSalkantay
                                    title={tour.tipo_categoria.nombre}
                                    image={tour.foto_principal}
                                    location={tour.ubicaciones.map(u => u.nombre).join(', ')}
                                    description={tour.titulo}
                                    price={tour.precio}
                                    resumen={tour.resumen}
                                    dias={tour.itinerarios_count}
                                    group={'Min 4'}
                                    slug={tour.slug}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                        {data.map((tour, index) => (
                            <RowNumber col={4} key={index} className="flex-col">
                                <ToursCardSalkantay
                                    title={tour.tipo_categoria.nombre}
                                    image={tour.foto_principal}
                                    location={tour.ubicaciones.map(u => u.nombre).join(', ')}
                                    description={tour.titulo}
                                    price={tour.precio}
                                    resumen={tour.resumen}
                                    dias={tour.itinerarios_count}
                                    group={'Min 4'}
                                    slug={tour.slug}
                                />
                            </RowNumber>
                        ))}
                    </GridNumber>
                )}
            </div>
        </div>
    )
}

export default PackageSection
