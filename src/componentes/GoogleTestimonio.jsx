import DotIcon from "../assets/icons/DotIcon";
import StarIcon from "../assets/icons/StarIcon";

export default function GoogleTestimonio({ review }) {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white">
            {/* Usuario */}
            <div className="flex items-center gap-4">
                <img
                    src="/avatar.png"
                    alt={review.nombre}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <span className="font-semibold text-gray-900 ">
                        {review.nombre}
                    </span>
                    {/* <p className="text-sm text-JisaGris ">
                        {review.contributions} contribuciones
                    </p> */}
                </div>
            </div>

            <div className="mt-4">
                <div className="flex gap-x-2">
                    <div className="text-JisaAmarillo flex">
                        {[...Array(review.estrellas)].map((_, i) => (
                        <StarIcon key={i} size={15} />
                        ))}
                    </div>
                    <p className="text-sm text-JisaGris ">
                        {review.fecha}
                    </p>
                </div>
            </div>
            <div className=" h-[12ch]">
                {/* <h4 className="text-lg font-semibold text-JisaGris ">
                    {review.title}
                </h4> */}

                <p className="mt-2  line-clamp-3 text-JisaGris ">{review.descripcion}</p>
            </div>
        </div>
    );
}
