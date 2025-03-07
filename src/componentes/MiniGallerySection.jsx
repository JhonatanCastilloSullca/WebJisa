import React from 'react'

const MiniGallerySection = ({ galeria }) => {
    return (
        <>
            <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
            <div className="w-full flex justify-center gap-x-4 items-center py-4">
                {galeria.slice(0, 4).map((img, index) => (
                    <img
                        key={index}
                        src={img.largeURL}
                        alt={`Jisa-Nosotros-Paquete-${index}`}
                        className="w-auto h-16 rounded-lg"
                    />
                ))}
            </div>
        </>
    )
}

export default MiniGallerySection