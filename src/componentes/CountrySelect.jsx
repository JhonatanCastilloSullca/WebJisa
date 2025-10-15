import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";
countries.registerLocale(es);

export default function CountrySelect({ value = "PE", onChange, lang = "es", error = false }) {
  const names = countries.getNames(lang, { select: "official" });
  const options = Object.entries(names).map(([code, label]) => ({ value: code, label }));
  const selected = options.find(o => o.value === value) || null;

  const styles = {
    control: (base, state) => ({
      ...base,
      minHeight: 40,
      height: 40,
      borderRadius: 6,
      borderColor: error ? "#ef4444" : "#d1d5db",
      boxShadow: "none",
      overflow: "hidden",            // 👈 no dejar que nada se salga
      "&:hover": { borderColor: error ? "#ef4444" : "#9ca3af" },
    }),
    valueContainer: (base) => ({
      ...base,
      paddingLeft: 12,               // 👈 padding como tus inputs
      paddingRight: 8,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (base) => ({
      ...base,
      left: 12,                      // 👈 alinear con el padding
      margin: 0,
      maxWidth: "calc(100% - 56px)", // evita solaparse con el dropdown
    }),
    indicatorsContainer: (base) => ({ ...base, height: 40 }),
    dropdownIndicator: (base) => ({ ...base, padding: "0 8px" }),
    clearIndicator: (base) => ({ ...base, padding: "0 8px" }),
    menu: (base) => ({ ...base, zIndex: 50 }),
  };

  const Option = ({ data, ...props }) => (
    <div {...props.innerProps} className="flex items-center gap-2 px-2 py-1">
      <ReactCountryFlag svg countryCode={data.value} style={{ width: 18, height: 18 }} />
      <span>{data.label}</span>
    </div>
  );

  const SingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <ReactCountryFlag svg countryCode={data.value} style={{ width: 18, height: 18 }} />
      <span>{data.label}</span>
    </div>
  );

  return (
    <Select
      options={options}
      value={selected}
      onChange={(opt) => onChange?.(opt?.value || "")}
      isSearchable
      placeholder="Selecciona un país"
      components={{
        Option,
        SingleValue,
        IndicatorSeparator: () => null,   // 👈 opcional: quita la barrita
      }}
      styles={styles}
      menuPortalTarget={typeof document !== "undefined" ? document.body : null}
      menuPosition="fixed"
      menuPlacement="auto"
      className="w-full text-sm z-50"
    />
  );
}