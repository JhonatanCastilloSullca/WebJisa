import React from 'react'
import CardCartTour from './CardCartTour'

const ListCartTour = ({ tours, onCantidadChange, onRemove }) => {
    return (
        <div className="flex-col flex gap-y-8">
            {tours.map((tour, index) => (
                <div key={index}>
                    <CardCartTour
                        key={tour.id}
                        tour={tour}
                        cantidad={tour.cantidad}
                        onCantidadChange={onCantidadChange}
                        onRemove={onRemove}
                    />
                    <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
                </div>
            ))}
        </div>
    )
}

export default ListCartTour