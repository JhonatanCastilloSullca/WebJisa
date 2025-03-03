import HouseIcon from "../assets/icons/HouseIcon";
import MapDotIcon from "../assets/icons/MapDotIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import GroupUsers from "../assets/icons/GroupUsers";
import FootIcon from "../assets/icons/FootIcon";
import DirectionIcon from "../assets/icons/DirectionIcon";
import HornIcon from "../assets/icons/HornIcon";


export const menuSections = {
    home: [
        { id: "hero", icon: HouseIcon },
        { id: "about", icon: GroupUsers },
        { id: "packages", icon: FootIcon },
        { id: "destinos", icon: DirectionIcon },
        { id: "tours", icon: MapDotIcon },
        { id: "promociones", icon: HornIcon },
        { id: "contacto", icon: MapDotIcon },
        { id: "blog", icon: MapDotIcon },
        { id: "testimonios", icon: MapDotIcon },
        { id: "marcas", icon: MapDotIcon },
    ],
    about: [
        { id: "team", icon: MapDotIcon },
        { id: "history", icon: ShareIcon },
    ],
};
