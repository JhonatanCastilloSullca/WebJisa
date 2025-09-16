import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import UserIcon from "../assets/icons/UserIcon";
import PhoneField from "./PhoneField";
import CardCartPasajero from "./CardCartPasajero";
import { useCart } from "../contexts/CartContext";
import { useApiMutation } from "../hooks/useApiMutation";

// Utilidad para inicializar pasajeros opcionales
const makeEmptyPassenger = () => ({
  first_name: "",
  last_name: "",
  mother_last_name: "",
  gender: "",
  doc_type: "",
  doc_number: "",
  phone: "",
  country_code: "",
  email: "",
  birthdate: "",
});

const Step2Cart = ({ totalItems, handleNext, contact, setContact, setOrderId }) => {
  const [accepted, setAccepted] = useState(false);
  const [tried, setTried] = useState(false);
  const [openIndex, setOpenIndex] = useState(0); // 1era tarjeta abierta

  // Carrito
  const { cartItems, subtotal, totalPrice } = useCart();

  // RHF: sólo para el pasajero de contacto
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: contact?.name || "",
      last_name: contact?.last_name || "",
      last_name_mother: contact?.last_name_mother || "",
      email: contact?.email || "",
      phone: contact?.phone || "",
      country_code: contact?.country_code || "PE",
      dial_code: contact?.dial_code || "",
    },
  });
  const { register, handleSubmit, formState: { errors, isValid } } = methods;

  // Pasajeros opcionales (si los quieres enviar ahora)
  const [passengers, setPassengers] = useState(
    () => Array.from({ length: totalItems }, makeEmptyPassenger)
  );

  // Ajusta tamaño del array si cambia la cantidad
  useEffect(() => {
    setPassengers(prev => {
      if (totalItems > prev.length) {
        return [
          ...prev,
          ...Array.from({ length: totalItems - prev.length }, makeEmptyPassenger),
        ];
      }
      if (totalItems < prev.length) {
        return prev.slice(0, totalItems);
      }
      return prev;
    });
  }, [totalItems]);

  // Escribir campos de cada pasajero desde la tarjeta hija
  const handlePassengerChange = (idx, field, value) => {
    setPassengers(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  const toggle = (i) => setOpenIndex(prev => (prev === i ? -1 : i));

  // Mutación para crear la orden (NO dispara sola)
  const {
    mutateAsync: createOrder,
    isLoading: isCreating,
    isError: isCreateError,
    error: createError,
  } = useApiMutation();

  // Mapeo de carrito + contacto + pasajeros → payload de tu API
  const buildPayload = (contactVals) => {
    const items = cartItems.map((it) => ({
      product_id: it.id,                 // o tour_id
      slug: it.slug,
      title: it.titulo,
      qty: Number(it.cantidad || 1),
      unit_price: Number(it.precio || 0),
      subtotal: Number(it.precio || 0) * Number(it.cantidad || 1),
      date_start: it.date_start || it.start || it.fecha_inicio || null,
      date_end: it.date_end || it.end || it.fecha_fin || null,
    }));

    return {
      channel: "web",
      currency: "USD",
      totals: {
        subtotal_usd: Number(subtotal || 0),
        total_usd: Number(totalPrice || 0),
      },
      contact: {
        name: contactVals.name,
        last_name: contactVals.last_name,
        last_name_mother: contactVals.last_name_mother || "",
        email: contactVals.email,
        phone: contactVals.phone,
        country_code: contactVals.country_code, // ISO-2 (PhoneField)
        dial_code: contactVals.dial_code,       // +51 (PhoneField)
        accepted_terms: true,
      },
      passengers, // ⬅️ si no quieres enviarlos ahora, bórralo
      items,
      meta: { source: "tour-detail-step2" },
    };
  };

  // Click → validamos contacto + TyC → POST crear orden → guardamos order_id → next
  const onContinue = handleSubmit(async (vals) => {
    setTried(true);
    if (!accepted) return;
    if (cartItems.length === 0) return;

    const payload = buildPayload(vals);

    try {
      const res = await createOrder({
        endpoint: "orders/create",   // ⬅️ AJUSTA tu ruta
        method: "POST",
        body: payload,
      });

      const orderId = res?.data?.order_id || res?.order_id;
      if (!orderId) throw new Error("No se recibió order_id desde el servidor.");

      // Guarda contacto validado
      setContact((prev) => ({ ...prev, ...vals }));

      // Guardado del order_id
      localStorage.setItem("order_id", orderId);
      setOrderId?.(orderId);

      handleNext();
    } catch (err) {
      // El mensaje amigable ya lo mostramos abajo con createError?.message
      console.error("Error al crear orden:", err);
    }
  });

  return (
    <div className="Step2 w-full max-w-7xl mx-auto mb-12 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col bg-JisaGris/5 rounded-xl p-4 md:p-6">
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

            <FormProvider {...methods}>
              <form className="formulario grid grid-cols-12 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="col-span-6 md:col-span-4">
                  <label className="font-medium md:text-sm text-xs text-JisaGris">
                    Nombre <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Requerido." })}
                    className={`px-3 h-10 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-JisaCyan/40 ${
                      errors.name ? "border-red-400" : "border-transparent"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div className="col-span-6 md:col-span-4">
                  <label className="font-medium md:text-sm text-xs text-JisaGris">
                    Apellido Paterno <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    {...register("last_name", { required: "Requerido." })}
                    className={`px-3 h-10 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-JisaCyan/40 ${
                      errors.last_name ? "border-red-400" : "border-transparent"
                    }`}
                  />
                  {errors.last_name && <p className="text-xs text-red-500 mt-1">{errors.last_name.message}</p>}
                </div>

                <div className="col-span-6 md:col-span-4">
                  <label className="font-medium md:text-sm text-xs text-JisaGris">
                    Apellido Materno
                  </label>
                  <input
                    {...register("last_name_mother")}
                    className="px-3 h-10 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-JisaCyan/40 border-transparent"
                  />
                </div>

                <div className="col-span-12 md:col-span-4">
                  <label className="font-medium md:text-sm text-xs text-JisaGris">
                    Celular <span className="text-red-500 font-bold">*</span>
                  </label>
                  <PhoneField
                    name="phone"
                    nameCountry="country_code"
                    nameDial="dial_code"
                    defaultCountry={(contact?.country_code || "PE").toLowerCase()}
                    requiredMessage="El teléfono es obligatorio"
                    variant="boxed"
                    size="md"
                  />
                </div>

                <div className="col-span-12 md:col-span-3">
                  <label className="font-medium md:text-sm text-xs text-JisaGris">
                    Email <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Requerido.",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido." },
                    })}
                    className={`px-3 h-10 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-JisaCyan/40 ${
                      errors.email ? "border-red-400" : "border-transparent"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </form>
            </FormProvider>
          </div>

          <div className="mb-4 mt-4 px-4 py-3 rounded-md bg-JisaCyan/5 border border-JisaCyan/20 text-JisaGris">
            <p className="text-sm">
              <span className="font-semibold text-JisaCyan">Nota:</span> Los datos de los pasajeros adicionales son
              <b> opcionales</b>. Si no los completas ahora, nuestro equipo se pondrá en contacto más adelante.
            </p>
          </div>

          {Array.from({ length: totalItems }).map((_, index) => (
            <CardCartPasajero
              key={index}
              index={index}
              open={openIndex === index}
              onToggle={() => toggle(index)}
              passenger={passengers[index]}
              onChange={handlePassengerChange}
            />
          ))}
        </div>
      </div>

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
              type="button"
              onClick={onContinue}
              disabled={!accepted || !isValid || isCreating || cartItems.length === 0}
              className={`w-full md:w-auto rounded-xl px-6 py-2 font-bold text-base text-white text-center ${
                (!accepted || !isValid || isCreating || cartItems.length === 0)
                  ? "bg-JisaCyan/60 cursor-not-allowed"
                  : "bg-JisaCyan hover:opacity-95"
              }`}
            >
              {isCreating ? "Creando orden..." : "Continuar el pago"}
            </button>

            {cartItems.length === 0 && (
              <p className="text-xs text-red-600">Tu carrito está vacío.</p>
            )}
            {tried && (!accepted || !isValid) && (
              <p className="text-xs text-red-600">
                {!accepted
                  ? "Debes aceptar los Términos y Condiciones para continuar."
                  : "Completa correctamente los datos del pasajero de contacto."}
              </p>
            )}
            {isCreateError && (
              <p className="text-xs text-red-600">
                {createError?.message || "No se pudo crear la orden. Intenta nuevamente."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Cart;