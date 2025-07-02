import ImageGridEnlace from "../ImageGridEnlace";

const CertificadosSection = ({ id }) => {
    const images = [
        {
            icono: "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
            imagen: "https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png",
        },
        {
            icono: "url('/Tripadvisor.webp')",
            imagen: "https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png",
        },
        {
            icono: "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
            imagen: "https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png",
        },
        {
            icono: "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
            imagen: "https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png",
        },
        {
            icono: "url('/Tripadvisor.webp')",
            imagen: "url('/Tripadvisor.webp')",
        },
        {
            icono: "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
            imagen: "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
        }
    ];

    return (
        <div id={id} className="w-full max-w-7xl mx-auto  py-12">
            <ImageGridEnlace
                icono={images.map(img => img.icono)}
                images={images.map(img => img.imagen)}
            />
        </div>
    );
};

export default CertificadosSection;
