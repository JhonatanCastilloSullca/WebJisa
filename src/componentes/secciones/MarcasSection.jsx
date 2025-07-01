import ImageGrid from '../ImageGrid'


const MarcasSection = ({ id }) => {
    const images = [
        "Ministerio_de_Comercio_Exterior_y_Turismo.webp",
        "/Tripadvisor.webp",
        "/Gercetur.webp",
    ];
    return (
        <div id={id} className="w-full max-w-7xl mx-auto  ">
            <ImageGrid images={images} />
        </div>
    )
}

export default MarcasSection