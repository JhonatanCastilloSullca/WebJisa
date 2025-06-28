import React from "react";

const NosotrosCardSect = ({ title, description, Icon }) => {
    return (
        <div className="md:col-span-3 col-span-6 h-auto flex md:items-start items-center justify-center align-middle">
            <div className="flex flex-col justify-center items-center px-4">
                <h5 className="text-JisaCyan font-semibold md:text-3xl text-lg text-center h-[2ch] mb-8">
                    {title}
                </h5>
                <div className="text-JisaVerde py-4 md:block hidden">
                    <Icon size={80} />
                </div>
                <div className="text-JisaVerde py-4 md:hidden block">
                    <Icon size={40} />
                </div>
                <span className="font-normal md:text-xl text-xs  text-center text-JisaGris">
                    {description}
                </span>
            </div>
        </div>
    );
};

export default NosotrosCardSect;
