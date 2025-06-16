import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import GalleriaTours from './GalleriaTours'
import { useTranslation } from 'react-i18next'

const GaleriaTourSection = ({ galleryID, images }) => {
    const { t } = useTranslation()
    return (
        <div className="w-full">
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={t("tours_detail.galeria")} className="text-2xl" />
            <GalleriaTours galleryID={galleryID} images={images} />
        </div>
    )
}

export default GaleriaTourSection