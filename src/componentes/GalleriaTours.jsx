import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react'
import 'photoswipe/style.css';


const GalleriaTours = (props) => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery grid grid-cols-3 max-w-6xl gap-6 mx-auto py-20 " id={props.galleryID}>
            {props.images.map((image, index) => (
                <a
                    className='rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-all max-h-52'
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={props.galleryID + '-' + index}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={image.largeURL} alt="" className='w-full h-full object-cover' />
                </a>
            ))}
        </div>
    );
}

export default GalleriaTours