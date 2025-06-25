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
import { useTranslation } from 'react-i18next'

const TabsSection = ({ tour, dias }) => {
  const { t } = useTranslation()
  return (
    <div className="w-full mx-auto mt-24 mb-12">
      <TabGroup className="w-full">
        <TabList className="flex w-full justify-center bg-JisaGris/5">
          {[
            { label: t('tours_detail.itinerario'), icon: <ItinerarioIcon size={32} /> },
            { label: t('tours_detail.incluye'), icon: <IncludeIcon size={32} /> },
            { label: t('tours_detail.que_llevar'), icon: <MochilaIcon size={32} /> },
            // { label: t('tours_detail.precios'), icon: <PriceIcon size={32} /> },
            { label: t('tours_detail.faqs'), icon: <QuestionIcon size={32} /> },
            // { label: t('tours_detail.alojamiento'), icon: <HotelIcon size={32} /> },
            { label: t('tours_detail.galeria'), icon: <GalleryIcon size={32} /> },
            // { label: t('tours_detail.contactanos'), icon: <ContactIcon size={32} /> }
          ].map((tab, index) => (
            <Tab key={index} className={({ selected }) =>
              `flex flex-col justify-center items-center py-2 px-6 rounded-md transition-colors duration-200 
                            ${selected ? 'bg-white text-JisaGris font-medium' : 'text-[#98a4a8]'}`
            }>
              <span className="text-lg">{tab.label}</span>
              <span className="py-2 px-4">{tab.icon}</span>
            </Tab>
          ))}
        </TabList>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 my-10">
            <div className="md:col-span-8 col-span-12 h-auto flex flex-col md:items-start px-10">
              <TabPanels className="w-full">
                <TabPanel><ItinerarioSection itinerario={tour.itinerarios} dias={dias} /></TabPanel>
                <TabPanel><IncluyeSection incluye={tour.incluyes} noincluye={tour.no_incluyes} /></TabPanel>
                <TabPanel><QueLlevarSection quellevar={tour.recomendaciones} /></TabPanel>
                {/* <TabPanel><PrecioSection precios={tour.precios} /></TabPanel> */}
                <TabPanel><FaqSection faqs={tour.faqs} /></TabPanel>
                {/* <TabPanel><AlojamientoSection alojamientos={tour.alojamiento} /></TabPanel> */}
                <TabPanel><GaleriaTourSection galleryID="tours-gallery" images={tour.galerias} /></TabPanel>
                {/* <TabPanel><ContactoSection titulo={tour.titulo} /></TabPanel> */}
              </TabPanels>
              {/* <MiniGallerySection galeria={tour.galeria} /> */}
            </div>
            {/* <BookNowSection /> */}
          </div>
        </div>
      </TabGroup>
    </div>
  )
}

export default TabsSection
