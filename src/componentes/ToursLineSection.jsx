import React from 'react'
import RowNumber from './RowNumber'
import ToursCardSalkantay from './ToursCardSalkantay'
import ToursCard from './ToursCard'
import GridNumber from './GridNumber'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const ToursLineSection = ({ tours, carrusel = 0 }) => {
if (carrusel == 1) { 
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            }}
        >
            {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
                <ToursCardSalkantay
                title={tour?.tipo_categoria?.nombre}
                image={tour?.foto_principal}
                location={(tour?.ubicaciones ?? []).map(u => u.nombre).join(', ')}
                description={tour?.titulo}
                price={tour?.precio}
                resumen={tour?.resumen}
                dias={tour?.itinerarios_count}
                group="Min 4"
                slug={tour?.slug}
                tipo={tour?.tipo}
                category={tour?.ubicaciones?.[0]?.slug}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    );
  }

  // Lista sin carrusel
  return (
    <GridNumber col={12} className="md:gap-x-11 gap-x-0 pt-4">
      {tours.map((tour) => (
        <RowNumber key={tour.id}>
          <ToursCardSalkantay
            title={tour?.tipo_categoria?.nombre}
            image={tour?.foto_principal}
            location={(tour?.ubicaciones ?? []).map(u => u.nombre).join(', ')}
            description={tour?.titulo}
            price={tour?.precio}
            resumen={tour?.resumen}
            dias={tour?.itinerarios_count}
            group="Min 4"
            slug={tour?.slug}
            tipo={tour?.tipo}
            category={tour?.ubicaciones?.[0]?.slug}
          />
        </RowNumber>
      ))}
    </GridNumber>
  );
};


export default ToursLineSection