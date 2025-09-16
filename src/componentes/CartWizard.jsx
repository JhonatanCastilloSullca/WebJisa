import { useState, useMemo } from "react";
import Step1Cart from "./Step1Cart";
import Step2Cart from "./Step2Cart";
import Step3Cart from "./Step3Cart";
import { useCart } from "../contexts/CartContext"

const steps = ["Resumen de itinerario", "Información de pasajeros", "Proceso de pago"];

export default function CartWizard({ tours,itemsCount,  totalItems, subtotal, impuestos, totalPrice }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [contact, setContact] = useState({
        name: "", last_name: "", email: "", phone: "", country_code: "PE"
    });

    const { cartItems } = useCart();
    const isEmpty = cartItems.length === 0;  

    const handleNext = () => {
        if (currentStep === 0 && isEmpty) return;
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const canGoTo = (index) => {
    if (index === 0) return true;
    // Solo bloquear cuando carrito vacío
    if (isEmpty) return false;
    return true;
  };

    const handleHeaderClick = (index) => {
        if (!canGoTo(index)) return;
        setCurrentStep(index);
    };

    const stepContent = {
        0: (
            <Step1Cart
                tours={tours}
                totalItems={totalItems}
                subtotal={subtotal}
                impuestos={impuestos}
                totalPrice={totalPrice}
                handleNext={handleNext}
            />
        ),
        1: (
            <Step2Cart
                totalItems={totalItems}
                contact={contact}
                setContact={setContact}
                handleNext={handleNext}
            />
        ),
        2: <Step3Cart 
            totalUSD={Number(totalPrice)}
            contact={contact}
            onBack={() => setCurrentStep(1)}
        />,
    };

    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => {
                    const disabled = index > 0 && totalItems === 0;

                    // 👇 determina el estado del paso
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    const isPending = index > currentStep;

                    return (
                    <div
                        key={index}
                        className={`flex flex-col items-center flex-1 relative 
                        ${disabled ? "cursor-default" : "cursor-pointer"}`}
                        onClick={() => {
                        if (!disabled) setCurrentStep(index);
                        }}
                    >
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center">
                        <div
                            className={`w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-full font-bold transition-all text-3xl
                            ${isActive ? "bg-JisaVerde text-white" : ""}
                            ${isCompleted ? "bg-JisaCyan text-white" : ""}
                            ${isPending ? "bg-JisaGris text-JisaVerde" : ""}`}
                        >
                            {index + 1}
                        </div>
                        </div>

                        {index < steps.length - 1 && (
                        <div className="absolute md:top-12 top-7 left-[50%] w-full h-1.5 bg-JisaGris -z-10"></div>
                        )}

                        <span
                        className={`mt-2 text-center transition-all md:text-lg h-[2ch] text-xs font-normal md:w-32 w-24
                            ${isActive ? "text-JisaCyan" : "text-gray-500"}`}
                        >
                        {step}
                        </span>
                    </div>
                    );
                })}
                </div>
            <div className="p-4"> {stepContent[currentStep]} </div>
        </div>
    );
}
