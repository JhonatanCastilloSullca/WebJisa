import React, { useState, useEffect } from "react";
import ParrafoContent from "./layout/ParrafoContent";
import { NavLink } from "react-router-dom";

const MenuHeader = ({ menu }) => {
    const [selectedTour, setSelectedTour] = useState({
        imagen: menu[0]?.imagen,
        descripcion: menu[0]?.descripcion || "",
    });

    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        const preloadImages = () => {
            const cache = {};
            menu.forEach((item) => {
                cache[item.imagen] = new Image();
                cache[item.imagen].src = item.imagen;

                item.tours.forEach((subItem) => {
                    cache[subItem.foto_principal] = new Image();
                    cache[subItem.foto_principal].src = subItem.foto_principal;
                });
            });
            setImageCache(cache);
        };
        preloadImages();
    }, [menu]);

    return (
        <nav>
            <ul className="flex md:flex-row flex-col">
                {menu.map((item, index) => (
                    <li key={index} className="hoverable hover:text-JisaCyan uppercase">
                        <a href="#" className="relative block py-2 px-0 text-sm lg:text-sm font-semibold md:text-black text-black  hover:text-JisaCyan">
                            {item.nombre}
                        </a>
                        <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl  bg-white font-semibold md:text-black text-black">
                            <div className="container mx-auto w-full flex md:flex-row flex-col justify-between">
                                <ul className="px-4 w-full border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 md:block hidden place-items-center">
                                    <img
                                        src={selectedTour.imagen}
                                        alt={item.nombre}
                                        className="rounded-md h-64 object-cover transition-opacity duration-300 opacity-100"
                                    />
                                </ul>
                                <ul
                                    className="w-full md:px-10 px-0 mx-auto"
                                    onMouseLeave={() =>
                                        setSelectedTour({
                                            imagen: item.imagen,
                                            descripcion: item.tours?.[0]?.resumen || "",
                                        })
                                    }

                                >
                                    <div className="flex flex-col max-h-60 overflow-y-auto">
                                        <span className="text-2xl text-center font-bold pt-2 pb-4">{item.tour}</span>
                                        <ul className="text-lg flex-col flex gap-y-4">
                                            {item.tours.map((subItem, subIndex) => (
                                                <NavLink
                                                    to={`/tours/${subItem.slug}`}
                                                    key={subIndex}
                                                    className="border-b border-JisaCyan/50 py-1  cursor-pointer text-xs text-black hover:text-JisaCyan"
                                                    onMouseEnter={() =>
                                                        setSelectedTour({
                                                            imagen: imageCache[subItem.imagen]?.src || subItem.foto_principal,
                                                            descripcion: subItem.resumen,
                                                        })
                                                    }
                                                >
                                                    {subItem.titulo}
                                                </NavLink>
                                            ))}
                                        </ul>
                                    </div>
                                </ul>

                                {/* <ul className="w-full px-10 mx-auto md:block hidden"> */}
                                    {/* <div className="flex flex-col"> */}
                                        {/* <span className="text-2xl text-center font-bold">Tours Disponibles</span> */}
                                        {/* <ParrafoContent className="text-sm text-JisaCyan" contenido={selectedTour.descripcion} /> */}
                                    {/* </div> */}
                                {/* </ul> */}
                                
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuHeader;
