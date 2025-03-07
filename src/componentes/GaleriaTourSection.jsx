import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import GalleriaTours from './GalleriaTours'

const GaleriaTourSection = ({ galleryID, images }) => {
    return (
        <div className="w-full">
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido="Galería" className="text-2xl" />
            <GalleriaTours galleryID={galleryID} images={images} />
        </div>
    )
}

export default GaleriaTourSection