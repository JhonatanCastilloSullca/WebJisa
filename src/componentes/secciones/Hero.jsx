import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import HeroSection from '../HeroSection';

function Hero({ id }) {
    return (
        <div id={id} className="h-auto w-full relative top-0">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <HeroSection
                        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                        title="LO MEJOR DE CUSCO ESTA ESPERANDOTE"
                        description={`Comenzaron las reservas para el Camino Inca 2025, Separa tu espacio ahora y descubre Machu Picchu en una aventura Inolvidable`}
                        buttonText="Ver Tours"
                        buttonLink="https://jisaadventure.com/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSection
                        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                        title="LO MEJOR DE CUSCO ESTA ESPERANDOTE"
                        description={`Comenzaron las reservas para el Camino Inca 2025, Separa tu espacio ahora y descubre Machu Picchu en una aventura Inolvidable`}
                        buttonText="Ver Tours"
                        buttonLink="https://jisaadventure.com/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSection
                        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                        title="LO MEJOR DE CUSCO ESTA ESPERANDOTE"
                        description={`Comenzaron las reservas para el Camino Inca 2025, Separa tu espacio ahora y descubre Machu Picchu en una aventura Inolvidable`}
                        buttonText="Ver Tours"
                        buttonLink="https://jisaadventure.com/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSection
                        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                        title="LO MEJOR DE CUSCO ESTA ESPERANDOTE"
                        description={`Comenzaron las reservas para el Camino Inca 2025, Separa tu espacio ahora y descubre Machu Picchu en una aventura Inolvidable`}
                        buttonText="Ver Tours"
                        buttonLink="https://jisaadventure.com/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSection
                        backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                        title="LO MEJOR DE CUSCO ESTA ESPERANDOTE"
                        description={`Comenzaron las reservas para el Camino Inca 2025, Separa tu espacio ahora y descubre Machu Picchu en una aventura Inolvidable`}
                        buttonText="Ver Tours"
                        buttonLink="https://jisaadventure.com/"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="w-full">
                <div className="max-w-7xl w-full mx-auto">

                </div>
            </div>
        </div>
    )
}

export default Hero