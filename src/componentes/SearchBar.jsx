import { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ id, data = [] }) => {
  const tours = Array.isArray(data) ? data : [];
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getSuggestions = (val) => {
    const q = val.trim().toLowerCase();
    return q.length === 0
      ? []
      : tours.filter((tour) => tour.titulo?.toLowerCase().includes(q));
  };

  const getSuggestionValue = (s) => s.titulo;

  const renderSuggestion = (s) => (
    <Link to={`/${s.tipo == 1 ? "paquetes" : "tours"}/${s.slug}`}>
      <div className="flex items-center gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer">
        <img src={s.foto_principal} alt={s.titulo} className="w-10 h-10 rounded" />
        <span>{s.titulo}</span>
      </div>
    </Link>
  );

  const handleSearch = () => {
    const q = value.trim();
    if (!q) return;
    const match = tours.find((t) => t.titulo?.toLowerCase() === q.toLowerCase());
    if (match) {
      navigate(`/${match.tipo == 1 ? "paquetes" : "tours"}/${match.slug}`);
    } else {
      navigate(`/buscar?q=${encodeURIComponent(q)}`);
    }
  };

  // ⬇️ Input custom SIN 'key' (evita remount) y como 'text' (sin X de search)
  const renderInputComponent = (inputProps) => {
    const { ref, key: _ignoredKey, ...rest } = inputProps; // ignora 'key'
    return (
      <div className="flex w-full items-center bg-white/95 backdrop-blur rounded-full shadow-2xl ring-1 ring-white/40 overflow-hidden">
        <div className="relative flex-1 min-w-0">
          <svg
            viewBox="0 0 24 24"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <input
            {...rest}
            ref={ref}
            type="text"
            className="bg-transparent w-full h-12 md:h-14 md:text-xl text-lg text-JisaGris/80 placeholder-JisaGris/30 pl-12 pr-4 outline-none"
          />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="mx-2 md:mx-3 rounded-full px-5 md:px-7 h-10 md:h-11 bg-JisaCyan text-white font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {t("header.buscar", "buscar")}
        </button>
      </div>
    );
  };

  return (
    <div id={id} className="relative z-[1300] w-full">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        inputProps={{
          placeholder: t("header.buscar-tour", "buscar tour"),
          value,
          onChange: (_, { newValue }) => setValue(newValue),
          onKeyDown: (e) => { if (e.key === "Enter") handleSearch(); },
          "aria-label": t("header.buscar-tour", "buscar tour"),
          autoComplete: "off",
        }}
        theme={{
          container: "relative w-full",
          suggestionsContainer: "absolute left-0 right-0 mt-2 z-[1400]",
          suggestionsContainerOpen: "absolute left-0 right-0 mt-2 z-[1400]",
          suggestionsList: "bg-white rounded-2xl shadow-2xl ring-1 ring-slate-200 overflow-auto max-h-80",
          suggestion: "px-4 py-2 flex items-center gap-3 border-b last:border-0 hover:bg-slate-50 cursor-pointer",
          suggestionHighlighted: "bg-slate-50",
        }}
      />
    </div>
  );
};

export default SearchBar;
