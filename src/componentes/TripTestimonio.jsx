import DotIcon from "../assets/icons/DotIcon";

export default function TripadvisorReview({ review }) {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white">
            {/* Usuario */}
            <div className="flex items-center gap-4">
                <img
                    src={review.imagen}
                    alt={review.nombre}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-gray-900 ">
                        {review.nombre}
                    </h3>
                    <p className="text-sm text-JisaGris ">
                        {review.contribuciones}
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <div className="text-JisaCyan flex gap-0">
                    {[...Array(review.estrellas)].map((_, i) => (
                        <DotIcon key={i} size={20} />
                    ))}
                </div>
                
            </div>
            <div className=" h-[12ch]">
                {/* <h4 className="text-lg font-semibold text-JisaGris ">
                    {review.title}
                </h4> */}
                <p className="text-sm text-JisaGris ">
                    {review.fecha}
                </p>
                <p className="mt-2  line-clamp-3 text-JisaGris ">{review.descripcion}</p>
            </div>
        </div>
    );
}
