import React from 'react'

const ParrafoContent = ({ contenido, className = "" }) => {
    return (
        <p className={`md:text-left text-center text-JisaGris font-light   py-4 ${className}`}>
            {contenido}
        </p>
    )
}

export default ParrafoContent