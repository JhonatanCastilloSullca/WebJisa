import React from 'react'
import HeroSectionMidle from '../componentes/HeroSectionMidle'
import { useTranslation } from "react-i18next";
import { useApi } from "../hooks/useApi";


const idiomaMap = { es: 1, en: 2, br: 3 }

const TerminosCondiciones = () => {
    const { t } = useTranslation()

    const idiomaId = idiomaMap[t.language] || 1
    
    const { data, isLoading, isError, error } = useApi({ endpoint: 'terminos-condiciones', method: 'POST', body: { idioma_id: idiomaId }, });
    if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    if (!data || !data.data) return null;
    const text=data.data.text.rec_cancel1;
    return (

        <>
            <HeroSectionMidle
                backgroundImage='/agencia-de-viaje-cusco-jisaadventure.webp'
                title="TERMINOS Y CONDICIONES"
                description={``}
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div
                    className="contenido-text-testimonios" 
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </>
    )
}

export default TerminosCondiciones