import { useForm } from "react-hook-form";

const phoneCodes = [
    { code: "+1", country: "EE.UU." },
    { code: "+51", country: "Perú" },
    { code: "+34", country: "España" },
    { code: "+52", country: "México" },
    { code: "+16", country: "Estado Unidos Americanos" },
];

function FormContact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
    };

    return (
        <div className="w-full  rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-10 space-y-4">
                <div className="gap-2 grid grid-cols-12 ">
                    <div className="md:col-span-2 col-span-4">
                        <select
                            {...register("phoneCode", { required: "Selecciona un código de país" })}
                            className=" w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md text-black/40 "

                        >
                            <option value="">Code</option>
                            {phoneCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.code} ({item.country})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="md:col-span-5 col-span-8">
                        <input
                            type="tel"
                            placeholder="Telefono"
                            {...register("phone", { required: "El teléfono es obligatorio" })}
                            className="w-full px-3 py-2 border-b-2  border-JisaCyan rounded-md"
                        />
                    </div>

                    <div className="md:col-span-5 col-span-12">
                        <input
                            type="text"
                            placeholder="Nombre"
                            {...register("name", { required: "El nombre es obligatorio" })}
                            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    {errors.phoneCode && <p className="text-red-500 text-sm">{errors.phoneCode.message}</p>}
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium"></label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                        })}
                        className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Información adicional"
                        {...register("message", {
                            required: "El mensaje es obligatorio",
                            minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" },
                        })}
                        className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        rows="4"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <div className="flex md:justify-start justify-center">
                    <button
                        type="submit"
                        className=" cursor-pointer px-16 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                    >
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    );
}
export default FormContact