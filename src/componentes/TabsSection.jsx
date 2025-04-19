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
      <TabGroup className="w-full">
        <TabList className="flex w-full justify-center bg-JisaGris/5">
          {[
            { label: "Itinerario", icon: <ItinerarioIcon size={48} /> },
            { label: "Incluye", icon: <IncludeIcon size={48} /> },
            { label: "Que llevar", icon: <MochilaIcon size={48} /> },
            { label: "Precios", icon: <PriceIcon size={48} /> },
            { label: "FAQ's", icon: <QuestionIcon size={48} /> },
            { label: "Alojamiento", icon: <HotelIcon size={48} /> },
            { label: "Galeria", icon: <GalleryIcon size={48} /> },
            { label: "Contactanos", icon: <ContactIcon size={48} /> }
          ].map((tab, index) => (
            <Tab key={index} className={({ selected }) =>
              `flex flex-col justify-center items-center py-2 px-6 rounded-md transition-colors duration-200 
                            ${selected ? 'bg-white text-JisaGris font-medium' : 'text-[#98a4a8]'}`
            }>
              <span className="text-xl">{tab.label}</span>
              <span className="py-2 px-4">{tab.icon}</span>
            </Tab>
          ))}
        </TabList>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 my-10">
            <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start px-10">
              <TabPanels className="w-full">
                <TabPanel><ItinerarioSection itinerario={tour.itinerario} /></TabPanel>
                <TabPanel><IncluyeSection incluye={tour.incluye} noincluye={tour.noincluye} /></TabPanel>
                <TabPanel><QueLlevarSection quellevar={tour.quellevar} /></TabPanel>
                <TabPanel><PrecioSection precios={tour.precios} /></TabPanel>
                <TabPanel><FaqSection faqs={tour.faqs} /></TabPanel>
                <TabPanel><AlojamientoSection alojamientos={tour.alojamiento} /></TabPanel>
                <TabPanel><GaleriaTourSection galleryID="tours-gallery" images={tour.galeria} /></TabPanel>
                <TabPanel><ContactoSection titulo={tour.titulo} /></TabPanel>
              </TabPanels>
              <MiniGallerySection galeria={tour.galeria} />
            </div>
            <BookNowSection />
          </div>
        </div>
      </TabGroup>
    </div>
  )
}

export default TabsSection
