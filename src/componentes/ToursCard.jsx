import { NavLink } from "react-router-dom"
import CalendarIcon from "../assets/icons/CalendarIcon"
import CameraIcon from "../assets/icons/CameraIcon"
import GroupUsers from "../assets/icons/GroupUsers"
import MapDotIcon from "../assets/icons/MapDotIcon"
import ShareIcon from "../assets/icons/ShareIcon"
import BoxCard from "./BoxCard"
import IconTooltipCard from "./layout/IconTooltipCard"


const ToursCard = ({ title, image, location, description, price, dias, group, slug, category }) => {
    return (
        <div className="group w-full h-[512px] flex flex-col bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden transition-all duration-300"
            style={{ backgroundImage: `url(${image}) ` }}
        >
            <NavLink to={`/tours/${category}/${slug}`}>
                <div className="absolute inset-0 bg-JisaGris/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <BoxCard title={title} />
                <div className="absolute top-10 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex flex-col gap-2">
                        <IconTooltipCard icon={GroupUsers} tooltip={dias} />
                        <IconTooltipCard icon={CalendarIcon} tooltip={group} />
                        <span
                            href="#"
                            className="p-2 transition"
                        >
                            <CameraIcon size={24} className="text-white hover:text-JisaCyan transition duration-300" />
                        </span>
                        <span
                            href="#"
                            className="p-2 transition"
                        >
                            <ShareIcon size={24} className="text-white hover:text-JisaCyan transition duration-300" />
                        </span>
                    </div>
                </div>
                <div className="bg-white absolute bottom-0 w-full flex flex-col py-2 rounded-b-xl transition-all duration-300  z-10">
                    <div className="flex gap-x-2 text-JisaGris/30 px-4 items-center">
                        <MapDotIcon size={14} />
                        <div className="text-xs font-medium">{location}</div>
                    </div>

                    <h3 className="text-left font-medium text-base ps-4 text-JisaGris/80">
                        {description} etiqueta=""
                    </h3>
                    <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out ps-4">
                        <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
                        <div className="flex flex-col">
                            <span className="text-base font-semibold text-JisaGris/50">Desde</span>
                            <span className="text-xl font-bold text-JisaVerde">USD $ {price}</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default ToursCard