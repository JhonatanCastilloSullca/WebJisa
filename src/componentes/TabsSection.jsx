import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React from 'react'
import ItinerarioIcon from '../assets/icons/ItinerarioIcon'
import IncludeIcon from '../assets/icons/IncludeIcon'
import MochilaIcon from '../assets/icons/MochilaIcon'
import PriceIcon from '../assets/icons/PriceIcon'
import QuestionIcon from '../assets/icons/QuestionIcon'
import HotelIcon from '../assets/icons/HotelIcon'
import GalleryIcon from '../assets/icons/GalleryIcon'
import ContactIcon from '../assets/icons/ContactIcon'
import ItinerarioSection from './ItinerarioSection'
import IncluyeSection from './IncluyeSection'
import QueLlevarSection from './QueLlevarSection'
import PrecioSection from './PrecioSection'
import FaqSection from './FaqSection'
import AlojamientoSection from './AlojamientoSection'
import GaleriaTourSection from './GaleriaTourSection'
import ContactoSection from './ContactoSection'
import MiniGallerySection from './MiniGallerySection'
import BookNowSection from './BookNowSection'

const TabsSection = ({ tour }) => {
    return (
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
                        <span className="font-medium text-xl text-JisaGris/50">Alojamiento</span>
                        <span className="text-JisaGrisTextGray py-2 px-4"><HotelIcon size={48} /></span>
                    </Tab>
                    <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                        <span className="font-medium text-xl text-JisaGris/50">Galeria</span>
                        <span className="text-JisaGrisTextGray py-2 px-4"><GalleryIcon size={48} /></span>
                    </Tab>
                    <Tab className={'flex flex-col justify-center items-center py-2 px-6 rounded-md '}>
                        <span className="font-medium text-xl text-JisaGris/50">Contactanos</span>
                        <span className="text-JisaGrisTextGray py-2 px-4"><ContactIcon size={48} /></span>
                    </Tab>
                </TabList>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4 my-10">
                        <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start px-10 ">
                            <TabPanels className={`w-full`}>
                                <TabPanel>
                                    <ItinerarioSection itinerario={tour.itinerario} />
                                </TabPanel>
                                <TabPanel className={''}>
                                    <IncluyeSection incluye={tour.incluye} noincluye={tour.noincluye} />
                                </TabPanel>
                                <TabPanel className={''}>
                                    <QueLlevarSection quellevar={tour.quellevar} />
                                </TabPanel>
                                <TabPanel className={``}>
                                    <PrecioSection precios={tour.precios} />
                                </TabPanel>
                                <TabPanel className={``}>
                                    <FaqSection faqs={tour.faqs} />
                                </TabPanel>
                                <TabPanel className="w-full">
                                    <AlojamientoSection alojamientos={tour.alojamiento} />
                                </TabPanel>
                                <TabPanel className={``}>
                                    <GaleriaTourSection galleryID="tours-gallery" images={tour.galeria} />
                                </TabPanel>
                                <TabPanel className={``}>
                                    <ContactoSection titulo={tour.titulo} />
                                </TabPanel>
                            </TabPanels>
                            <MiniGallerySection galeria={tour.galeria} />
                        </div>
                        <BookNowSection />
                    </div>
                </div>
            </TabGroup>
        </div >
    )
}

export default TabsSection