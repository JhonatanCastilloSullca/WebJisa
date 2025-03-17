import { useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

const ImageGridEnlace = ({ images, icono }) => {
    const lightboxRef = useRef(null);

    useEffect(() => {
        lightboxRef.current = new PhotoSwipeLightbox({
            gallery: "#image-gallery",
            children: "a",
            pswpModule: () => import("photoswipe")
        });
        lightboxRef.current.init();

        return () => {
            lightboxRef.current.destroy();
        };
    }, []);

    return (
        <div id="image-gallery" className="grid md:grid-cols-4 grid-cols-3 gap-10 px-6">
            {icono.map((src, index) => (
                <a
                    key={index}
                    href={images[index]}
                    data-pswp-width="1200"
                    data-pswp-height="800"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1"
                >
                    <img
                        src={src}
                        alt={`img-${index}`}
                        className="w-full rounded-lg opacity-25 hover:opacity-100 transition-opacity duration-300 h-24 object-contain"
                    />
                </a>
            ))}
        </div>
    );
};

export default ImageGridEnlace;