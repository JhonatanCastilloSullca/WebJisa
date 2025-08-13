
import React, { useState, useRef } from 'react';

const FormularioReservaHTML = ({ onClose }) => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const timeoutRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    const form = e.target;
    const data = new FormData(form);

  await fetch('https://script.google.com/macros/s/AKfycbwqSvsIJb8qMapiBQDYXKE_Nr1u5PIVSSe0BFNiRWkzHodj_tKJJE5A2qjBnJLOHOI/exec', {
      method: 'POST',
      body: data,
    });

    setEnviado(true);
    setEnviando(false);
    form.reset();
    // Ya no se cierra el modal automáticamente
  };

  // Limpiar timeout si el componente se desmonta
  // Ya no se usa timeoutRef ni efecto de limpieza

  return (
    <div>
      {!enviado ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Destino de interés</label>
            <select name="destino" required className="w-full border rounded px-2 py-1" defaultValue="">
              <option value="">Selecciona una opción</option>
              <option value="Camino del Inca">Camino del Inca</option>
              <option value="Machu Picchu">Machu Picchu</option>
              <option value="Tours en Cusco">Tours en Cusco</option>
              <option value="Lima + Huacachina">Lima + Huacachina</option>
              <option value="No estoy seguro, quiero asesoría">No estoy seguro, quiero asesoría</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Mes tentativo de viaje</label>
            <select name="mes" required className="w-full border rounded px-2 py-1" defaultValue="">
              <option value="">Selecciona una opción</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Diciembre">Diciembre</option>
              <option value="2026">2026</option>
              <option value="Aún no lo sé">Aún no lo sé</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input type="text" name="nombre" required className="w-full border rounded px-2 py-1" placeholder="Juan Pérez" />
          </div>
          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input type="tel" name="telefono" required className="w-full border rounded px-2 py-1" placeholder="+51 999 888 777" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="w-full border rounded px-2 py-1" placeholder="correo@ejemplo.com" />
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded ${enviando ? 'bg-gray-400 cursor-not-allowed' : 'bg-JisaCyan text-white'}`}
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="text-green-600 font-semibold text-lg mb-4 animate-bounce">
            ¡Formulario enviado correctamente!
          </div>
          <button
            type="button"
            className="bg-JisaCyan text-white px-6 py-2 rounded"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormularioReservaHTML;
