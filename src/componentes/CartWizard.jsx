import { useState } from "react";
import Step1Cart from "./Step1Cart";
import Step2Cart from "./Step2Cart";
import Step3Cart from "./Step3Cart";

const steps = ["Resumen de itinerario", "Información de pasajeros", "Proceso de pago"];



export default function CartWizard({ tours, totalItems, subtotal, impuestos, totalPrice }) {
    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const stepContent = {
        0: <Step1Cart
            tours={tours}
            totalItems={totalItems}
            subtotal={subtotal}
            impuestos={impuestos}
            totalPrice={totalPrice}
            handleNext={handleNext}
        />,
        1: <Step2Cart
            totalItems={totalItems}
            handleNext={handleNext}

        />,
        2: <Step3Cart />,
    };
    const [currentStep, setCurrentStep] = useState(0);



    return (
        <div className="max-w-7xl w-full mx-auto">
            {/* Stepper */}
            <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 relative cursor-pointer" onClick={() => setCurrentStep(index)}>
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white font-bold transition-all
                            ${index === currentStep ? "bg-JisaVerde text-white text-3xl" : "bg-JisaGris text-JisaVerde text-3xl"}`}>
                                {index + 1}
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="absolute top-12 left-[50%] w-full h-1.5 bg-JisaGris -z-10"></div>
                        )}
                        <span className={`mt-2  text-center transition-all text-lg font-normal w-32
                            ${index === currentStep ? "text-JisaCyan" : "text-gray-500"}`}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>

            <div className="p-4">
                {stepContent[currentStep]}
            </div>

            <div className="flex justify-between mt-6">

            </div>
        </div>
    );
}
