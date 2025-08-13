import React, { useEffect, useState } from 'react';
import HeroSectionMidle from '../componentes/HeroSectionMidle';
import { useTranslation } from 'react-i18next';

const API_URL = 'https://sistema.jisaadventure.com/api/terminos-condiciones';

const TerminosCondiciones = () => {
    const { i18n, t } = useTranslation();
    const [contenido, setContenido] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Determinar idiomaId según el idioma actual
    const idiomaId = i18n.language === 'en' ? 2 : 1; // Ajusta según tus valores reales

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `idiomaId=${idiomaId}`,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data && data.data.text && data.data.text.rec_cancel1) {
                    setContenido(data.data.text.rec_cancel1);
                } else {
                    setContenido('No se encontraron términos y condiciones.');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Error al cargar los términos y condiciones.');
                setLoading(false);
            });
    }, [idiomaId]);

    return (
        <>
            <HeroSectionMidle
                backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                title={t('terminos.titulo')}
                description={t('terminos.descripcion')}
                buttonText={t('terminos.boton')}
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className='contenido-text-testimonios'>
                    {loading && <p>Cargando términos y condiciones...</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    {!loading && !error && (
                        <div dangerouslySetInnerHTML={{ __html: contenido }} />
                    )}
                </div>
            </div>
        </>
    );
};

export default TerminosCondiciones;