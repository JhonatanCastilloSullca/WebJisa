export default function Loading({ message = "Cargando..." }) {
  return (
    <div
      className="min-h-[60vh] grid place-items-center px-4"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-t-transparent border-cyan-500 animate-spin" />
          {/* Si tienes color de marca, cambia 'border-cyan-500' por 'border-JisaCyan' */}
        </div>

        {/* Mensaje */}
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}