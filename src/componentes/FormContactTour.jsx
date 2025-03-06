import { useForm } from "react-hook-form";

const phoneCodes = [
    { code: "+1", country: "EE.UU." },
    { code: "+51", country: "Perú" },
    { code: "+34", country: "España" },
    { code: "+52", country: "México" },
    { code: "+16", country: "Estado Unidos Americanos" },
];

function FormContactTour() {
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
                <span className={`md:text-left text-center text-JisaCyan font-medium text-xl`} >
                    Datos Personales
                </span>
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
                    <div className="md:col-span-4 col-span-8">
                        <input
                            type="tel"
                            placeholder="Telefono"
                            {...register("phone", { required: "El teléfono es obligatorio" })}
                            className="w-full px-3 py-2 border-b-2  border-JisaCyan rounded-md"
                        />
                    </div>


                    <div className="md:col-span-6 col-span-12">
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
                    <div className="gap-2 grid grid-cols-12 ">
                        <div className="md:col-span-6 col-span-4">
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
                        <div className="md:col-span-6 col-span-4">
                            <label className="block text-sm font-medium"></label>
                            <input
                                type="text"
                                placeholder="Pais"
                                {...register("pais", {
                                    required: "El pais es obligatorio",
                                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                                })}
                                className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                            />
                            {errors.pais && <p className="text-red-500 text-sm">{errors.pais.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="">
                    <span className={`md:text-left text-center text-JisaCyan font-medium text-xl`} >
                        Datos Personales
                    </span>
                </div>

                <div className="gap-2 grid grid-cols-12 ">
                    <div className="md:col-span-6 col-span-4">
                        <label className="block text-sm font-medium"></label>
                        <input
                            type="text"
                            placeholder="Tour interesado"
                            {...register("tour", {
                                required: "El tour es obligatorio",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                            })}
                            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        />
                        {errors.tour && <p className="text-red-500 text-sm">{errors.tour.message}</p>}
                    </div>
                    <div className="md:col-span-6 col-span-4">
                        <label className="block text-sm font-medium"></label>
                        <input
                            type="date"
                            {...register("fecha", {
                                required: "El fecha es obligatorio",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                            })}
                            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        />
                        {errors.fecha && <p className="text-red-500 text-sm">{errors.fecha.message}</p>}
                    </div>
                </div>

                <div className="gap-2 grid grid-cols-12 ">
                    <div className="md:col-span-6 col-span-4">
                        <label className="block text-sm font-medium"></label>
                        <input
                            type="number"
                            placeholder="Adultos"
                            {...register("adultos", {
                                required: "El adultos es obligatorio",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                            })}
                            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        />
                        {errors.adultos && <p className="text-red-500 text-sm">{errors.adultos.message}</p>}
                    </div>
                    <div className="md:col-span-6 col-span-4">
                        <label className="block text-sm font-medium"></label>
                        <input
                            type="number"
                            placeholder="Niños"
                            {...register("niños", {
                                required: "El niños es obligatorio",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Correo inválido" },

                            })}
                            className="w-full px-3 py-2 border-b-2 border-JisaCyan rounded-md"
                        />
                        {errors.niños && <p className="text-red-500 text-sm">{errors.niños.message}</p>}
                    </div>
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
export default FormContactTour