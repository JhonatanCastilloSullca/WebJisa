import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import HeroSection from '../HeroSection';

function Hero({ id, data }) {
    return (
        <div id={id} className="h-auto w-full relative top-0">
            {/* Slider de imágenes */}
            {data?.tipo == 0 && Array.isArray(data.detalles) && (
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {data.detalles.map((img, index) => (
                        <SwiperSlide key={index}>
                            <HeroSection
                                backgroundImage={img.enlace}
                                title="LO MEJOR DE CUSCO ESTÁ ESPERÁNDOTE"
                                description="Comenzaron las reservas para el Camino Inca 2025, separa tu espacio ahora y descubre Machu Picchu en una aventura inolvidable"
                                buttonText="Ver Tours"
                                buttonLink="https://jisaadventure.com/"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Video de fondo */}
            {data?.tipo === 1 && typeof data.detalles === 'string' && (
                <div className="relative w-full h-[80vh] overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        src={data.detalles}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Opcional: superponer contenido
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
                        <h2 className="text-4xl font-bold mb-4">LO MEJOR DE CUSCO ESTÁ ESPERÁNDOTE</h2>
                        <p className="max-w-xl mb-6 px-4">Comenzaron las reservas para el Camino Inca 2025, separa tu espacio ahora y descubre Machu Picchu en una aventura inolvidable</p>
                        <a href="https://jisaadventure.com/" className="bg-white text-black px-6 py-2 rounded-xl font-semibold">Ver Tours</a>
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default Hero;