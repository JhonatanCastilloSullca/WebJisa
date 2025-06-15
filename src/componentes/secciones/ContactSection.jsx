import SeparatorBarHorizontal from '../SeparatorBarHorizontal'
import HeaderTitle from '../layout/HeaderTitle'
import FormContact from '../FormContact'
import JisaTitleContentVerde from '../layout/JisaTitleContentVerde'
import { useTranslation } from 'react-i18next'

const ContactSection = ({ id }) => {
    const { t } = useTranslation()

    return (
        <div id={id} className="w-full max-w-7xl mx-auto mt-24 mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle md:px-10 px-6 ">
                    <div className="md:ps-10 md:pe-32 px-4 flex flex-col md:items-start items-center">
                        <SeparatorBarHorizontal />
                        <HeaderTitle title={t('contact_section.title')} />
                        <JisaTitleContentVerde contenido={`¿Listo para descubrir la belleza de Perú? Ponte en contacto con nosotros y hagamos realidad el viaje de tus sueños.`} />
                    </div>
                    <div className="ps-10 pe-10 w-full">
                        <FormContact />
                    </div>
                </div>
                <div className="md:col-span-5 col-span-12 h-auto flex flex-col items-start justify-center align-middle">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png" alt="Jisa-Nosotros-Paquete" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default ContactSection