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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ItinerarioIcon from "../assets/icons/ItinerarioIcon";
import IncludeIcon from "../assets/icons/IncludeIcon";
import MochilaIcon from "../assets/icons/MochilaIcon";
import PriceIcon from "../assets/icons/PriceIcon";
import QuestionIcon from "../assets/icons/QuestionIcon";
import GalleryIcon from "../assets/icons/GalleryIcon";
import HotelIcon from "../assets/icons/HotelIcon";
import SeparatorBarHorizontalVerde from "../componentes/SeparatorBarHorizontalVerde";
import ContactIcon from "../assets/icons/ContactIcon";

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
            <div className="w-full mx-auto mt-24 mb-12">

                <TabGroup className={'w-full'}>
                    <TabList className={'flex w-full justify-center bg-JisaGris/5 '}>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md bg-white'}>
                            <span className="font-medium text-xl text-JisaGris">Itinerario</span>
                            <span className="text-JisaGris py-2 px-4"><ItinerarioIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Incluye</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><IncludeIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Que llevar</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><MochilaIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Precios</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><PriceIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">FAQ's</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><QuestionIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Galeria</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><GalleryIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Alojamiento</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><HotelIcon size={48} /></span>
                        </Tab>
                        <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                            <span className="font-medium text-xl text-JisaGris/50">Contactanos</span>
                            <span className="text-JisaGrisTextGray py-2 px-4"><ContactIcon size={48} /></span>
                        </Tab>
                    </TabList>
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-12 gap-4 my-10">
                            <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                                <TabPanels>
                                    <TabPanel>Content 1</TabPanel>
                                    <TabPanel>Content 2</TabPanel>
                                    <TabPanel>Content 3</TabPanel>
                                </TabPanels>
                            </div>
                            <div className="md:col-span-4 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                                <div className="w-full">
                                    <div className="bg-JisaGris px-6 py-4 w-full flex-col flex justify-center items-center text-white rounded-t-md">
                                        <h4 className="font-bold text-3xl">
                                            Reserva ahora
                                        </h4>
                                        <SeparatorBarHorizontalVerde />
                                        <h5 className="font-semibold text-base" >Camino Inca Full Day</h5>
                                        <span className="font-bold text-2xl" >US$ 999.00</span>
                                    </div>
                                    <div className="border-2 border-JisaGrisTextGray/10 bg-white rounded-b-md flex flex-col justify-center items-center">
                                        <span className="font-semibold text-lg text-JisaCyan">Fecha de visita</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabGroup>
            </div >





        </>
    )
}
export default TourDetail