import React from 'react'
import SeparatorBarHorizontal from './SeparatorBarHorizontal'

const HeroSectionTour = ({
    backgroundImage,
    overlayColor = "rgba(0, 0, 0, 0.55)",
    title,
    description,
    buttonText,
    buttonLink
}) => {
    return (
        <div
            className="md:h-[80vh] h-auto bg-cover bg-center relative flex flex-col justify-end items-center text-white text-center p-4 "
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: overlayColor }}
            ></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-7xl w-full flex flex-col gap-y-0 justify-center h-[75%]">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-6 flex flex-col md:items-start items-center justify-center">
                        <h1 className="md:text-7xl text-5xl md:w-full  md:text-left text-center font-black">{title}</h1>
                        <p className="text-xl w-full md:text-left text-center md:pe-72 font-bold">{description}</p>
                        <SeparatorBarHorizontal />
                    </div>
                    <div className="md:col-span-6 flex flex-col md:items-start items-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionTour