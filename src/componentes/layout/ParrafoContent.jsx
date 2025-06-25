import React from 'react'

const ParrafoContent = ({ contenido, className = "" }) => {
    return (
        <p className={`md:text-left text-center  font-light my-4 ${className}`}>
            <div dangerouslySetInnerHTML={{ __html: contenido }} />
        </p>
    )
}

export default ParrafoContent