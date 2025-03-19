import React, { useState, useEffect } from "react";
import ParrafoContent from "./layout/ParrafoContent";
import { NavLink } from "react-router-dom";

const MenuHeader = ({ menu }) => {
    const [selectedTour, setSelectedTour] = useState({
        imagen: menu[0]?.imagenPrincipal,
        descripcion: menu[0]?.submenu[0]?.descripcion || "",
    });

    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        const preloadImages = () => {
            const cache = {};
            menu.forEach((item) => {
                cache[item.imagenPrincipal] = new Image();
                cache[item.imagenPrincipal].src = item.imagenPrincipal;

                item.submenu.forEach((subItem) => {
                    cache[subItem.imagen] = new Image();
                    cache[subItem.imagen].src = subItem.imagen;
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
                    <li key={index} className="hoverable hover:text-white">
                        <a href="#" className="relative block py-2 px-4 text-sm lg:text-base font-bold md:text-white text-JisaCyan hover:text-JisaGris">
                            {item.tour}
                        </a>
                        <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl  bg-white  text-JisaCyan ">
                            <div className="container mx-auto w-full flex md:flex-row flex-col justify-between">
                                <ul className="px-4 w-full border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <img
                                        src={selectedTour.imagen}
                                        alt={item.tour}
                                        className="rounded-md h-full object-cover transition-opacity duration-300 opacity-100"
                                    />
                                </ul>
                                <ul
                                    className="w-full md:px-10 px-0 mx-auto"
                                    onMouseLeave={() =>
                                        setSelectedTour({
                                            imagen: item.imagenPrincipal,
                                            descripcion: item.submenu[0]?.descripcion || "",
                                        })
                                    }
                                >
                                    <div className="flex flex-col max-h-60 overflow-y-auto">
                                        <span className="text-2xl text-center font-bold pt-2 pb-4">{item.tour}</span>
                                        <ul className="text-lg flex-col flex gap-y-4">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <NavLink
                                                    to={"tours/machupichu-1-dia"}
                                                    key={subIndex}
                                                    className="border-b border-JisaCyan/50 py-1  cursor-pointer text-base"
                                                    onMouseEnter={() =>
                                                        setSelectedTour({
                                                            imagen: imageCache[subItem.imagen]?.src || subItem.imagen,
                                                            descripcion: subItem.descripcion,
                                                        })
                                                    }
                                                >
                                                    {subItem.titulo}
                                                </NavLink>
                                            ))}
                                        </ul>
                                    </div>
                                </ul>

                                <ul className="w-full px-10 mx-auto">
                                    <div className="flex flex-col">
                                        <span className="text-2xl text-center font-bold">Tours Disponibles</span>
                                        <ParrafoContent className="text-sm text-JisaCyan" contenido={selectedTour.descripcion} />
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuHeader;
