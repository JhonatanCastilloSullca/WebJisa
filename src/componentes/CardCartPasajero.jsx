import React, { useEffect, useRef } from "react";
import CountrySelect from "./CountrySelect";

const Chevron = ({ open }) => (
  <svg className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.17l-4.2 3.33a.75.75 0 01-.92 0l-4.2-3.33a.75.75 0 01-.09-1.16z" clipRule="evenodd"/>
  </svg>
);

const GENDER_OPTS = [
  { value: "", label: "Selecciona" },
  { value: "M", label: "MASCULINO" },
  { value: "F", label: "FEMENINO" },
];

const DOC_OPTS = [
  { value: "DNI", label: "DNI" },
  { value: "PASAPORTE", label: "Pasaporte" },
  { value: "CARNET E.", label: "Carné de extranjería" },
];

const baseInput =
  "h-10 w-full rounded-md border border-gray-200 focus:border-JisaCyan focus:ring-1 focus:ring-JisaCyan/30";

export default function CardCartPasajero({
  index,
  open,
  onToggle,
  passenger = {},
  onChange, // (idx, field, value) => void
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (open && ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [open]);

  const setField = (field) => (e) =>
    onChange?.(index, field, e.target.value);

  return (
    <div ref={ref} className="mb-3 card-cart-pasajero">
      {/* Header */}
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full group">
        <div
          className={`flex items-center justify-between gap-4 rounded-xl border
                      bg-JisaCyan px-4 py-3 transition
                      ${open ? "border-JisaCyan/40 shadow-sm" : "border-gray-200 hover:border-JisaCyan/40 hover:shadow-sm"}`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-JisaVerde text-black font-bold">
              {index + 1}
            </span>
            <div className="min-w-0">
              <div className="text-white font-semibold md:text-xl">Información del pasajero</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Chevron open={open} />
          </div>
        </div>
      </button>

      {/* Body */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-4 pb-2">
            <div className="grid grid-cols-12 gap-4">
              {/* Nombre */}
              <div className="col-span-12 md:col-span-4">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Nombre <span className="text-red-500 font-bold">*</span></label>
                <input
                  className={baseInput}
                  value={passenger.first_name || ""}
                  onChange={setField("first_name")}
                />
              </div>

              {/* Apellido paterno */}
              <div className="col-span-12 md:col-span-3">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Apellido Paterno <span className="text-red-500 font-bold">*</span></label>
                <input
                  className={baseInput}
                  value={passenger.last_name || ""}
                  onChange={setField("last_name")}
                />
              </div>

              {/* Apellido materno */}
              <div className="col-span-12 md:col-span-3">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Apellido Materno</label>
                <input
                  className={baseInput}
                  value={passenger.mother_last_name || ""}
                  onChange={setField("mother_last_name")}
                />
              </div>

              {/* Género (SELECT) */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Género <span className="text-red-500 font-bold">*</span></label>
                <select
                  className={baseInput}
                  value={passenger.gender || ""}
                  onChange={setField("gender")}
                >
                  {GENDER_OPTS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tipo de documento (SELECT) */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Tipo de documento <span className="text-red-500 font-bold">*</span></label>
                <select
                  className={baseInput}
                  value={passenger.doc_type || ""}
                  onChange={setField("doc_type")}
                >
                  {DOC_OPTS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nº documento */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">N° Documento <span className="text-red-500 font-bold">*</span></label>
                <input
                  className={baseInput}
                  value={passenger.doc_number || ""}
                  onChange={setField("doc_number")}
                />
              </div>

              {/* Nº documento */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">País <span className="text-red-500 font-bold">*</span></label>
                <CountrySelect
                  value={passenger.country_code || ""}
                  onChange={(code) => onChange?.(index, "country_code", code)}
                  lang="es"
                />
              </div>

              {/* Celular */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Celular </label>
                <input
                  className={baseInput}
                  value={passenger.phone || ""}
                  onChange={setField("phone")}
                />
              </div>

              {/* Email */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Email</label>
                <input
                  type="email"
                  className={baseInput}
                  value={passenger.email || ""}
                  onChange={setField("email")}
                />
              </div>

              {/* Fecha nacimiento */}
              <div className="col-span-12 md:col-span-2">
                <label className="block text-xs md:text-sm text-JisaGris mb-1">Fecha de nacimiento <span className="text-red-500 font-bold">*</span></label>
                <input
                  type="date"
                  className={baseInput}
                  value={passenger.birthdate || ""}
                  onChange={setField("birthdate")}
                />
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}