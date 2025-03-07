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
                        title={tour.title}
                        image={tour.image}
                        location={tour.location}
                        description={tour.description}
                        price={tour.price}
                        dias={tour.dias}
                        group={tour.group}
                    />
                </RowNumber>
            ))}
        </GridNumber>
    )
}

export default ToursLineSection