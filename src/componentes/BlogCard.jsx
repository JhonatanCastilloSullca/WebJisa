import CalendarIcon from "../assets/icons/CalendarIcon"
import CameraIcon from "../assets/icons/CameraIcon"
import GroupUsers from "../assets/icons/GroupUsers"
import MapDotIcon from "../assets/icons/MapDotIcon"
import ShareIcon from "../assets/icons/ShareIcon"
import BoxCard from "./BoxCard"
import IconTooltipCard from "./layout/IconTooltipCard"


const BlogCard = ({ title, image, author, fecha, description, context, color }) => {
    return (
        <div className="group w-full h-[256px] flex flex-col bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden transition-all duration-300"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-JisaGris/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <BoxCard title={title} color={color} />
            <div className="absolute flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 justify-center items-center  inset-0">
                <div className="flex flex-col gap-2">
                    <p className="text-center font-light text-white px-8 text-sm -mt-10">
                        {context}
                    </p>
                </div>
            </div>

            <div className="bg-white absolute bottom-0 w-full flex flex-col py-2 rounded-b-xl transition-all duration-300  z-10">

                <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out ps-4">
                    <div className="flex ">
                        <div className="flex gap-x-2 text-JisaGris/30 px-4 items-center">
                            <MapDotIcon size={14} />
                            <div className="text-xs font-medium">{author}</div>
                        </div>
                        <div className="flex gap-x-2 text-JisaGris/30 px-4 items-center">
                            <MapDotIcon size={14} />
                            <div className="text-xs font-medium">{fecha}</div>
                        </div>
                    </div>
                    <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
                </div>

                <div className="text-left font-medium text-base ps-4 text-JisaGris/80">
                    {description}
                </div>

            </div>
        </div>
    )
}

export default BlogCard