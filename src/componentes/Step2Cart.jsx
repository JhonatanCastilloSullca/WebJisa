import React, { useState }from 'react'
import CardCartPasajero from './CardCartPasajero'
import UserIcon from '../assets/icons/UserIcon'

const Step2Cart = ({ totalItems, handleNext, contact, setContact }) => {
    const [accepted, setAccepted] = useState(false);
    const [tried, setTried] = useState(false);

    const onAcceptChange = (e) => {
        const checked = e.target.checked;
        setAccepted(checked);
        // opcional: guarda también en el objeto contact si quieres enviarlo al backend
        setContact(prev => ({ ...prev, acceptedTerms: checked }));
    };

    const onContinue = () => {
        if (!accepted) {
        setTried(true);
        return;
        }
        handleNext();
    };

    const onChange = (e) => setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
    return (
        <div className="Step2 w-full max-w-7xl mx-auto mb-12 px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col bg-JisaGris/5 rounded-xl p-4 md:p-6">
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <CardCartPasajero key={index} index={index} />
                    ))}

                    <div className="cardCartPasajeroContacto px-4 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <h5 className="text-JisaCyan font-semibold text-xl md:text-2xl">
                                Pasajero de contacto
                            </h5>
                            <div className="flex items-center gap-x-2">
                                <span className="text-JisaVerde font-semibold text-sm md:text-lg">
                                    Pasajero de contacto
                                </span>
                                <div className="h-8 w-8 rounded-full bg-JisaVerde flex justify-center items-center text-JisaCyan">
                                    <UserIcon />
                                </div>
                            </div>
                        </div>

                        <div className="formulario grid grid-cols-12 gap-4">
                            <div className="col-span-6 md:col-span-4">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Nombre</label>
                                <input name="name" value={contact.name} onChange={onChange} type="text" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Apellidos</label>
                                <input name="last_name" value={contact.last_name} onChange={onChange} type="text" className="h-10 w-full rounded-md" />
                            </div>
                            {/* Puedes cambiar “País” a ISO-2 (US, FR, BR...) */}
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">País (ISO-2)</label>
                                <input name="country_code" value={contact.country_code} onChange={onChange} placeholder="PE" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Email</label>
                                <input name="email" value={contact.email} onChange={onChange} type="email" className="h-10 w-full rounded-md" />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label className="font-medium md:text-sm text-xs text-JisaGris">Teléfono</label>
                                <input name="phone" value={contact.phone} onChange={onChange} className="h-10 w-full rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3 px-4 md:px-0">
                    <label htmlFor="term-conditions" className="w-full md:w-auto flex gap-2 items-center cursor-pointer select-none">
                    <input
                        type="checkbox"
                        id="term-conditions"
                        name="term-conditions"
                        checked={accepted}
                        onChange={onAcceptChange}
                        className="h-4 w-4"
                    />
                    <a
                        href='/terminos-condiciones'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-JisaVerde underline font-semibold text-xs md:text-sm whitespace-nowrap"
                        title="Ver Términos y Condiciones"
                    >
                        Términos y Condiciones
                    </a>
                    </label>

                    <div className="w-full md:w-auto flex flex-col items-end gap-1">
                        <button
                            type="button"
                            onClick={onContinue}
                            disabled={!accepted}
                            aria-disabled={!accepted}
                            className={`w-full md:w-auto rounded-xl px-6 py-2 font-bold text-base text-white text-center
                            ${accepted ? 'bg-JisaCyan hover:opacity-95' : 'bg-JisaCyan/60 cursor-not-allowed'}
                            `}
                        >
                            Continuar el pago
                        </button>
                        {tried && !accepted && (
                            <p className="text-xs text-red-600">Debes aceptar los Términos y Condiciones para continuar.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step2Cart