import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // mantiene la grilla
import { addDays, isAfter, isBefore, isSameDay, startOfDay } from "date-fns";
import { useTranslation } from "react-i18next";
import "./daypicker-overrides.css";

const toStr  = d => (d ? new Date(d).toISOString().slice(0,10) : "");
const toDate = s => (s ? new Date(s + "T00:00:00") : undefined);

/**
 * DateRangePicker (rango fijo dibujado con modifiers)
 * - fixedDays: p.ej. 2 ó 4 (default 2)
 * - value: { start, end } (YYYY-MM-DD)
 * - onChange: ({start,end}) => void
 * NO usa mode="range" para que el día final NO quede “selected”.
 */
export default function DateRangePicker({ fixedDays = 2, value, onChange }) {
  const { t } = useTranslation();
  const minStart = startOfDay(addDays(new Date(), 1)); // solo desde pasado mañana

  const start = value?.start ? toDate(value.start) : undefined;
  const end   = start ? addDays(start, Math.max(1, fixedDays) - 1) : undefined;

  // Modifiers: pintamos la franja nosotros
  const modifiers = {
    startDay: (day) => (start ? isSameDay(day, start) : false),
    inRange:  (day) => {
      if (!start || !end) return false;
      const d = startOfDay(day);
      // sombrear todos los días desde el inicio HASTA EL FINAL, excluyendo el inicio
      return (isAfter(d, start) || isSameDay(d, start)) && (isBefore(d, end) || isSameDay(d, end)) && !isSameDay(d, start);
    },
    disabled: (day) => isBefore(startOfDay(day), minStart), // deshabilita hoy y pasado
  };

  return (
    <div className="p-4 flex flex-col items-center pt-4">
      <span className="font-semibold text-lg text-JisaCyan">
        {t("tours_detail.fecha_visita")}
      </span>

      <DayPicker
        mode="single"                 // 👈 solo seleccionamos el INICIO
        selected={start}
        onSelect={(day) => {
          if (!day) { onChange?.({ start: "", end: "" }); return; }
          if (isBefore(startOfDay(day), minStart)) return;
          const s = startOfDay(day);
          const e = addDays(s, Math.max(1, fixedDays) - 1);
          onChange?.({ start: toStr(s), end: toStr(e) });
        }}
        showOutsideDays
        weekStartsOn={1}
        disabled={modifiers.disabled}
        modifiers={modifiers}
        modifiersClassNames={{
          // inicio en azul sólido (usamos la clase de "selected")
          startDay: "is-start",

          // toda la franja (incluido el último día) como intermedio/sombra
          inRange: "as-middle",
        }}
        className="rdp mx-auto text-sm"
      />
    </div>
  );
}
