import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ItinerarioIcon from '../assets/icons/ItinerarioIcon';
import HeroSectionMidle from '../componentes/HeroSectionMidle';
import ParrafoContent from '../componentes/layout/ParrafoContent';

const PreguntasFrecuentes = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('tours');

    const categorias = [
        { id: 'tours', label: 'Tours', icon: <ItinerarioIcon size={40} /> },
        { id: 'datos', label: 'Datos personales', icon: <ItinerarioIcon size={40} /> },
        { id: 'recomendaciones', label: 'Recomendaciones', icon: <ItinerarioIcon size={40} /> }
    ];

    const preguntas = {
        tours: [
            { pregunta: "¿Cuánto dura el tour?", respuesta: "El tour tiene una duración aproximada de 3 horas." },
            { pregunta: "¿Qué incluye el tour?", respuesta: "Incluye transporte, guía turístico y entradas a los sitios." },
            { pregunta: "¿Cuál es el punto de encuentro?", respuesta: "El punto de encuentro es en la Plaza Mayor." },
            { pregunta: "¿Se necesita reserva previa?", respuesta: "Sí, es recomendable reservar con al menos 24 horas de anticipación." },
        ],
        datos: [
            { pregunta: "¿Cuáles son los métodos de pago aceptados?", respuesta: "Aceptamos tarjetas de crédito, débito y PayPal." },
            { pregunta: "¿Puedo cancelar mi reserva?", respuesta: "Sí, puedes cancelar hasta 48 horas antes del tour sin costo." },
            { pregunta: "¿Hay descuentos para niños o grupos?", respuesta: "Sí, ofrecemos descuentos para grupos mayores a 5 personas y niños menores de 12 años." },
            { pregunta: "¿Los tours son en varios idiomas?", respuesta: "Sí, contamos con guías en español, inglés y francés." },
        ],
        recomendaciones: [
            { pregunta: "¿Qué ropa debo llevar?", respuesta: "Se recomienda llevar ropa cómoda y calzado adecuado." },
            { pregunta: "¿Es necesario llevar agua?", respuesta: "Sí, es recomendable llevar una botella de agua para mantenerse hidratado." },
            { pregunta: "¿Puedo llevar mi cámara?", respuesta: "Sí, puedes llevar tu cámara para tomar fotos." },
            { pregunta: "¿Qué pasa si llueve?", respuesta: "El tour se realiza con normalidad, recomendamos llevar un impermeable." },
        ],
    };

    return (
        <>
            <HeroSectionMidle
                backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
                title="POLITICA DE PRIVACIDAD"
                description="La fundadora de Jisa Adventure, Felicia Acuña Salas, es una apasionada del turismo y amante de su país, Perú. Gracias a su experiencia como guía oficial de turismo, pudo diseñar experiencias únicas y auténticas para los viajeros."
                buttonText="Ver Tours"
                buttonLink="https://jisaadventure.com/"
            />
            <div className="w-full max-w-4xl mx-auto mt-24 mb-12 px-6">
                <div className="relative flex items-center justify-between">
                    <div className="absolute top-1/3 left-0 right-0 h-1.5 bg-JisaGris -translate-y-1/2 z-0"></div>
                    {categorias.map(({ id, label, icon }) => (
                        <div key={id} className="flex flex-col justify-center items-center z-10 cursor-pointer" onClick={() => setCategoriaActiva(id)}>
                            <div className={`h-20 w-20 rounded-full flex justify-center items-center transition-all duration-300 ${categoriaActiva === id ? 'bg-JisaVerde text-JisaGris' : 'bg-JisaGris text-JisaVerde'}`}>
                                {icon}
                            </div>
                            <span className={`font-bold text-2xl transition-all duration-300 ${categoriaActiva === id ? 'text-JisaVerde' : 'text-JisaGris'}`}>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-24 mb-12 px-6">
                {preguntas[categoriaActiva].map((item, index) => (
                    <Disclosure key={`${categoriaActiva}-${index}`} as="div" className="px-4 py-2 border-2 rounded-md my-4">
                        {({ open }) => (
                            <>
                                <DisclosureButton className="group flex w-full items-center justify-center px-4 py-3 text-left text-3xl font-bold text-JisaGris transition-all duration-300 hover:text-JisaVerde">
                                    {item.pregunta}
                                </DisclosureButton>
                                <DisclosurePanel
                                >
                                    <div className="mt-2 text-sm/5">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="md:col-span-9 col-span-12 h-auto flex flex-col md:items-start px-4">
                                                <ParrafoContent className="text-JisaGris" contenido={item.respuesta} />
                                            </div>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </>
    );
};

export default PreguntasFrecuentes;
