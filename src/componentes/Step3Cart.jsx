import React, { useMemo, useState } from 'react';
import { useApiMutation } from '../hooks/useApiMutation';
import TarjetasMetodos from './TarjetasMetodos';
import InfoIcon from '../assets/icons/InfoIcon';
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Step3Cart({ totalUSD, contact, onBack, orderId: orderIdProp }) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const navigate = useNavigate();
  const { clearCart } = useCart();

  // 1) Toma el order_id del padre o de localStorage. Si no hay, mostramos aviso.
  const orderId = useMemo(() => {
    return orderIdProp || localStorage.getItem('order_id') || '';
  }, [orderIdProp]);

  const OPENPAY_MERCHANT_ID = import.meta.env.VITE_OPENPAY_MERCHANT_ID;
  const OPENPAY_PUBLIC_KEY  = import.meta.env.VITE_OPENPAY_PUBLIC_KEY;
  const IS_PROD             = import.meta.env.VITE_OPENPAY_PROD === 'true';

  const charge = useApiMutation();

  const handlePay = (e) => {
    e.preventDefault();
    setError(null);

    if (!orderId) {
      setError('No se encontró el código de reserva. Regresa al paso anterior para generarlo.');
      return;
    }

    setLoading(true);

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
    window.OpenPay.token.extractFormAndCreate(
      form,
      async (success) => {
        try {
          const tokenId = success.data.id;

          const payload = {
            order_id: orderId,                   // 👈 usamos el mismo id
            amount: Number(totalUSD),
            token_id: tokenId,
            device_session_id: deviceId,
            customer: {
              name: contact?.name || '',
              last_name: contact?.last_name || '',
              email: contact?.email || '',
              phone_number: contact?.phone || '',
              country_code: contact?.country_code || 'PE',
            },
          };

          const data = await charge.mutateAsync({
            endpoint: 'payments/openpay/charge',
            body: payload,
          });

          if (data && data.redirect_url) {
            window.location.href = data.redirect_url; // 3DS
            return;
          }

          clearCart(); 
          localStorage.removeItem("order_id");
          navigate("/gracias"); 
        } catch (err) {
          setError(err?.message || 'Error de pago');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        setError(err?.description || 'Error al tokenizar la tarjeta');
      }
    );
  };

  return (
    <div className="Step3 w-full max-w-7xl mx-auto mb-6 px-4">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-6 bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6">
          <h5 className="text-JisaCyan font-semibold text-xl md:text-2xl">
            Código de reserva:{' '}
            <span className="text-JisaGris px-2 md:px-4"> JISA-
              {orderId || '—'}
            </span>
          </h5>
          {!orderId && (
            <p className="text-red-600 text-sm mt-2">
              No se encontró la reserva. Por favor vuelve al paso anterior para generarla.
            </p>
          )}
          {/* Aquí puedes renderizar el resumen de items, contacto, etc. */}
        </div>

        <div className="col-span-12 md:col-span-6 bg-JisaGris/5 rounded-xl px-4 md:px-10 py-4 md:py-6">
          <div className="flex items-center text-JisaVerde mb-2">
            <InfoIcon />
            <span className="px-2 font-semibold text-xl md:text-2xl">Información de pago</span>
          </div>

          <form id="payment-form" onSubmit={handlePay} className="space-y-3">
            <input
              data-openpay-card="holder_name"
              placeholder="Titular"
              required
              className="h-10 w-full rounded-md px-3"
            />
            <input
              data-openpay-card="card_number"
              placeholder="Número de tarjeta"
              required
              className="h-10 w-full rounded-md px-3"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={16}
              onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                data-openpay-card="expiration_month"
                placeholder="MM"
                required
                className="h-10 w-full rounded-md px-3"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={2}
                onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
              />
              <input
                data-openpay-card="expiration_year"
                placeholder="YY"
                required
                className="h-10 w-full rounded-md px-3"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={2}
                onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
              />
              <input
                data-openpay-card="cvv2"
                placeholder="CVV"
                required
                className="h-10 w-full rounded-md px-3"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
              />
            </div>

            <input type="hidden" name="deviceIdHiddenFieldName" />

            <div className="flex items-center justify-between">
              <span className="font-semibold text-JisaGris">Total</span>
              <span className="font-bold text-JisaGris">US$ {Number(totalUSD).toFixed(2)}</span>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex gap-3">
              <button type="button" onClick={onBack} className="bg-gray-200 text-gray-700 rounded-xl px-5 py-2">
                Atrás
              </button>
              <button
                type="submit"
                disabled={loading || !orderId}
                className={`rounded-xl px-6 py-2 font-bold text-white ${
                  loading || !orderId ? 'bg-JisaCyan/60 cursor-not-allowed' : 'bg-JisaCyan hover:opacity-95'
                }`}
              >
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