import { useState } from "react";
import CartIcon from "../assets/icons/CartIcon";
import StarIcon from "../assets/icons/StarIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import MailIcon from "../assets/icons/MailIcon";
import WhatsappColorIcon from "../assets/icons/WhatsappColorIcon";

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
             <a
                href="https://wa.me/51976294449"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
            >
                <WhatsappColorIcon size={35} />
            </a>
            {isOpen && (
                <div className="absolute bottom-20 right-0 flex flex-col space-y-3">
                    <a
                        href="mailto:info@jisaadventure.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
                    >
                        <MailIcon size={25} />
                    </a>
                    <a
                        href="https://wa.me/51976294449"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md"
                    >
                        <WhatsappColorIcon size={35} />
                    </a>

                </div>
            )}
        </div>
    );
};

export default FloatingContact;