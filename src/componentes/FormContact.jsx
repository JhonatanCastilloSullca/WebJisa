import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PhoneField from "./PhoneField"; // <-- tu componente reutilizable

function FormContact() {
  const { t } = useTranslation();

  const methods = useForm({
    defaultValues: {
      phone: "",
      country_code: "PE",  // se sobreescribe al elegir país
      dial_code: "+51",    // idem
      name: "",
      email: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data) => {
    // data incluye: phone, country_code (ISO-2) y dial_code (+NN)
    console.log("Datos enviados:", data);
  };

  return (
    <div className="w-full rounded-xl">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-10 space-y-4">
          {/* Teléfono (underline) + Nombre */}
          <div className="gap-2 grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <PhoneField
                name="phone"
                nameCountry="country_code"
                nameDial="dial_code"
                defaultCountry="pe"
                requiredMessage="El teléfono es obligatorio"
                variant="underline"   // 👈 estilo línea inferior
              />
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

          {/* Email */}
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

          {/* Mensaje */}
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

          {/* Botón */}
          <div className="flex md:justify-start justify-center">
            <button
              type="submit"
              className="px-16 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
            >
              {t("contact_section.form.enviar")}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormContact;
