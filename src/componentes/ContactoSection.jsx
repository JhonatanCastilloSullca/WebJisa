import { useTranslation } from "react-i18next"
import FormContactTour from "./FormContactTour"
import JisaTitleContentGris from "./layout/JisaTitleContentGris"
import JisaTitleContentVerde from "./layout/JisaTitleContentVerde"
import SeparatorBarHorizontalVerde from "./SeparatorBarHorizontalVerde"

const ContactoSection = ({ titulo }) => {
    const { t } = useTranslation()
    return (
        <div className="w-full flex flex-col gap-y-2">
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentVerde contenido={t("tours_detail.contactanos")} className="text-2xl" />
            <JisaTitleContentGris
                contenido="¿Listo para descubrir la belleza de Perú? Ponte en contacto con nosotros y hagamos realidad el viaje de tus sueños."
            />
            <FormContactTour tour={titulo} />
        </div>
    )
}

export default ContactoSection