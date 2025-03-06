import StarIcon from "../assets/icons/StarIcon";

const HotelCard = ({ name, image, description, stars }) => {
    return (
        <div
            className="group w-full h-28 flex flex-col bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden transition-all duration-300"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Capa de fondo para el efecto de hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

            {/* Contenido del hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex mt-2">
                    {Array.from({ length: stars }).map((_, index) => (
                        <StarIcon key={index} size={20} className="text-yellow-400" />
                    ))}
                </div>
                {name}
            </div>
        </div>
    );
};

export default HotelCard;
