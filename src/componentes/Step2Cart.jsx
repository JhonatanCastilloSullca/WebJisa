import React, { useEffect, useMemo, useState } from "react";
import { useForm, FormProvider, useFieldArray, useWatch } from "react-hook-form";
import CardCartPasajero from "./CardCartPasajero";
import { useCart } from "../contexts/CartContext";
import { useApiMutation } from "../hooks/useApiMutation";

const makeEmptyPassenger = () => ({
  first_name: "",
  last_name: "",
  mother_last_name: "",
  gender: "",
  doc_type: "",
  doc_number: "",
  phone: "",
  country_code: "PE",
  dial_code: "",
  email: "",
  birthdate: "",
  nationality: "",
  is_contact: false,
});

// 👇 mapeamos el pasajero RHF al shape de `contact` del wizard
const mapPassengerToContact = (p) => ({
  name: p?.first_name || "",
  last_name: (p?.last_name || "").trim(),
  email: p?.email || "",
  phone: p?.phone || "",
  country_code: p?.country_code || "PE",
});

const Step2Cart = ({ totalItems, handleNext, setOrderId, contact, setContact }) => {
  const [accepted, setAccepted] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const { cartItems, subtotal, totalPrice } = useCart();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      passengers: Array.from({ length: totalItems }, makeEmptyPassenger),
      contactIndex: 0,
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = methods;

  const { fields, replace } = useFieldArray({ control, name: "passengers" });

  useEffect(() => {
    const current = getValues("passengers") || [];
    if (totalItems > current.length) {
      const toAdd = Array.from({ length: totalItems - current.length }, makeEmptyPassenger);
      replace([...current, ...toAdd]);
    } else if (totalItems < current.length) {
      replace(current.slice(0, totalItems));
      const ci = getValues("contactIndex") ?? 0;
      if (ci >= totalItems) setValue("contactIndex", Math.max(0, totalItems - 1));
    }
    const ci2 = getValues("contactIndex") ?? 0;
    const ps2 = getValues("passengers") || [];
    ps2.forEach((_, i) => {
      setValue(`passengers.${i}.is_contact`, i === ci2, { shouldDirty: false });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems]);

  const contactIndex = useWatch({ control, name: "contactIndex" });
  const passengers   = useWatch({ control, name: "passengers" });

  const hasContact = useMemo(
    () => Number.isInteger(contactIndex) && contactIndex >= 0 && contactIndex < (passengers?.length || 0),
    [contactIndex, passengers]
  );

  // Mantener exactamente un is_contact = true según contactIndex
  useEffect(() => {
    const ps = getValues("passengers") || [];
    ps.forEach((_, i) => {
      setValue(`passengers.${i}.is_contact`, i === contactIndex, {
        shouldDirty: true,
        shouldValidate: false,
      });
    });
  }, [contactIndex, getValues, setValue]);

  // 🔗 SINCRONIZA el `contact` del wizard con el pasajero principal actual
  useEffect(() => {
    if (!hasContact) return;
    const p = passengers?.[contactIndex];
    if (p && setContact) setContact(mapPassengerToContact(p));
  }, [hasContact, contactIndex, passengers, setContact]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  // API
  const {
    mutateAsync: createOrder,
    isLoading: isCreating,
    isError: isCreateError,
    error: createError,
  } = useApiMutation();

  const buildItemsPayload = () =>
    cartItems.map((it) => ({
      product_id: it.id,
      slug: it.slug,
      title: it.titulo,
      qty: Number(it.cantidad || 1),
      unit_price: Number(it.precio || 0),
      subtotal: Number(it.precio || 0) * Number(it.cantidad || 1),
      date_start: it.date_start || it.start || it.fecha_inicio || null,
      date_end: it.date_end || it.end || it.fecha_fin || null,
    }));

  const onContinue = handleSubmit(async (vals) => {
    if (!accepted || cartItems.length === 0 || !hasContact) return;

    const contactPax = vals.passengers[vals.contactIndex];

    const payload = {
      channel: "web",
      currency: "USD",
      totals: {
        subtotal_usd: Number(subtotal || 0),
        total_usd: Number(totalPrice || 0),
      },
      contact: {
        name: contactPax.first_name,
        last_name: contactPax.last_name,
        last_name_mother: contactPax.mother_last_name || "",
        email: contactPax.email,
        phone: contactPax.phone,
        country_code: contactPax.country_code,
        dial_code: contactPax.dial_code,
        accepted_terms: true,
      },
      passengers: vals.passengers, // cada uno con is_contact true/false
      items: buildItemsPayload(),
      meta: { source: "tour-detail-step2" },
    };

    try {
      const res = await createOrder({
        endpoint: "orders/create",
        method: "POST",
        body: payload,
      });

      const orderId = res?.data?.order_id || res?.order_id;
      if (!orderId) throw new Error("No se recibió order_id desde el servidor.");

      // asegura que el wizard tenga el contacto correcto antes de ir al paso 3
      setContact?.(mapPassengerToContact(contactPax));

      localStorage.setItem("order_id", orderId); // si tu Step3 lo lee de aquí
      setOrderId?.(orderId);
      handleNext();
    } catch (err) {
      console.error("Error al crear orden:", err);
    }
  });

  return (
    <FormProvider {...methods}>
      <form className="Step2 w-full max-w-7xl mx-auto mb-12 px-4 md:px-0" onSubmit={onContinue}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex flex-col bg-JisaGris/5 rounded-xl p-4 md:p-6">
            {fields.map((f, index) => (
              <CardCartPasajero
                key={f.id}
                index={index}
                open={openIndex === index}
                onToggle={() => toggle(index)}
                isContact={contactIndex === index}
                onMarkContact={() => {
                  setValue("contactIndex", index, { shouldDirty: true, shouldValidate: true });
                  setOpenIndex(index);
                  // 🧲 al marcar, también actualizamos `contact` de inmediato
                  const p = getValues(`passengers.${index}`);
                  setContact?.(mapPassengerToContact(p));
                }}
                errors={errors}
              />
            ))}

            <div className="mb-4 mt-4 px-4 py-3 rounded-md bg-JisaCyan/5 border border-JisaCyan/20 text-JisaGris">
              <p className="text-sm">
                <span className="font-semibold text-JisaCyan">Nota:</span> Al pasajero de contacto se envían las notificaciones.
              </p>
            </div>
          </div>
        </div>

        {/* T&C + botón */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center mt-3 gap-3 px-4 md:px-0">
            <label htmlFor="term-conditions" className="w-full md:w-auto flex gap-2 items-center cursor-pointer select-none">
              <input
                type="checkbox"
                id="term-conditions"
                name="term-conditions"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="h-4 w-4"
              />
              <a
                href="/terminos-condiciones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-JisaVerde underline font-semibold text-xs md:text-sm whitespace-nowrap"
                title="Ver Términos y Condiciones"
              >
                Términos y Condiciones
              </a>
            </label>

            <div className="w-full md:w-auto flex flex-col items-start gap-1">
              <button
                type="submit"
                disabled={!accepted || !isValid || isCreating || cartItems.length === 0 || !hasContact}
                className={`w-full md:w-auto rounded-xl px-6 py-2 font-bold text-base text-white text-center ${
                  (!accepted || !isValid || isCreating || cartItems.length === 0 || !hasContact)
                    ? "bg-JisaCyan/60 cursor-not-allowed"
                    : "bg-JisaCyan hover:opacity-95"
                }`}
              >
                {isCreating ? "Creando orden..." : "Continuar el pago"}
              </button>

              {cartItems.length === 0 && <p className="text-xs text-red-600">Tu carrito está vacío.</p>}
              {!hasContact && <p className="text-xs text-red-600">Debes seleccionar un pasajero principal.</p>}
              {isCreateError && (
                <p className="text-xs text-red-600">
                  {createError?.message || "No se pudo crear la orden. Intenta nuevamente."}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Step2Cart;
