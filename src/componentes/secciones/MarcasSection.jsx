import ImageGrid from '../ImageGrid'


const MarcasSection = ({ id }) => {
    const images = [
        "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Tripadvisor.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
    ];
    return (
        <div id={id} className="w-full max-w-7xl mx-auto  ">
            <ImageGrid images={images} />
        </div>
    )
}

export default MarcasSection