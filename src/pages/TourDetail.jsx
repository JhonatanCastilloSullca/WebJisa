import { useParams } from "react-router-dom";
import HeroSectionTour from "../componentes/HeroSectionTour";
import FootIcon from "../assets/icons/FootIcon";
import SeparatorBar from "../componentes/SeparatorBar";
import IconCategoria from "../componentes/IconCategoria";
import JisaTitleContentVerde from "../componentes/layout/JisaTitleContentVerde";
import HeaderTitle from "../componentes/layout/HeaderTitle";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal";
import ParrafoContent from "../componentes/layout/ParrafoContent";
import MapDotIcon from "../assets/icons/MapDotIcon";
import StickyReserva from "../componentes/StickyReserva";

const TourDetail = () => {
    const { slug } = useParams();
    return (
        <>
            <StickyReserva />
            <div>
                <HeroSectionTour
                    backgroundImage="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                    title="CAMINO INCA"
                    description={`S/. 60 / persona`}
                    buttonText="Ver Tours"
                    buttonLink="https://jisaadventure.com/"
                />
            </div>

            <div className="w-full max-w-7xl mx-auto md:-mt-10 z-30 relative md:px-0 px-6 shadow-md bg-white rounded-lg">
                <div className="container mx-auto py-4">
                    <div className="flex mx-auto justify-center">
                        <IconCategoria icon={FootIcon} title={'Duración'} subtitle={'Fullday'} />
                        <SeparatorBar />
                        <IconCategoria icon={FootIcon} title={'Max Grupo'} subtitle={'12 personas'} />
                        <SeparatorBar />
                        <IconCategoria icon={FootIcon} title={'Tipo tour'} subtitle={'Trekking'} />
                        <SeparatorBar />
                        <IconCategoria icon={FootIcon} title={'Recojo'} subtitle={'en su Hotel'} />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">

                        <div className="flex text-JisaVerde gap-x-2" >
                            <MapDotIcon />
                            <span className="font-semibold">Cusco</span>
                            <span className="font-black">-</span>
                            <span className="font-semibold">Machupicchu</span>
                            <span className="font-black">-</span>
                            <span className="font-semibold">Valle Sagrado</span>
                        </div>
                        <ParrafoContent
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
                        <a
                            href={'#'}
                            className="flex px-4 my-4 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                        >
                            <MapDotIcon />
                            Descargar Brochure
                        </a>
                    </div>
                    <div className="md:col-span-6 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                        <img src="https://picsum.photos/690/390" alt="Jisa-Nosotros-Paquete" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>





        </>
    )
}
export default TourDetail