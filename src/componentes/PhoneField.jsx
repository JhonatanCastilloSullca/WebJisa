import { Controller, useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneField({
  name = "phone",
  defaultCountry = "pe",
  rules,
  requiredMessage = "El teléfono es obligatorio",
  variant = "underline", // "underline" | "boxed"
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: requiredMessage,
        ...rules,
      }}
      render={({ field, fieldState }) => (
        <div className={`phone-field phone-${variant} ${fieldState.error ? "is-error" : ""}`}>
          <PhoneInput
            {...field}
            defaultCountry={defaultCountry}
            className="w-full"
            inputClassName="!w-full !h-full !border-0 !outline-none !p-0 !m-0 bg-transparent focus:!ring-0"
            countrySelectorProps={{
              buttonClassName:
                "!border-0 !bg-transparent !shadow-none !outline-none !rounded-md !p-0 pr-2 mr-2 flex items-center !h-full focus:!ring-0",
            }}
          />
          {fieldState.error && (
            <p className="text-xs text-red-500 mt-1">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
