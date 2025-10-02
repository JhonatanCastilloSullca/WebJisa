import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import HeroSection from '../HeroSection';

function Hero({ id, data, dataSearch }) {
  const tipo = data?.tipo != null ? Number(data.tipo) : null; // 👈 forzamos número

  return (
    <section id={id} className="h-auto w-full relative">
      {/* Slider de imágenes */}
      {tipo === 0 && Array.isArray(data?.detalles) && (
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          effect="fade"
          modules={[Autoplay, EffectFade]}
          className="w-full"
        >
          {data.detalles.map((img, i) => (
            <SwiperSlide key={img?.id ?? img?.enlace ?? i}>
              <HeroSection
                backgroundImage={img.enlace}
                title={img.titulo}
                description={img.descripcion}
                buttonText={img.text_boton}
                buttonLink={img.accion}
                dataSearch={dataSearch}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Video de fondo */}
      {tipo === 1 && typeof data?.detalles === 'string' && (
        <div className="relative w-full h-[80vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={data.detalles}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}
    </section>
  );
}

export default Hero;