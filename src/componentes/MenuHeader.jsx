import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

const ChevronDown = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2"
       className={`transition-transform ${className}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2"
       className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const MAX_VISIBLE = 6;

const MenuHeader = ({ menu }) => {
  const [selectedTour, setSelectedTour] = useState({
    imagen: menu[0]?.imagen,
    descripcion: menu[0]?.descripcion || "",
    titulo: menu[0]?.tour || "",
  });

  const [imageCache, setImageCache] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const [activeSlug, setActiveSlug] = useState(null);

  const itemRefs = useRef([]);
  const navRootRef = useRef(null); // ★ nav contenedor para cerrar al salir

  const closeOverlay = () => {
    setOpenIndex(null);
    setActiveSlug(null);
  };

  useEffect(() => {
    const cache = {};
    menu.forEach((item) => {
      if (item.imagen) {
        cache[item.imagen] = new Image();
        cache[item.imagen].src = item.imagen;
      }
      (item.tours || []).forEach((sub) => {
        if (sub.foto_principal) {
          cache[sub.foto_principal] = new Image();
          cache[sub.foto_principal].src = sub.foto_principal;
        }
      });
    });
    setImageCache(cache);
  }, [menu]);

  const computeTopForIndex = (idx) => {
    const el = itemRefs.current[idx];
    if (el && el.getBoundingClientRect) {
      const r = el.getBoundingClientRect();
      return Math.round(r.bottom);
    }
    return 56; // fallback
  };

  // Mantén el overlay pegado y cierra con teclas
  useEffect(() => {
    const updateTop = () => {
      if (openIndex !== null) {
        setOverlayTop(computeTopForIndex(openIndex));
      }
    };
    updateTop();

    // ★ Cerrar al hacer scroll / wheel / touchmove
    const closeOnScroll = () => {
      if (openIndex !== null) closeOverlay();
    };

    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    window.addEventListener("wheel", closeOnScroll, { passive: true });
    window.addEventListener("touchmove", closeOnScroll, { passive: true });

    const onKey = (e) => e.key === "Escape" && closeOverlay();
    window.addEventListener("keydown", onKey);

    // ★ Cerrar si la pestaña pierde foco (opcional pero útil)
    const onVis = () => { if (document.hidden) closeOverlay(); };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", closeOnScroll);
      window.removeEventListener("wheel", closeOnScroll);
      window.removeEventListener("touchmove", closeOnScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex !== null) setActiveSlug(null);
  }, [openIndex]);

  const renderOverlay = (item, index) => {
    if (openIndex !== index) return null;

    const tours = item.tours || [];
    const hasMore = tours.length > MAX_VISIBLE;
    const visibleTours = tours.slice(0, MAX_VISIBLE);

    if (!activeSlug && visibleTours[0]?.slug) {
      setActiveSlug(visibleTours[0].slug);
      setSelectedTour({
        imagen:
          imageCache[visibleTours[0].foto_principal]?.src ||
          visibleTours[0].foto_principal ||
          item.imagen,
        descripcion: visibleTours[0].resumen || "",
        titulo: visibleTours[0].titulo || item.tour || "",
      });
    }

    const moreHref =
      item.enlace ||
      item.to ||
      (item.slug ? `/${item.slug}` : `/${(item.nombre || "").toLowerCase().replace(/\s+/g, "-")}`);

    const baseNombre = (item.nombre || "")
      .replace(/\b(tours?|tour)\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    return ReactDOM.createPortal(
      <>
        {/* Backdrop desde el borde inferior del tab hacia abajo */}
        <div
          className="fixed left-0 right-0 bottom-0 z-[60]"
          style={{ top: overlayTop }}
          onPointerDown={closeOverlay}
          aria-hidden="true"
        />
        {/* Panel blanco */}
        <div
          className="fixed left-0 right-0 z-[70]"
          style={{ top: overlayTop }}
          onMouseLeave={closeOverlay}
        >
          <div className="w-full bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] border-t border-gray-100">
            <div
              className="mx-auto w-full md:max-w-5xl px-4 py-8"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Lista (con separador en desktop) */}
                <div className="md:border-r md:border-gray-300 md:pr-6">
                  <ul className="flex flex-col">
                    {visibleTours.map((sub, i) => {
                      const isActive = activeSlug === sub.slug;
                      return (
                        <li
                          key={sub.slug ?? i}
                          className={`py-2 border-b border-JisaCyan/30 ${isActive ? "bg-white" : ""}`}
                        >
                          <NavLink
                            to={`/${sub.tipo == 1 ? "paquetes" : "tours"}/${sub.slug}`}
                            className="flex items-center justify-between gap-3 text-xs text-black hover:text-JisaCyan"
                            onMouseEnter={() => {
                              setActiveSlug(sub.slug);
                              setSelectedTour({
                                imagen:
                                  imageCache[sub.foto_principal]?.src ||
                                  sub.foto_principal ||
                                  item.imagen,
                                descripcion: sub.resumen || "",
                                titulo: sub.titulo || "",
                              });
                            }}
                            onClick={closeOverlay}
                          >
                            <span className="truncate font-medium">{sub.titulo}</span>
                            {isActive && <ArrowRight className="shrink-0 text-JisaCyan" />}
                          </NavLink>
                        </li>
                      );
                    })}
                    {hasMore && (
                      <li className="pt-3">
                        <NavLink
                          to={moreHref}
                          className="text-xs font-semibold text-JisaCyan hover:underline"
                          onClick={closeOverlay}
                        >
                          Ver todos los {baseNombre || item.nombre}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Descripción (desktop) */}
                <div className="hidden md:block">
                  {selectedTour.titulo && (
                    <h3 className="text-sm font-bold mb-2 uppercase text-JisaCyan">{selectedTour.titulo}</h3>
                  )}
                  <div
                    className="text-xs leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: selectedTour.descripcion || "" }}
                  />
                </div>

                {/* Imagen (desktop) */}
                <div className="hidden md:block">
                  {selectedTour.imagen ? (
                    <img
                      src={selectedTour.imagen}
                      alt={item.nombre}
                      className="rounded-md h-72 w-full object-cover"
                    />
                  ) : (
                    <div className="h-72 w-full rounded-md bg-gray-100" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.body
    );
  };

  return (
    <nav
      ref={navRootRef}
      onMouseLeave={() => {
        // ★ salir del header/menú cierra el overlay (desktop)
        if (openIndex !== null) closeOverlay();
      }}
    >
      <ul className="flex md:flex-row flex-col">
        {menu.map((item, index) => (
          <li
            key={index}
            className="relative group uppercase"
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => {
              if ((item.tours || []).length) {
                const top = computeTopForIndex(index);
                setOverlayTop(top);
                setOpenIndex(index);
              }
            }}
          >
            <button
              type="button"
              aria-haspopup={Array.isArray(item.tours) && item.tours.length > 0 ? "menu" : undefined}
              aria-expanded={openIndex === index}
              onClick={() => {
                if ((item.tours || []).length) {
                  setOverlayTop(computeTopForIndex(index));
                  setOpenIndex(index);
                }
              }}
              onPointerDown={() => {
                if ((item.tours || []).length) {
                  setOverlayTop(computeTopForIndex(index));
                  setOpenIndex(index);
                }
              }}
              className={[
                "relative block py-3 px-3 text-sm lg:text-sm font-semibold text-white hover:text-white",
                "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[6px]",
                "after:h-[3px] after:bg-white after:rounded-full after:w-0",
                "group-hover:after:w-24 after:transition-all after:duration-300",
              ].join(" ")}
            >
              <span className="inline-flex items-center gap-8">
                {item.nombre}
                {Array.isArray(item.tours) && item.tours.length > 0 && (
                  <ChevronDown className="opacity-95 group-hover:rotate-180" />
                )}
              </span>
            </button>

            {renderOverlay(item, index)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
