import SeparatorBarHorizontal from "./SeparatorBarHorizontal";

const HeroSectionMidle = ({
    backgroundImage,
    overlayColor = "rgba(0, 0, 0, 0.75)",
    title,
    description,
}) => {
    return (
        <div
            className="md:h-[70vh] h-auto bg-cover bg-center relative flex flex-col justify-end items-center text-white text-center p-4 md:py-32 py-16"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: overlayColor }}
            ></div>

            {/* Contenido */}
            <div className="absolute bottom-0 max-w-7xl w-full flex flex-col">
                <div className="grid grid-cols-5 gap-4">
                    <div className="md:col-span-5 col-span-5 flex flex-col md:items-center items-center">
                        <h1 className="md:text-7xl text-3xl md:w-full text-JisaVerde  md:text-center text-center font-bold mb-4">{title}</h1>
                        <SeparatorBarHorizontal />
                        <p className="text-xl pt-6 mb-6 w-full md:text-center text-center">{description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionMidle;
