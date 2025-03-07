import React from 'react'
import SeparatorBarHorizontal from './SeparatorBarHorizontal'
import JisaTitleContentCyan from './layout/JisaTitleContentCyan'
import ToursLineSection from './ToursLineSection'

const ToursRelacionados = ({ tours }) => {
    return (

        <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
            <SeparatorBarHorizontal />
            <JisaTitleContentCyan contenido={'Tours relacionados'} className="text-2xl" />
            <ToursLineSection tours={tours} />
        </div>
    )
}

export default ToursRelacionados