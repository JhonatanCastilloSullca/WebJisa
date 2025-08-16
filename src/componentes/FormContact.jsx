import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function FormContact() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { phone: "", name: "", email: "", message: "" },
  });

  // const { run, data, isLoading, isError, error } = useApi({
  //   endpoint: "contact",   // ej: POST /api/contact
  //   method: "POST",
  //   manual: true,          // clave para ejecutarlo solo en submit
  // });

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="w-full rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-10 space-y-4">
        <div className="gap-2 grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Controller
                name="phone"
                control={control}
                rules={{ required: "El teléfono es obligatorio" }}
                render={({ field }) => (
                    <PhoneInput
                        value={field.value}
                        onChange={field.onChange}
                        className="phone-field w-full flex items-center border-b-2 border-JisaCyan rounded-md px-3 !h-[42px]"
                        inputClassName="!w-full !h-full !border-0 !outline-none !p-0 !m-0 bg-transparent focus:!ring-0"
                        countrySelectorProps={{
                            buttonClassName:
                            "!border-0 !bg-transparent !shadow-none !outline-none !rounded-md !p-0 pr-3 mr-2 flex items-center !h-full focus:!ring-0"
                        }}
                    />
                )}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="md:col-span-8 col-span-12">
            <input
              type="text"
              placeholder={t("contact_section.form.nombre")}
              {...register("name", { required: "El nombre es obligatorio" })}
              className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="email"
            placeholder={t("contact_section.form.email")}
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },
            })}
            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder={t("contact_section.form.informacion_adicional")}
            {...register("message", {
              required: "El mensaje es obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
            })}
            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex md:justify-start justify-center">
          <button
            type="submit"
            className="px-16 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
          >
            {t("contact_section.form.enviar")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;