
const PromocionSection = ({ id }) => {
    return (
        <div
            id={id}
            className="w-full h-full relative mx-auto  bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url("/agencia-de-viaje-cusco-jisaadventure.webp")`,
            }}
        >
            <div className="relative inset-0 bg-black/75 flex items-center justify-center py-32">
                <div className="w-full max-w-5xl mx-auto px-8 md:px-20 lg:px-40 text-center">
                    <div className="flex flex-col justify-center items-center gap-y-8">
                        <span className="font-bold text-3xl md:text-5xl text-white">
                            ¡Aprovecha nuestras ofertas especiales y ahorra en tu próximo viaje a Machu Picchu!
                        </span>
                        <a
                            href='#'
                            className="px-12 py-4 mt-10 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                        >
                            Comunicate con un Asesor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromocionSection