import React, { useState } from 'react';
import { useApiMutation } from '../hooks/useApiMutation'; // versión .js
import TarjetasMetodos from './TarjetasMetodos';
import InfoIcon from '../assets/icons/InfoIcon';

function genOrderId() {
  return 'ORD-' + Math.random().toString(36).slice(2, 10).toUpperCase();
}

export default function Step3Cart({ totalUSD, contact, onBack }) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [orderId]             = useState(genOrderId());

  const OPENPAY_MERCHANT_ID = import.meta.env.VITE_OPENPAY_MERCHANT_ID;
  const OPENPAY_PUBLIC_KEY  = import.meta.env.VITE_OPENPAY_PUBLIC_KEY;
  const IS_PROD             = import.meta.env.VITE_OPENPAY_PROD === 'true';

  const charge = useApiMutation();

  const handlePay = (e) => {
    e.preventDefault();
    setError(null); setLoading(true);

    if (!window.OpenPay) {
      setLoading(false);
      setError('OpenPay no está cargado. Asegúrate de incluir los scripts en index.html');
      return;
    }

    window.OpenPay.setId(OPENPAY_MERCHANT_ID);
    window.OpenPay.setApiKey(OPENPAY_PUBLIC_KEY);
    window.OpenPay.setSandboxMode(!IS_PROD);

    // Antifraude
    const deviceId = window.OpenPay.deviceData.setup('payment-form', 'deviceIdHiddenFieldName');

    const form = e.currentTarget;

    // Tokenización
    window.OpenPay.token.extractFormAndCreate(form, async (success) => {
      try {
        const tokenId = success.data.id;

        const payload = {
          order_id: orderId,
          amount: Number(totalUSD),
          token_id: tokenId,
          device_session_id: deviceId,
          customer: {
            name: contact?.name || '',
            last_name: contact?.last_name || '',
            email: contact?.email || '',
            phone_number: contact?.phone || '',
            country_code: contact?.country_code || 'PE',
          }
        };

        const data = await charge.mutateAsync({
          endpoint: 'payments/openpay/charge',
          body: payload,
          // baseUrl: import.meta.env.VITE_API_URL, // si ya está en env, no hace falta
        });

        if (data && data.redirect_url) {
          window.location.href = data.redirect_url; // 3DS
          return;
        }

        alert('Pago realizado ✔');
      } catch (err) {
        setError(err?.message || 'Error de pago');
      } finally {
        setLoading(false);
      }
    }, (err) => {
      setLoading(false);
      setError(err?.description || 'Error al tokenizar la tarjeta');
    });
  };

  return (
    <div className="Step3 w-full max-w-7xl mx-auto mb-6 px-4">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-6 bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6">
          <h5 className="text-JisaCyan font-semibold text-xl md:text-2xl">
            Código de reserva: <span className="text-JisaGris px-2 md:px-4">{orderId}</span>
          </h5>
          {/* tu resumen... */}
        </div>

        <div className="col-span-12 md:col-span-6 bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6">
          <div className="flex items-center text-JisaVerde mb-2">
            <InfoIcon />
            <span className="px-2 font-semibold text-xl md:text-2xl">Información de pago</span>
          </div>

          <form id="payment-form" onSubmit={handlePay} className="space-y-3">
            <input data-openpay-card="holder_name" placeholder="Titular" required className="h-10 w-full rounded-md px-3" />
            <input data-openpay-card="card_number" placeholder="Número de tarjeta" required className="h-10 w-full rounded-md px-3" />
            <div className="grid grid-cols-3 gap-3">
              <input data-openpay-card="expiration_month" placeholder="MM" required className="h-10 w-full rounded-md px-3" />
              <input data-openpay-card="expiration_year"  placeholder="YY" required className="h-10 w-full rounded-md px-3" />
              <input data-openpay-card="cvv2"             placeholder="CVV" required className="h-10 w-full rounded-md px-3" />
            </div>

            <input type="hidden" name="deviceIdHiddenFieldName" />

            <div className="flex items-center justify-between">
              <span className="font-semibold text-JisaGris">Total</span>
              <span className="font-bold text-JisaGris">US$ {Number(totalUSD).toFixed(2)}</span>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex gap-3">
              <button type="button" onClick={onBack} className="bg-gray-200 text-gray-700 rounded-xl px-5 py-2">Atrás</button>
              <button type="submit" disabled={loading} className="bg-JisaCyan text-white rounded-xl px-6 py-2 font-bold">
                {loading ? 'Procesando…' : 'Pagar ahora'}
              </button>
            </div>
          </form>

          <div className="mt-4">
            <TarjetasMetodos />
          </div>
        </div>
      </div>
    </div>
  );
}