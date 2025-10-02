import { NavLink } from "react-router-dom";
import MenuHeader from "../MenuHeader";
import CartIcon from "../../assets/icons/CartIcon";
import { useCart } from "../../contexts/CartContext";

function MenuIntern({ dataGeneral, menuOpen, menu = [] }) {
  return (
    <div className={`${menuOpen ? "block" : "hidden md:flex"}`}>
      {/* BARRA TURQUESA */}
      <div id="menubar" className="w-full bg-JisaCyan sticky top-0 z-[80]">
        <div className="mx-auto md:max-w-5xl px-2">
          <nav className="flex items-center justify-between">
            <div className="flex-1 flex justify-center">
              <MenuHeader menu={menu} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MenuIntern;
