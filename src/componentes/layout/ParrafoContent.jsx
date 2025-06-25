import React from 'react'

const ParrafoContent = ({ contenido, className = "" }) => {
    return (
        <div className={`md:text-left text-center font-light my-4 ${className}`} dangerouslySetInnerHTML={{ __html: contenido }} />
    )
}

export default ParrafoContent