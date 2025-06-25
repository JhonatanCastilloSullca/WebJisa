import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useState } from 'react';
import 'photoswipe/style.css';

const GalleriaTours = ({ id, images }) => {
    const [imagesWithSize, setImagesWithSize] = useState([]);

    useEffect(() => {
        const loadImageSizes = async () => {
            const results = await Promise.all(
                images.map(image =>
                    new Promise(resolve => {
                        const img = new Image();
                        img.src = image.ruta;
                        img.onload = () => {
                            resolve({
                                ...image,
                                width: img.naturalWidth,
                                height: img.naturalHeight
                            });
                        };
                    })
                )
            );
            setImagesWithSize(results);
        };

        loadImageSizes();
    }, [images]);

    useEffect(() => {
        if (!imagesWithSize.length) return;

        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + id,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, [imagesWithSize]);

    return (
        <div className="pswp-gallery grid grid-cols-3 max-w-6xl gap-6 mx-auto py-20" id={id}>
            {imagesWithSize.map((image, index) => (
                <a
                    key={id + '-' + index}
                    href={image.ruta}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-all max-h-52"
                >
                    <img src={image.ruta} alt="" className="w-full h-full object-cover" />
                </a>
            ))}
        </div>
    );
};

export default GalleriaTours;
