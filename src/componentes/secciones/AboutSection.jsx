import HeaderTitle from "../layout/HeaderTitle"
import JisaTitleContentVerde from "../layout/JisaTitleContentVerde"
import ParrafoContent from "../layout/ParrafoContent"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"

const AboutSection = ({ id }) => {
    return (
        <div id={id} className="w-full max-w-7xl mx-auto mt-24 mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                    <JisaTitleContentVerde contenido={`JISA ADVENTURE`} />
                    <HeaderTitle title={'Tours a Machu Picchu, Cusco y Perú 2024'} />
                    <SeparatorBarHorizontal />
                    <ParrafoContent className="text-JisaGris"
                        contenido={`La fundadora de Jisa Adventure, Felicia Acuña Salas,
                                es una apasionada del turismo y amante de su país, Perú.
                                Con una visión clara y determinación, decidió crear esta agencia
                                para compartir la belleza y riqueza cultural de Perú con el mundo.
                                Gracias a su experiencia como guía oficial de turismo,
                                pudo diseñar experiencias únicas y auténticas para los
                                viajeros que buscan descubrir la magia de Perú. Hoy en día,
                                Jisa Adventure es reconocida por su excelencia en el servicio
                                y por brindar momentos inolvidables a quienes eligen explorar
                                este hermoso país con nosotros. ¡Únete a la aventura y descubre
                                la historia que inspiró a Felicia a crear Jisa Adventure!`}
                    />
                </div>
                <div className="md:col-span-5 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png" alt="Jisa-Nosotros-Paquete" className="w-full " />
                </div>
            </div>
        </div>
    )
}

export default AboutSection