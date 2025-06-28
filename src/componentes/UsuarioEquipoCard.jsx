import React from "react";

const UsuarioEquipoCard = ({ nombre, rol, imagen }) => {
    return (
        <div className="md:col-span-3 col-span-4 h-auto flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 md:w-52 md:h-52 rounded-full bg-JisaVerde flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover" src={imagen} alt={nombre} />
            </div>
            <div className="py-6">
                <span className="block text-JisaCyan font-semibold md:text-lg text-sm">{nombre}</span>
                <span className="block text-JisaGris font-normal md:text-xl text-xs">{rol}</span>
            </div>
        </div>
    );
};

export default UsuarioEquipoCard;
