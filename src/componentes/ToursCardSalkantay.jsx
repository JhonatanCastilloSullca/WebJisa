import { NavLink } from "react-router-dom"
import CalendarIcon from "../assets/icons/CalendarIcon"
import CameraIcon from "../assets/icons/CameraIcon"
import GroupUsers from "../assets/icons/GroupUsers"
import MapDotIcon from "../assets/icons/MapDotIcon"
import ShareIcon from "../assets/icons/ShareIcon"
import BoxCard from "./BoxCard"
import IconTooltipCard from "./layout/IconTooltipCard"
import ClockIcon from "../assets/icons/ClockIcon"
import MountainHikIcon from "../assets/icons/MountainHikIcon"
import SeparatorBarHorizontal from "./SeparatorBarHorizontal"
import StarIcon from "../assets/icons/StarIcon"


const ToursCardSalkantay = ({ title, image, location, description, price, dias, group, slug, resumen, category, tipo }) => {
  const tipoFinal = tipo == 1 ? 'paquetes' : 'tours';
  return (
    // <NavLink to={`/tours/${slug}`}>
      <div className="group w-full flex flex-col bg-cover bg-center rounded-md shadow-lg relative overflow-hidden transition-all duration-300">
        <div
          className="group w-full h-64 flex flex-col bg-cover bg-center shadow-lg relative overflow-hidden transition-all duration-300"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Capa oscura que aparece al hacer hover */}
          <div className=" bg-JisaGris/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          {/* Contenido blanco inferior */}

        </div>
        <div className="bg-white  w-full flex flex-col rounded-b-md transition-all duration-300 px-4 py-4">
          <div className="flex justify-between gap-x-2 text-JisaGris items-center">
            <div className="flex gap-x-2">
              <div className="text-JisaCyan">
                <ClockIcon size={16} />
              </div>
              <h3 className="text-xs font-medium">{dias} Dias</h3>
            </div>
            <div className="flex gap-x-2">
              <div className="text-JisaCyan">
                <MountainHikIcon size={16} />
              </div>
              <span className="text-xs font-medium">{title}</span>
            </div>
          </div>

          <hr className="my-2" />

          <div>
            <span className="text-lg font-medium">{description}</span>
          </div>
          <div>
            <span className="text-xs font-light text-JisaGrisTextGray">{location}</span>
          </div>
          <div>
            <div className="text-sm font-light text-JisaGris/70 line-clamp-3" dangerouslySetInnerHTML={{ __html: resumen }} />
          </div>

          <div className="flex justify-between py-2 items-center">
            <div className="flex flex-col text-JisaGris/70 text-xs font-light justify-center gap-y-1">
              <span className="flex gap-x-2"><GroupUsers size={14} /> {group} personas</span>
              <span className="flex gap-x-2"><MountainHikIcon size={14} /> 456456m /4554 ft</span>
              <span className="flex gap-x-2"><StarIcon size={14} /> 4.9 (48486 reviews)</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <span className="font-light text-JisaGris/70 text-xs">
                From <b>$ {price}</b> per person
              </span>
              <NavLink
                to={`/${tipoFinal}/${slug}`}
                className="bg-JisaCyan text-white rounded-sm text-center flex px-6 md:font-medium font-bold md:text-sm text-xl py-2 items-center"
              >
                Ver Itinerario
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    // </NavLink>

  )
}

export default ToursCardSalkantay