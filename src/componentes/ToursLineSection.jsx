import React from 'react'
import RowNumber from './RowNumber'
import ToursCard from './ToursCard'
import GridNumber from './GridNumber'

const ToursLineSection = ({ tours }) => {

    return (
        <GridNumber col={12} className="md:gap-x-11 gap-x-0 pt-4">
            {tours.map((tour) => (
                <RowNumber key={tour.id}>
                    <ToursCard
                        title={tour.tipo_categoria.nombre}
                        image={tour.foto_principal}
                        location={tour.ubicaciones.map(u => u.nombre).join(', ')}
                        description={tour.titulo}
                        price={tour.precio}
                        dias="7"
                        group={'Min 4'}
                        slug={tour.slug}
                    />
                </RowNumber>
            ))}
        </GridNumber>
    )
}

export default ToursLineSection